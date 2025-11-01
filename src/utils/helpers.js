import clsx from 'clsx';

export const cn = (...inputs) => {
  return clsx(inputs);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('vi-VN').format(new Date(date));
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

export const generateId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};