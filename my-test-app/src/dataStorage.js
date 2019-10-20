import axios from "axios";
import { openDB, deleteDB, wrap, unwrap } from "idb";

export default class IndexedDataBase {
  //get the DB object.
  static async initialise() {
    if (!("indexedDB" in window)) {
      console.log("This browser doesn't support IndexedDB");
      return;
    }

    return openDB("FesAppStorage", 5, {
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
        }
      }
    });
  }

  //filename is the name of the checklsit on the server (a unique value which is
  // used as the ID for retrieval)
  static async addChecklistSave(
    filename,
    checklistFile,
    selections,
    comment,
    completionTime
  ) {
    return this.initialise().then(function(db) {
      var tx = db.transaction(["checklistSaves"], "readwrite");
      var chklst = tx.objectStore("checklistSaves");
      var componentsToAdd = {
        filename: filename,
        completionTime,
        checklistFile: checklistFile,
        selections: selections,
        comment: comment
      };
      chklst.add(componentsToAdd);
      return tx.complete;
    });
  }

  static async getChecklistSave(filename) {
    return this.initialise()
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

  static async addQuizSave(filename, quizFile, selections, completionTime) {
    return this.initialise().then(function(db) {
      var tx = db.transaction(["quizSaves"], "readwrite");
      var quiz = tx.objectStore("quizSaves");
      var componentsToAdd = {
        filename: filename,
        completionTime,
        quizFile: quizFile,
        selections: selections
      };
      quiz.add(componentsToAdd);
      return tx.complete;
    });
  }

  static async getQuizSave(filename) {
    return this.initialise()
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
}
