const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
};

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
};

const getCurrentDate = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  return year + '-' + month + '-' + day
};

/* 当前时间 + 几天后的时间 */
const getEndDate = dayIn => {
  let date = new Date()
  let myDate = new Date(date.getTime() + dayIn * 24 * 60 * 60 * 1000)
  let year = myDate.getFullYear()
  let month = myDate.getMonth() + 1
  let day = myDate.getDate()
  let CurrentDate = year + '-'
  if (month >= 10) {
    CurrentDate = CurrentDate + month + '-'
  } else {
    CurrentDate = CurrentDate + '0' + month + '-'
  }
  if (day >= 10) {
    CurrentDate = CurrentDate + day
  } else {
    CurrentDate = CurrentDate + '0' + day
  }
  return CurrentDate
};

const getCurrentTime = () => {
  let date = new Date()
  let hour = date.getHours()
  let min = date.getMinutes()
  // let sec = date.getSeconds()
  hour = hour < 10 ? '0' + hour : hour
  min = min < 10 ? '0' + min : min
  // sec = sec < 10 ? '0' + sec : sec
  return hour + ':' + min
};

/* url分割obj */
const spliQueryURL = url => {
  let arr1 = url.split('?')
  let params = arr1[1].split('&') //进行分割成数组
  let obj = {} //声明对象
  for (let i = 0; i < params.length; i++) {
    let param = params[i].split('=') //进行分割成数组
    obj[param[0]] = param[1] //为对象赋值
  }
  return obj
};

export default {
  formatTime,
  getCurrentDate,
  getCurrentTime,
  getEndDate,
  spliQueryURL
}
