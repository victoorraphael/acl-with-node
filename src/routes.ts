import { Router } from "express";
import { StudentController } from "./controller/StudentController";

const routes = Router()

const student = new StudentController()

routes.post("/student", student.handlerCreate)
routes.get("/students", student.handlerList)
routes.get("/student/:id", student.handlerGetById)
routes.patch("/student/:id", student.handlerUpdate)
routes.delete("/student/:id", student.handlerDelete)

export { routes };
