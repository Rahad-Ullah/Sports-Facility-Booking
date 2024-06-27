import { Router } from 'express'
import { AuthControllers } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { userValidation } from '../user/user.validation'

const router = Router()

// sign-up user
router.post(
  '/signup',
  validateRequest(userValidation.userValidationSchema),
  AuthControllers.signUp,
)

export const AuthRoutes = router
