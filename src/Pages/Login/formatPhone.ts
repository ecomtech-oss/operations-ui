export const formatPhone = (phone = '') => {
  return `+${phone.replace(/\D/gi, '')}`;
};
