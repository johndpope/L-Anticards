import { Strength, SupportIdol, ProduceIdol, MemberType, UnitType } from './type';
import { defaultCmp } from './cmp';

export const GlobalTabs = {
  support: 'support',
  produce: 'produce',
  idol: 'idol',
  team: 'team',
}

export const defaultTab = GlobalTabs.produce;

export const IdolView = {
  grip: 'grip', 
  list: 'list',
}

export const defaultProduceFilter = {
  view: IdolView.grip,
  listPage: 0,
  listRowPerPage: 5,

  strengths: [Strength.vo, Strength.da, Strength.vi],
  skills: [] as number[],
  member: 'all' as (MemberType | 'all'),
  unit: 'all' as (UnitType | 'all'),
};

export type IdolFilter = typeof defaultProduceFilter;

export const defualtSupportFilter: IdolFilter = defaultProduceFilter;

export const applySupportFilter = (idols: SupportIdol[], filter: IdolFilter) => {
  if (filter.member != 'all') idols = idols.filter((v) => v.idol == filter.member);
  if (filter.unit != 'all') idols = idols.filter((v) => v.idol == filter.unit);
  return idols.sort(defaultCmp)
}

export const applyProduceFilter = (idols: ProduceIdol[], filter: IdolFilter) => {
  if (filter.member != 'all') idols = idols.filter((v) => v.idol == filter.member);
  if (filter.unit != 'all') idols = idols.filter((v) => v.unit == filter.unit);
  return idols.sort(defaultCmp)
}