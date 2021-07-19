import {useState} from 'react';
import Cookies, {CookieSetOptions} from 'universal-cookie';

const defaultOptions = {path: "/", maxAge : 300};

const useCookie = (key, options = defaultOptions) => {
  const cookies = new Cookies();
  const [item, setItemValue] = useState(() => {
    if (cookies.get(key)) {
      return cookies.get(key);
    }
    return null;
  });

  const setValue = (value) => {
    setItemValue(value);
    cookies.set(key, value, options);
  };

  const removeItem = (options) => {
    cookies.remove(key);
  };

  return [item, setValue, removeItem];
};

export default useCookie;