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

// update facility
router.put(
  '/:id',
  auth('admin'),
  validateRequest(facilityValidation.updateFacilityValidationSchema),
  FacilityControllers.updateFacility,
)

export const FacilityRoutes = router
