import { Student } from "../entities/student";
import { StudentRepository } from "../repositories";

type StudentRequest = {
  firstName: string;
  lastName: string;
}

export class CreateStudentService {
  async run({ firstName, lastName }: StudentRequest): Promise<Error | Student > {
    const repo = StudentRepository()

    const exists = await repo.findOneBy({ firstName, lastName })

    if (exists) {
      return new Error("student already exists!")
    }

    const newStudent = repo.create({firstName, lastName})
    await repo.save(newStudent)
    return newStudent
  }
}