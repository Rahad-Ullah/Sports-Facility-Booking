import { Request, RequestHandler, Response } from 'express'
import { AuthServices } from './auth.service'

const signUp: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result = await AuthServices.signUpUserIntoDB(req.body)

    res.status(200).json({
      success: true,
      message: 'Signup successful',
      data: result,
    })
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

export const AuthControllers = {
  signUp,
}
