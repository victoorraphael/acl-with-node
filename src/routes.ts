import { Router } from "express";
import { StudentController } from "./controller/StudentController";

const routes = Router()

routes.post("/student", new StudentController().handlerCreate)

export { routes };
