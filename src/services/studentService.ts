import { Student } from "../entities/student";
import { StudentRepository } from "../repositories";

type StudentRequest = {
  firstName: string;
  lastName: string;
}

class StudentService {
  async create({ firstName, lastName }: StudentRequest): Promise<Error | Student> {
    const repo = StudentRepository()
  
    const exists = await repo.findOneBy({ firstName, lastName })
  
    if (exists) {
      return new Error("student already exists!")
    }
  
    const newStudent = repo.create({ firstName, lastName })
    await repo.save(newStudent)
    return newStudent
  }

  async list(): Promise<Student[]> {
    const repo = StudentRepository()
    return repo.find()
  }

  async getById(id: string): Promise<Error | Student> {
    const repo = StudentRepository()

    const student = await repo.findOneBy({ id })

    if (!student) {
      return new Error("student does not exists!")
    }

    return student
  }

  async update(id: string, { firstName, lastName}: StudentRequest): Promise<Error | Student> {
    const repo = StudentRepository()

    const student = await repo.findOne({ where: { id }})

    if (!student) {
      return new Error("wrong student ID")
    }
    
    student.firstName = firstName
    student.lastName = lastName
    await repo.save(student)

    return student
  }

  async delete(id: string): Promise<Error | boolean> {
    const repo = StudentRepository()

    const student = await repo.findOne({ where: { id }})

    if (!student) {
      return new Error("wrong student ID")
    }

    await repo.remove(student)
    return true
  }
}

export const studentService = new StudentService();
