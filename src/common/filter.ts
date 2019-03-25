import { Strength, SupportIdol, ProduceIdol, MemberType, UnitType, strengthsList } from './type';
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

  strengths: strengthsList as Strength[],
  skills: [] as number[],
  member: 'all' as (MemberType | 'all'),
  unit: 'all' as (UnitType | 'all'),
};

export type IdolFilter = typeof defaultProduceFilter;

export const defualtSupportFilter: IdolFilter = defaultProduceFilter;

const listIntersect = <T>(a: T[], b: T[]) => {
  return a.filter(x => b.find(y => y==x) != undefined)
}

export const applySupportFilter = (idols: SupportIdol[], filter: IdolFilter) => {
  if (filter.member != 'all') idols = idols.filter((v) => v.idol == filter.member);
  if (filter.unit != 'all') idols = idols.filter((v) => v.unit == filter.unit);
  idols = idols.filter((idol) => listIntersect(idol.meta.strengths, filter.strengths).length != 0);
  return idols.sort(defaultCmp)
}

export const applyProduceFilter = (idols: ProduceIdol[], filter: IdolFilter) => {
  if (filter.member != 'all') idols = idols.filter((v) => v.idol == filter.member);
  if (filter.unit != 'all') idols = idols.filter((v) => v.unit == filter.unit);
  return idols.sort(defaultCmp)
}