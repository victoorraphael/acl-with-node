import { Request, Response } from "express";
import { professorService } from "../services/professorService";

export class ProfessorController {
  async handlerCreate(req: Request, res: Response) {
    const { firstName, lastName } = req.body

    const result = await professorService.create({ firstName, lastName })

    if (result instanceof Error) {
      return res.status(400).json(result.message)
    }

    return res.status(201).json(result)
  }

  async handlerList(req: Request, res: Response) {
    const result = await professorService.list()
    return res.status(200).json(result)
  }

  async handlerGetById(req: Request, res: Response) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json("missing ID")
    }

    const result = await professorService.getById(id)

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

    const result = await professorService.update(id, { firstName, lastName })
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

    const result = await professorService.delete(id)

    if (result instanceof Error) {
      return res.status(400).json(result.message)
    }

    return res.status(200).json({success: result})
  }
}