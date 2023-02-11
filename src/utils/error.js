const errorCodes = {
  EMAIL_NOT_FOUND: 'Пользователя с таким email НЕТ!',
  INVALID_PASSWORD: 'Пароль неверный',
  auth: 'Пожалуйста войдите в систему'
}

export function error(code) {
  console.log('code', code)
  return errorCodes[code] ? errorCodes[code] : 'Неизвестная ошибка'
}
