import axios from "axios";

export default class ImageDatabase {
  static getImage(url) {
    var image;
    if (navigator.onLine) {
      console.log("nav Offline");
      // online, download images since we can
      this.getImageFromUrl(url).then(function(imageString) {
        this.updateDatabase(url, imageString); // put this new image into the DB too
        image = imageString;
      });
    } else {
      // offline, see if image in DB else get the defautl offline image
      image = this.getImageFromDatabase(url);
    }
  }

  static getImageFromUrl(url) {
    // gets an image in base64
    return axios
      .get(url, {
        responseType: "arraybuffer"
      })
      .then(response => {
        console.log(response);
        var buf = new Buffer(response.data, "binary").toString("base64");
        console.log("buf", buf);
        return buf;
      });
  }

  static updateDatabase(url, imageString) {
    //put this new item into the DB if we got it from the internet
    var request = indexedDB.open("MyTestDatabase", 4);

    request.onerror = function(event) {
      // db.onerror rather than request.onerror since higher level, bubbles up...
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };

    request.onsuccess = function(event) {
      var db = event.target.result;
      console.log("successfully accessed DB", db);
      doTransaction(db);
    };

    request.onupgradeneeded = function(event) {
      var db = event.target.result;

      // Create another object store called "names" with the autoIncrement flag set as true.
      var objStore = db.createObjectStore("images");
      console.log("got to upgrade needed", db);
    };

    function doTransaction(db) {
      var transaction = db.transaction("images");
      var objectStore = transaction.objectStore("images");
      var request = objectStore.get(url);
      request.onsuccess = function(event) {
        console.log(
          "successfully pulled something from DB, OR null if not already there"
        );
        if (event.target.result) {
          //object already exists
          event.target.update(imageString);
        } else {
          // object doesn't exist
          objectStore.add(imageString);
        }
      };
      request.onerror = function(event) {
        console.log("Error in DB logic");
      };
    }
  }

  static loadNoInternetPhoto() {
    // returns a base64 image for displaying when no internet + image not cached
    var fs = require("fs");
    var text = fs.readFileSync("./resources/nointernetb64").toString("utf-8");
    var textByLine = text.split("\n");
  }

  static getImageFromDatabase(url) {
    var request = indexedDB.open("MyTestDatabase", 4);
    var image;

    request.onerror = function(event) {
      // db.onerror rather than request.onerror since higher level, bubbles up...
      console.log("Why didn't you allow my web app to use IndexedDB?!");
    };

    request.onsuccess = function(event) {
      var db = event.target.result;
      console.log("successfully accessed DB", db);
      doTransaction(db);
    };

    request.onupgradeneeded = function(event) {
      var db = event.target.result;

      // Create another object store called "names" with the autoIncrement flag set as true.
      var objStore = db.createObjectStore("images");
      console.log("got to upgrade needed", db);
    };

    function doTransaction(db) {
      var transaction = db.transaction("images");
      var objectStore = transaction.objectStore("images");
      var request = objectStore.get(url);
      request.onsuccess = function(event) {
        console.log("successfully pulled something from DB");
        image = request.result;
      };
      request.onerror = function(event) {
        console.log("Image not found in DB");
        image = this.loadNoInternetPhoto();
      };
    }
    return image;
  }
}

// Testing functions below

(function() {
  var url = "https://picsum.photos/200";

  function getImg() {
    return axios
      .get(url, {
        responseType: "arraybuffer"
      })
      .then(response => {
        console.log(response);
        var buf = new Buffer(response.data, "binary").toString("base64");
        console.log("buf", buf);
        return buf;
      });
  }

  var request = indexedDB.open("MyTestDatabase", 4);

  request.onerror = function(event) {
    // db.onerror rather than request.onerror since higher level, bubbles up...
    console.log("Why didn't you allow my web app to use IndexedDB?!");
  };

  request.onsuccess = function(event) {
    var db = event.target.result;
    console.log("successfully accessed DB", db);
    doTransaction(db);
  };

  request.onupgradeneeded = function(event) {
    var db = event.target.result;

    // Create another object store called "names" with the autoIncrement flag set as true.
    var objStore = db.createObjectStore("images");
    console.log("got to upgrade needed", db);
  };

  function doTransaction(db) {
    // first resolve image promise
    getImg().then(function(data) {
      var transaction = db.transaction(["images"], "readwrite");

      // Do something when all the data is added to the database.
      transaction.oncomplete = function(event) {
        console.log("All done!");
      };

      transaction.onerror = function(event) {
        // Don't forget to handle errors!
        console.log("error in transaction with IndexedDB");
      };
      var objectStore = transaction.objectStore("images");
      request = objectStore.add(data, 6);

      request.onsuccess = function(event) {
        console.log("adding in request was successful!");
      };
    });
  }
})();
