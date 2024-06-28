import { Router } from 'express'
import validateRequest from '../../middlewares/validateRequest'
import { FacilityControllers } from './facility.controller'
import { facilityValidation } from './facility.validation'
import auth from '../../middlewares/auth'

const router = Router()

// create new facility
router.post(
  '/',
  auth('admin'),
  validateRequest(facilityValidation.createFacilityValidationSchema),
  FacilityControllers.createFacility,
)

export const FacilityRoutes = router
