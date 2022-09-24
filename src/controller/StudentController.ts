import { Request, Response } from "express";
import { CreateStudentService } from "../services/createStudentService";

export class StudentController {
  async handlerCreate(req: Request, res: Response) {
    const { firstName, lastName } = req.body

    const svc = new CreateStudentService()
    const result = await svc.run({ firstName, lastName })

    if (result instanceof Error) {
      return res.status(400).json(result.message)
    }

    return res.status(201).json(result)
  }
}