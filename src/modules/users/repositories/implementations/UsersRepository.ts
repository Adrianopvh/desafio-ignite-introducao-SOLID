import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const userNew = new User()
    Object.assign(userNew, { name, email })
    this.users.push(userNew)
    return userNew
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const userNew = this.users.find((user) => user.id === id)
    return userNew
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const userNew = this.users.find((user) => user.email === email)
    return userNew
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    receivedUser.admin = true
    receivedUser.updated_at = new Date()
    const userReceive = this.users.findIndex((user) => user.id === receivedUser.id)
    Object.assign(this.users[userReceive], receivedUser)
    return receivedUser
  }

  list(): User[] {
    // Complete aqui
    return this.users
  }
}

export { UsersRepository };
