
export const UPDATED_FlightConditions = 'UPDATED_FlightConditions'

export function updateFC(score) {
  return {
    type: UPDATED_FlightConditions,
    payload: score
  }
}
