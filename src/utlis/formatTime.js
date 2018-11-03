export const specIndex = (i) => {
  if (i < 10) {
    return `0${i}`
  }
  return i
}

export const formatCurrentTime = (cdt) => {
  let min = parseInt(cdt / 60, 10)
  let sec = parseInt(cdt - (min * 60), 10)
  min = specIndex(min)
  sec = specIndex(sec)
  return `${min}:${sec}`
}