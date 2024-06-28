import { z } from 'zod'

// validation for creating a new facility
const createFacilityValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required.' }),
    description: z.string({ required_error: 'Description is required.' }),
    pricePerHour: z.number({ required_error: 'PricePerHour is required.' }),
    location: z.string({ required_error: 'Location is required.' }),
  }),
})

export const facilityValidation = {
  createFacilityValidationSchema,
}
