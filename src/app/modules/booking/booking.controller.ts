import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import httpStatus from 'http-status'
import { BookingServices } from './booking.service'

// create a new booking
const createBooking: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.user
    
    const result = await BookingServices.createBookingIntoDB(user, req.body)

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Booking created successfully',
      data: result,
    })
  },
)

export const BookingControllers = {
  createBooking,
}
