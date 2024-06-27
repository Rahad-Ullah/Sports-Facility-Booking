import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TUser } from '../user/user.interface'
import { User } from '../user/user.model'
import bcrypt from 'bcrypt'
import { createToken } from './auth.utils'
import config from '../../config'

// sign-up
const signUpUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload)
  return {
    _id: result?._id,
    name: result?.name,
    email: result?.email,
    role: result?.role,
    phone: result?.phone,
    address: result?.address,
  }
}

// login
const loginUserIntoDB = async (payload: TUser) => {
  const { email, password } = payload

  // check if the user exist
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!')
  }

  // verify password
  const verify = await bcrypt.compare(password, user?.password)
  if (!verify) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Incorrect password!')
  }

  // generate jwt token
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  }

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  )

  return {
    _id: user?._id,
    name: user?.name,
    email: user?.email,
    role: user?.role,
    phone: user?.phone,
    address: user?.address,
    token: accessToken,
  }
}

export const AuthServices = {
  signUpUserIntoDB,
  loginUserIntoDB,
}
