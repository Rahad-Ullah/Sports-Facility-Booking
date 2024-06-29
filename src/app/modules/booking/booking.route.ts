import { Router } from 'express'
import { BookingControllers } from './booking.controller'
import auth from '../../middlewares/auth'

const router = Router()

// create new facility
router.post('/', auth('user'), BookingControllers.createBooking)

// retrieve all facilities
// router.get('/', FacilityControllers.getAllFacilities)

export const BookingRoutes = router
