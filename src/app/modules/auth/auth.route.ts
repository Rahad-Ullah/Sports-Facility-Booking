import { Router } from 'express'
import { AuthControllers } from './auth.controller'

const router = Router()

// sign-up user
router.post('/signup',  AuthControllers.signUp)

export const AuthRoutes = router
