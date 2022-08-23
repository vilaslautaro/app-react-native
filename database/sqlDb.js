import { SQLite } from "expo-sqlite";
import { getMultiFactorResolver } from "firebase/auth";

const db = SQLite.openDatabase("address.db");

export const init = () => {
  const promise = new Promise((res, rej) => {
    /*  db.transaction(tx => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS addresss 
            (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, address TEXT NOT NULL, image TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL`)
            ,[], 
            () => {getMultiFactorResolver()},
        })
        }) */
  });
};
