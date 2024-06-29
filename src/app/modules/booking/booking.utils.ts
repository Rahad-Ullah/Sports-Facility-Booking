const calculatePayableAmout = (
  date: string,
  startTime: string,
  endTime: string,
  pricePerHour: number,
) => {
  // calculate the duration in hours
  const start = new Date(`${date}T${startTime}:00`)
  const end = new Date(`${date}T${endTime}:00`)
  const durationInHours = (end.getTime() - start.getTime()) / (1000 * 60 * 60)

  // calculate the payable amount
  const payableAmount = durationInHours * pricePerHour

  return payableAmount
}

export default calculatePayableAmout
