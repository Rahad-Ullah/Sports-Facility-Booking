import { Request, RequestHandler, Response } from 'express'
import { AuthServices } from './auth.service'
import catchAsync from '../../utils/catchAsync'

const signUp: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AuthServices.signUpUserIntoDB(req.body)

    res.status(200).json({
      success: true,
      message: 'Signup successful',
      data: result,
    })
  },
)

export const AuthControllers = {
  signUp,
}
