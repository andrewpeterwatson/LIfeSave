
export const UPDATED_ACUITY = 'UPDATED_ACUITY'

export function updateAcuity(score) {
  return {
    type: UPDATED_ACUITY,
    payload: score
  }
}
