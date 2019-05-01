const messages: {
  [key: string]: {
    [key: string]: string;
  };
} = require('./message.json');

export const supportedLanguage: {[key: string]: string} = {
  'zh': '中文',
  'ja': '日本語',
};
const defaultLanguage = 'ja';
const toSupportedLanguage = (lang: string) => {
  if (lang in supportedLanguage) {
    return lang;
  } else {
    return defaultLanguage;
  }
}

const getBrowserLanguage = () => {
  return navigator.language.slice(2);
}
export const getDefaultLanguage = () => {
  const lang = getBrowserLanguage();
  return toSupportedLanguage(lang);
}

export default class i18n {
  private lang: string;

  constructor(lang: string) {
    this.lang = lang;
  }

  setLanguage(lang: string) {
    this.lang = lang;
  }

  msg(key: string) {
    if (messages[key]) {
      return messages[key][this.lang] || key;
    } else {
      return key;
    }
  }
};