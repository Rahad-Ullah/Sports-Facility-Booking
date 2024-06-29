import { Router } from 'express'
import { BookingControllers } from './booking.controller'
import auth from '../../middlewares/auth'

const router = Router()

// create new facility
router.post('/', auth('user'), BookingControllers.createBooking)

// retrieve all bookings
router.get('/', auth('admin'), BookingControllers.getAllBookings)

export const BookingRoutes = router
