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

export const validationRules = {
  phone: {
    required: 'Для входа нужен ваш номер',
    pattern: {
      value: /^(\+7)\s\d{3}\s\d{3}\-\d{2}\-\d{2}$/gi,
      message: 'Номер должен состоять из 11 цифр',
    },
  },
  password: {
    required: 'Для входа нужен пароль',
  },
};
