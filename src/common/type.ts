export interface IIdol {
  'id': number;
  'name': string;
  'rarity': Rarity;
  'character': {
    'id': number;
    'name': string;
    'unitId': number;
    'unit': string;
  };
  'avail': {
    'date': string;
    'source': string;
    'sourceType': string;
  };
  'skillPanels': Skill[];
}
export interface SkillEffect {
  'type': string;
  'attribute': string;
}
export interface MemoryAppeal {
  'level': number;
  'name': string;
  'comment': string;
  'effects': SkillEffect[];
  'link': {
    'name': string;
    'comment': string;
    'effects': SkillEffect[];
  };
}
interface Skill {
  'skillCategory': string;
  'passive'?: PassiveSkill;
  'active'?: ActiveSkill;
  'limitBreak'?: LimitBreakSkill;
}
export interface PassiveSkill {
  'name': string;
  'conditionComment': string;
  'rateComment': string;
  'limit': number;
  'effects': SkillEffect[];
  'releaseConditions'?: string;
}
export interface ActiveSkill {
  'name': string;
  'comment': string;
  'effects': SkillEffect[];
  'link'?: {
    'name': string;
    'comment': string;
    'effects': SkillEffect[];
  }
  'releaseConditions'?: string;
}
interface LimitBreakSkill {
  'name': string;
  'comment': string;
  'effects': SkillEffect[];
  'releaseConditions'?: string;
}

export interface ProduceIdol extends IIdol {
  'memoryAppeals': MemoryAppeal[];
}
export interface SupportIdol extends IIdol {
  'strengths': string[];
  'events': Array<{
    'name': string;
    'vo'?: number;
    'da'?: number;
    'vi'?: number;
    'me'?: number;
    'sp'?: number;
  }>;
  'eventsSum': {
    'vo'?: number;
    'da'?: number;
    'vi'?: number;
    'me'?: number;
    'sp'?: number;
  };
  'supportSkills': Array<{
    'name': string;
    'effect': string;
    'get_lv': number[];
    'lv': number[];
  }>;
}

export const getActiveSkills = (idol: IIdol) => {
  return idol.skillPanels.filter(s => s.skillCategory === 'active').map(s => s.active as ActiveSkill)
}

export const getPassiveSkills = (idol: IIdol) => {
  return idol.skillPanels.filter(s => s.skillCategory === 'passive').map(s => s.passive as PassiveSkill)
}

export const getLimitBreakSkills = (idol: IIdol) => {
  return idol.skillPanels.filter(s => s.skillCategory === 'limit_break').map(s => s.limitBreak as LimitBreakSkill)
}

export interface AllIdolList {
  'p': ProduceIdol[];
  's': SupportIdol[];
}

export const emptyIdolList = { 'p': [], 's': [] } as AllIdolList;

export enum IdolType {
  produce,
  support,
}

export type Rarity = 'N' | 'R' | 'SR' | 'SSR';

// const tuple = <T extends string[]>(...args: T) => args;
const tuple = (...args: string[]) => args;
export const membersList = tuple('櫻木真乃', '風野灯織', '八宮めぐる',
  '月岡恋鐘', '田中摩美々', '白瀬咲耶', '三峰結華', '幽谷霧子',
  '小宮果穂', '園田智代子', '西城樹里', '杜野凛世', '有栖川夏葉',
  '大崎甘奈', '大崎甜花', '桑山千雪',
  '芹沢あさひ', '黛冬優子', '和泉愛依');
export const unitsList = tuple(
  'イルミネーションスターズ', 'アンティーカ', '放課後クライマックスガールズ', 'アルストロメリア', 'ストレイライト'
);
export const strengthsList = tuple('vo', 'da', 'vi', 'me');
const skilEffectList = tuple(
  'damage', 'memory_appeal_damage', 'mental_favorable_damage', 'mental_unfavorable_damage',
  'memory_appeal_point_favorable_damage', 'appeal_down', 'appeal_up', 'rival_appeal_down',
  'mental_damage_down', 'mental_damage_up', 'attention_down', 'attention_up',
  'interest_down', 'interest_up', 'judge_attack_down', 'judge_attack_up',
  'mental', 'regenerate', 'slip_damage', 'hp_proportion_damage', 'memory_appeal_gauge_bonus',
  'memory_appeal_gauge_down', 'probability_blow', 'fastest_appeal', 'slowest_appeal',
  'reraise'
)
export const liveSkillsList = tuple(
  'damage', 'mental_favorable_damage', 'mental_unfavorable_damage',
  'memory_appeal_point_favorable_damage', 'appeal_up', 'rival_appeal_down',
  'mental_damage_down', 'mental_damage_up', 'attention_down', 'attention_up',
  'interest_down', 'interest_up', 'judge_attack_down', 'judge_attack_up',
  'mental', 'regenerate', 'slip_damage', 'hp_proportion_damage', 'memory_appeal_gauge_bonus',
  'probability_blow', 'fastest_appeal', 'slowest_appeal', 'reraise',
);
export const passiveSkillList = tuple(
  'appeal_up', 'rival_appeal_down',
  'mental_damage_down', 'mental_damage_up', 'attention_down', 'attention_up',
  'interest_down', 'interest_up', 'judge_attack_down', 'judge_attack_up',
  'mental', 'memory_appeal_gauge_bonus',
);
