import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      // Complete aqui
      const { user_id } = request.params
      const userNew = this.showUserProfileUseCase.execute({ user_id })
      return response.json(userNew)
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }
}

export { ShowUserProfileController };
