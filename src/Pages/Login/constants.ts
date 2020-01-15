export enum LoginResult {
  Success = 'Success',
  InvalidCredentialsError = 'InvalidCredentialsError',
  NetworkError = 'NetworkError',
  FobiddenError = 'FobiddenError',
  UnknownError = 'UnknownError',
}

export const errorTextMapper = {
  [LoginResult.InvalidCredentialsError]:
    'Неправильный номер телефона или пароль',
  [LoginResult.NetworkError]: 'Ошибка! Проверьте подключение к интернету',
  [LoginResult.FobiddenError]: 'Недостачно прав',
  [LoginResult.UnknownError]:
    'Что-то пошло не так. Попробуйте перегрузить страницу',
};
