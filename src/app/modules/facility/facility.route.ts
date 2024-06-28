import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FacilityControllers } from './facility.controller'
import { facilityValidation } from './facility.validation'

const router = Router()

// create new facility
router.post(
  '/',
  validateRequest(facilityValidation.createFacilityValidationSchema),
  FacilityControllers.createFacility,
)

export const AuthRoutes = router
