import { Router } from "express";
import { ProfessorController } from "./controller/ProfessorController";
import { StudentController } from "./controller/StudentController";

const routes = Router()

const student = new StudentController()
const professor = new ProfessorController()

routes.post("/student", student.handlerCreate)
routes.get("/students", student.handlerList)
routes.get("/student/:id", student.handlerGetById)
routes.patch("/student/:id", student.handlerUpdate)
routes.delete("/student/:id", student.handlerDelete)

routes.post("/professor", professor.handlerCreate)
routes.get("/professors", professor.handlerList)
routes.get("/professor/:id", professor.handlerGetById)
routes.patch("/professor/:id", professor.handlerUpdate)
routes.delete("/professor/:id", professor.handlerDelete)

export { routes };
