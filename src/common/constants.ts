export const LOCAL_STORAGE_TEAM = 'team';
export const LOCAL_STORAGE_LANG = 'lang';
export const STATIC_IDOL_FILE_ZH = '/static_6_zh.json';
export const STATIC_IDOL_FILE_JA = '/static_6_ja.json';

export const idolsFile = (lang: string) => {
  if (lang === 'zh') {
    return STATIC_IDOL_FILE_ZH;
  }
  return STATIC_IDOL_FILE_JA;
}