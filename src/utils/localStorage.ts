
export const getLocalStorageValue = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return '';
};

export const setLocalStorageValue = (key: string, value:any) => {
  if(typeof value == 'object'){
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.setItem(key, value);
  }
};

export const clearKeysFromLocalStorage = (...keys: string[]) => {
  keys.forEach(value => {
    localStorage.removeItem(value);
  });
};
