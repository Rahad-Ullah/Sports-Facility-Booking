import { TUser } from '../user/user.interface'
import { User } from '../user/user.model'

const signUpUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload)
  return result
}

export const AuthServices = {
  signUpUserIntoDB,
}
