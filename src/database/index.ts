import { Connection, createConnection } from "typeorm";

class Database {
  public connection: Connection;

  constructor() {
    this.connect()
  }

  private connect(): void {
    createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "root",
      password: "topsecret",
      database: "aclnode",
      entities: [
        __dirname + "/entity/*.ts",
        __dirname + "/entity/*.js"
      ],
      synchronize: true,
      logging: false
    })
    .then(_con => {
      this.connection = _con
      console.log("DB connected!")
    }).catch(console.error)
  }
}

export const db = new Database();