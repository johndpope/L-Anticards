export type ProduceIdol = {
  'id': number;
  'name': string;
  'rarity': string;
  'idol': string;
  'unit': string;
  'avail': {
    'date': string;
    'source': string;
  };
  'live_skills': {
    'name': string;
    'effect': string;
    'link': string;
    'condition'?: string;
  }[];
  'passive_skills': {
    'effect': string;
    'probability': number;
    'max_time': number;
    'condition': number;
    'obtain'?: string,
  }[];
  'other_skills': {
    'name': string;
    'effect': string;
    'condition'?: string;
  }[];
  'omoide': {
    'name': string;
    'effect': string;
    'link': string;
  }[];
  'meta': {
    'idol_id': number;
  }
}

export type SupportIdol = {
  'id': number;
  'name': string;
  'rarity': string;
  'idol': string;
  'unit': string;
  'avail': {
    'date': string;
    'source_detail': string;
    'source': string;
  };
  'status': {
    'lv': number;
    'vo'?: number;
    'da'?: number;
    'vi'?: number;
    'mental'?: number;
    'star'?: number;
  }[];
  'events': {
    'name': string;
    'vo'?: number;
    'da'?: number;
    'mental'?: number;
    'sp'?: number;
  }[];
  'live_skills': {
    'name': string;
    'effect': string;
    'condition'?: string;
  }[];
  'passive_skills': {
    'effect': string;
    'probability': number;
    'max_time': number;
    'condition': number;
    'obtain'?: string;
  }[];
  'other_skills': {
    'name': string;
    'effect': string;
    'condition'?: string;
  }[];
  'support_skills': {
    'name': string;
    'effect': string;
    'get_lv': number[];
    'lv': number[];
  }[];
  'meta': {
    'idol_id': number;
  }
};

export type AllIdolList = {
  'p': ProduceIdol[];
  's': SupportIdol[];
}

export const emptyIdolList = {'p': [], 's': []} as AllIdolList;

export enum IdolType {
  produce,
  support,
}

export enum Strength {
  vo = 'vo',
  da = 'da',
  vi = 'vi'
}

const tuple = <T extends string[]>(...args: T) => args;
export const membersList = tuple('櫻木真乃', '風野灯織', '八宮めぐる',
                                '月岡恋鐘', '田中摩美々', '白瀬咲耶', '三峰結華', '幽谷霧子',
                                '小宮果穂', '園田智代子', '西城樹里', '杜野凛世', '有栖川夏葉',
                                '大崎甘奈', '大崎甜花', '桑山千雪');
export const unitsList = tuple('イルミネーションスターズ', 'アンティーカ', '放課後クライマックスガールズ', 'アルストロメリア');

export type MemberType = typeof membersList[number];
export type UnitType = typeof unitsList[number];