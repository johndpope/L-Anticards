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
    'obtain'?: string;
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
    'obtain'?: string;
  }[];
  'omoide': {
    'name': string;
    'effect': string;
    'link': string;
  }[];
  'meta': {
    'idol_id': number;
    'strengths': string[];
    'live_skills': LiveSkillMeta[],
    'passive_skills': PassiveSkillMeta[],
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
    'obtain'?: string;
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
    'obtain'?: string;
  }[];
  'support_skills': {
    'name': string;
    'effect': string;
    'get_lv': number[];
    'lv': number[];
  }[];
  'meta': {
    'idol_id': number;
    'strengths': string[];
    'live_skills': LiveSkillMeta[],
    'passive_skills': PassiveSkillMeta[],
  }
};

export interface LiveSkillMeta {
  'effect': LiveSkillEffect[],
  'link'?: LiveSkillEffect[],
}
interface LiveSkillEffect {
  'action': string,
  'genres'?: string[],
  'times'?: number,
  'turns'?: number,
}

export interface PassiveSkillMeta {
  'effect': PassiveSkillEffect[],
}
interface PassiveSkillEffect {
  'action': string,
  'genres'?: string[],
}

export type AllIdolList = {
  'p': ProduceIdol[];
  's': SupportIdol[];
}

export const emptyIdolList = { 'p': [], 's': [] } as AllIdolList;

export enum IdolType {
  produce,
  support,
}

const tuple = <T extends string[]>(...args: T) => args;
export const membersList = tuple('櫻木真乃', '風野灯織', '八宮めぐる',
  '月岡恋鐘', '田中摩美々', '白瀬咲耶', '三峰結華', '幽谷霧子',
  '小宮果穂', '園田智代子', '西城樹里', '杜野凛世', '有栖川夏葉',
  '大崎甘奈', '大崎甜花', '桑山千雪');
export const unitsList = tuple('イルミネーションスターズ', 'アンティーカ', '放課後クライマックスガールズ', 'アルストロメリア');
export const strengthsList = tuple('vo', 'da', 'vi', 'mental');
export const liveSkillsList = tuple(
  'appeal', 'first_appeal', 'last_appeal', 'perfect_appeal', 'genre_up', 'rival_genre_down',
  'mental_damage_cut', 'interest_down', 'interest_up', 'omoide_gauge_up',
  'attention_down', 'attention_up', 'phased_mental_recovery', 'mental_recovery',
  'haisui_appeal', 'haisui_max_appeal', 'konshin_appeal', 'konshin_max_appeal',
  'influence_down', 'influence_up', 'area_appeal', 'area_interest_down',
  'melancholy', 'resurgence', 'ikki');
export const passiveSkillList = tuple(
  'genre_up', 'mental_damage_cut', 'interest_up', 'interest_down',
  'mental_recovery', 'omoide_gauge_up', 'attention_up', 'attention_down',
  'attention_plus_damage',
);

export type MemberType = typeof membersList[number];
export type UnitType = typeof unitsList[number];
export type Strength = typeof strengthsList[number];
export type LiveSkill = typeof liveSkillsList[number];
export type PassiveSkill = typeof passiveSkillList[number];