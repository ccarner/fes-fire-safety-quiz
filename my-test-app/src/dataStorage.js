import axios from "axios";
import { openDB, deleteDB, wrap, unwrap } from "idb";

export default class IndexedDataBase {
  //get the DB object.
  static async initialise() {
    if (!("indexedDB" in window)) {
      console.log("This browser doesn't support IndexedDB");
      return;
    }

    return openDB("FesAppStorage", 6, {
      upgrade(db, oldVersion, newVersion, transaction) {
        if (!db.objectStoreNames.contains("checklistSaves")) {
          console.log("Upgrading the DB, creating new Object stores");
          var checklistSaves = db.createObjectStore("checklistSaves", {
            keyPath: ["filename", "completionTime"]
          });
          checklistSaves.createIndex("filename", "filename", { unique: false });
          var quizSaves = db.createObjectStore("quizSaves", {
            keyPath: ["filename", "completionTime"]
          });
          quizSaves.createIndex("filename", "filename", { unique: false });
          var preferences = db.createObjectStore("preferences", {
            keyPath: "preferenceName"
          });
        }
      }
    });
  }

  //filename is the name of the checklsit on the server (a unique value which is
  // used as the ID for retrieval)
  static async addChecklistSave(filename, selections, comment, completionTime) {
    return IndexedDataBase.initialise().then(function(db) {
      var tx = db.transaction(["checklistSaves"], "readwrite");
      var chklst = tx.objectStore("checklistSaves");
      var componentsToAdd = {
        filename: filename,
        completionTime,
        selections: selections,
        comment: comment
      };
      chklst.add(componentsToAdd);
      return tx.complete;
    });
  }

  static async getChecklistSaves(filename) {
    return IndexedDataBase.initialise()
      .then(function(db) {
        var tx = db.transaction("checklistSaves", "readonly");
        var chklst = tx.objectStore("checklistSaves");
        var index = chklst.index("filename");
        return index.getAll(filename);
      })
      .then(function(values) {
        return values;
      });
  }

  static async addQuizSave(filename, selections, completionTime) {
    return IndexedDataBase.initialise().then(function(db) {
      var tx = db.transaction(["quizSaves"], "readwrite");
      var quiz = tx.objectStore("quizSaves");
      var componentsToAdd = {
        filename: filename,
        completionTime,
        selections: selections
      };
      quiz.add(componentsToAdd);

      return tx.complete;
    });
  }

  static async getQuizSaves(filename) {
    return IndexedDataBase.initialise()
      .then(function(db) {
        var tx = db.transaction("quizSaves", "readonly");
        var quiz = tx.objectStore("quizSaves");
        var index = quiz.index("filename");
        return index.getAll(filename);
      })
      .then(function(values) {
        return values;
      });
  }

  static async setPreference(preferenceName, value) {
    return IndexedDataBase.initialise()
      .then(function(db) {
        var tx = db.transaction("preferences", "readwrite");
        var prefs = tx.objectStore("preferences");
        var componentsToAdd = {
          preferenceName: preferenceName,
          value: value
        };
        //use put to overwrite
        prefs.put(componentsToAdd);
        return tx.complete;
      })
      .catch(err => {
        console.log(err);
      });
  }

  static async getPreference(preferenceName) {
    return IndexedDataBase.initialise().then(function(db) {
      var tx = db.transaction("preferences", "readonly");
      var prefs = tx.objectStore("preferences");
      return prefs.getAll(preferenceName);
    });
  }
}
