import { Booking } from '../booking/booking.model'

const getBookingsFromDB = async (date: string) => {
  const result = await Booking.find({ date })
  return result
}

export const CheckAvailabilityServices = {
  getBookingsFromDB,
}
