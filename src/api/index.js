import ajax from './ajax'

export const reqAddress = (geohash) => ajax('/api/position/' + geohash)

export const reqCategorys = () => ajax('/api/index_category')

export const reqShops = ({latitude, longitude}) => ajax('/api/shops',{latitude, longitude})

export const reqSendCode = (phone) => ajax('/api/sendcode',{phone})

export const reqPwdLogin = ({name,pwd,captcha}) => ajax('/api/login_pwd',{name,pwd,captcha},'POST')

export const reqSmsLogin = ({phone,code}) => ajax('/api/login_sms',{phone,code},'POST')
