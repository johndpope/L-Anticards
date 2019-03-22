export type SupportIdol = {
  'id': number;
  'boom_id': number;
  'name': string;
  'rarity': string;
  'idol': string;
  'avail': {
      'date': string;
      'source_detail': string;
      'source': string;
  };
  'status': { [key: string]: {
    'vo'?: number,
    'da'?: number,
    'vi'?: number,
    'mental'?: number,
  } }
};

export type ProduceIdol = {
  'id': number;
  'boom_id': number;
};