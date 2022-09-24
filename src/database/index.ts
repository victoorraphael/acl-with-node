import { createConnection } from "typeorm";

createConnection()
// import { DataSource } from "typeorm";
// import "reflect-metadata"

// class Database {
//   public connection: DataSource;

//   constructor() {
//     this.connect()
//   }

//   private connect(): void {
//     new DataSource({
//       type: "postgres",
//       host: "localhost",
//       port: 5432,
//       username: "root",
//       password: "topsecret",
//       database: "aclnode",
//       synchronize: true,
//       logging: false,
//       entities: [
//        __dirname +  "src/entities/**/*.ts",
//        __dirname +  "src/entities/**/*.js",
//       ],
//   })
//   .initialize()
//   .then(_con => {
//     this.connection = _con
//     console.log("DB connected")
//   })
//   .catch(console.error)
//   }
// }

// export const db = new Database();