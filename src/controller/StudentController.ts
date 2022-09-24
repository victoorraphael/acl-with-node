import { Request, Response } from "express";
import { studentService } from "../services/studentService";

export class StudentController {
  async handlerCreate(req: Request, res: Response) {
    const { firstName, lastName } = req.body

    const result = await studentService.create({ firstName, lastName })

    if (result instanceof Error) {
      return res.status(400).json(result.message)
    }

    return res.status(201).json(result)
  }

  async handlerList(req: Request, res: Response) {
    const result = await studentService.list()
    return res.status(200).json(result)
  }

  async handlerGetById(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json("missing ID")
    }

    const result = await studentService.getById(id)

    if (result instanceof Error) {
      return res.status(400).json(result.message)
    }

    return res.status(200).json(result)
  }

  async handlerUpdate(req: Request, res: Response) {
    const { id } = req.params
    const { firstName, lastName } = req.body

    if (!id) {
      return res.status(400).json("missing ID")
    }

    const result = await studentService.update(id, { firstName, lastName })
    if (result instanceof Error) {
      return res.status(400).json(result.message)
    }

    return res.status(200).json(result)
  }

  async handlerDelete(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json("missing ID")
    }

    const result = await studentService.delete(id)

    if (result instanceof Error) {
      return res.status(400).json(result.message)
    }

    return res.status(200).json({success: result})
  }
}