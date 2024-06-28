import httpStatus from 'http-status'
import AppError from '../../errors/AppError'
import { TFacility } from './facility.interface'
import { Facility } from './facility.model'

// create new facility into DB
const createFacilityIntoDB = async (payload: TFacility) => {
  const { name, location } = payload

  // check if the facility already exist
  const isFacilityExist = await Facility.findOne({ name, location })
  if (isFacilityExist) {
    throw new AppError(httpStatus.CONFLICT, 'This facility already exist')
  }

  const result = await Facility.create(payload)

  return result
}

export const FacilityServices = {
  createFacilityIntoDB,
}
