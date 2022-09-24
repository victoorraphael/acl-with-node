import { Professor } from "../entities/professor";
import { StudentRepository as ProfessorRepository } from "../repositories";

type ProfessorRequest = {
  firstName: string;
  lastName: string;
}

class ProfessorService {
  async create({ firstName, lastName }: ProfessorRequest): Promise<Error | Professor> {
    const repo = ProfessorRepository()
  
    const exists = await repo.findOneBy({ firstName, lastName })
  
    if (exists) {
      return new Error("professor already exists!")
    }
  
    const newProfessor = repo.create({ firstName, lastName })
    await repo.save(newProfessor)
    return newProfessor
  }

  async list(): Promise<Professor[]> {
    const repo = ProfessorRepository()
    return repo.find()
  }

  async getById(id: string): Promise<Error | Professor> {
    const repo = ProfessorRepository()

    const professor = await repo.findOneBy({ id })

    if (!professor) {
      return new Error("professor does not exists!")
    }

    return professor
  }

  async update(id: string, { firstName, lastName}: ProfessorRequest): Promise<Error | Professor> {
    const repo = ProfessorRepository()

    const professor = await repo.findOne({ where: { id }})

    if (!professor) {
      return new Error("wrong student ID")
    }
    
    professor.firstName = firstName
    professor.lastName = lastName
    await repo.save(professor)

    return professor
  }

  async delete(id: string): Promise<Error | boolean> {
    const repo = ProfessorRepository()

    const professor = await repo.findOne({ where: { id }})

    if (!professor) {
      return new Error("wrong student ID")
    }

    await repo.remove(professor)
    return true
  }
}

export const professorService = new ProfessorService();
