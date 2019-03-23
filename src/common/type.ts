export type ProduceIdol = {
  'id': number;
  'name': string;
  'rarity': string;
  'idol': string;
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
}

export type SupportIdol = {
  'id': number;
  'name': string;
  'rarity': string;
  'idol': string;
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
