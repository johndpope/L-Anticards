import { Strength } from './type';

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

const defaultStrengthFilter = [Strength.vo, Strength.da, Strength.vi];
const defaultSkillFilter: number[] = [];

export const defaultProduceFilter = {
  view: IdolView.list,
  listPage: 0,
  listRowPerPage: 5,

  strengths: defaultStrengthFilter,
  skills: defaultSkillFilter,
};

export type IdolFilter = typeof defaultProduceFilter;

export const defualtSupportFilter: IdolFilter = {
  view: IdolView.list,
  listPage: 0,
  listRowPerPage: 5,

  strengths: defaultStrengthFilter,
  skills: defaultSkillFilter,
}
