import { Request, RequestHandler, Response } from 'express'
import { AuthServices } from './auth.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'

// signup
const signUp: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AuthServices.signUpUserIntoDB(req.body)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'User registered successfully',
      data: result,
    })
  },
)

export const AuthControllers = {
  signUp,
}
