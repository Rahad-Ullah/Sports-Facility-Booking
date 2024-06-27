import { TUser } from '../user/user.interface'
import { User } from '../user/user.model'

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

export const AuthServices = {
  signUpUserIntoDB,
}
