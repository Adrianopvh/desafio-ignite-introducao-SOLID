import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userNew = this.usersRepository.findById(user_id)
    if (!userNew)
      throw new Error('Usuário não existe')

    return userNew
  }
}

export { ShowUserProfileUseCase };
