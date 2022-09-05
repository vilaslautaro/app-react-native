import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("address.db");

export const init = () => {
  const promise = new Promise((res, rej) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS address 
            (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, address TEXT NOT NULL, image TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL)`,
        [],
        () => {
          res();
        },
        (_, err) => {
          rej(err);
        }
      );
    });
  });
  return promise;
};

export const insertAddress = (title, image, address, lat, lng) => {
  const promise = new Promise((res, rej) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO address (title, image, address, lat, lng) VALUES (?,?,?,?,?)`,
        [title, image, address, lat, lng],
        (_, data) => {
          res(data);
        },
        (_, err) => {
          rej(err);
        }
      );
    });
  });
  return promise;
};

export const fetchAddress = () => {
  const promise = new Promise((res, rej) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM address`,
        [],
        (_, data) => {
          res(data);
        },
        (_, err) => {
          rej(err);
        }
      );
    });
  });
  return promise;
};
