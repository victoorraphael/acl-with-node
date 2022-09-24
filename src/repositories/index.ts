import { Permission } from "../entities/permission";
import { Professor } from "../entities/professor";
import { Student } from "../entities/student";
import { getRepository } from "typeorm";

export const StudentRepository = () => getRepository(Student);

export const ProfessorRepository = () => getRepository(Professor);

export const PermissionRepository = () => getRepository(Permission);
