import { z } from 'zod'

// validation for creating new booking
const createBookingValidationSchema = z.object({
  body: z.object({
    facility: z.string({ required_error: 'Facility is required' }),
    date: z.string({ required_error: 'Date is required' }),
    startTime: z.string({ required_error: 'StartTime is required' }),
    endTime: z.string({ required_error: 'EndTime is required' }),
  }),
})

// validation for updating exiting booking
const updateBookingValidationSchema = z.object({
  body: z.object({
    facility: z.string({ required_error: 'Facility is required' }).optional(),
    date: z.string({ required_error: 'Date is required' }).optional(),
    startTime: z.string({ required_error: 'StartTime is required' }).optional(),
    endTime: z.string({ required_error: 'EndTime is required' }).optional(),
  }),
})

export const userValidation = {
  createBookingValidationSchema,
  updateBookingValidationSchema,
}
