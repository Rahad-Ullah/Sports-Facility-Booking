import { JwtPayload } from 'jsonwebtoken'
import { TBooking } from './booking.interface'
import { Booking } from './booking.model'
import { Facility } from '../facility/facility.model'
import AppError from '../../errors/AppError'
import httpStatus from 'http-status'
import calculatePayableAmout from './booking.utils'

// create new bookin into DB
const createBookingIntoDB = async (user: JwtPayload, payload: TBooking) => {
  const { date, startTime, endTime, facility } = payload

  // check if the facility exist
  const facilityObj = await Facility.findById(facility)
  if (!facilityObj) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This facility is not exist')
  }

  // check if the time slot is available
  const isTimeSlotAvailable = await Booking.findOne({
    facility,
    date,
    startTime,
    endTime,
  })
  if(isTimeSlotAvailable){
    throw new AppError(httpStatus.CONFLICT, 'Time slot is not available')
  }

  // calculate payable amount
  const payableAmount = calculatePayableAmout(
    date,
    startTime,
    endTime,
    facilityObj?.pricePerHour,
  )

  // set payableAmount to the payload
  payload.payableAmount = payableAmount

  // set current user to payload
  payload.user = user._id

  const result = await Booking.create(payload)
  return result
}

export const BookingServices = {
  createBookingIntoDB,
}
