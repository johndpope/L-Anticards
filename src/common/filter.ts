import {
  Strength, SupportIdol, ProduceIdol, MemberType, UnitType, strengthsList,
  LiveSkill, LiveSkillMeta, PassiveSkill, PassiveSkillMeta
} from './type';
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
  liveSkill: 'none' as (LiveSkill | 'none'),
  passiveSkill: 'none' as (PassiveSkill | 'none'),
};

export type IdolFilter = typeof defaultProduceFilter;

export const defualtSupportFilter: IdolFilter = defaultProduceFilter;

const listIntersect = <T>(a: T[], b: T[]) => {
  return a.filter(x => b.find(y => y == x) != undefined)
}

const liveSkillSelector = (skills: LiveSkillMeta[], filter: LiveSkill) => {
  console.log(skills)
  return [...skills.map(s => s.effect).flat(), ...skills.map(s => s.link).flat(),]
    .filter((s => {
      return s != undefined && s.action == filter
    })).length > 0
}

const passiveSkillSelector = (skills: PassiveSkillMeta[], filter: PassiveSkill) => {
  console.log(skills)
  return skills.map(s => s.effect).flat()
    .filter((s => {
      return s != undefined && s.action == filter
    })).length > 0
}

export const applySupportFilter = (idols: SupportIdol[], filter: IdolFilter) => {
  if (filter.member != 'all') idols = idols.filter((v) => v.idol == filter.member);
  if (filter.unit != 'all') idols = idols.filter((v) => v.unit == filter.unit);
  idols = idols.filter((idol) => listIntersect(idol.meta.strengths, filter.strengths).length != 0);
  if (filter.liveSkill != 'none') {
    idols = idols.filter((idol) => liveSkillSelector(idol.meta.live_skills, filter.liveSkill as LiveSkill))
  }
  if (filter.passiveSkill != 'none') {
    idols = idols.filter((idol) => passiveSkillSelector(idol.meta.passive_skills, filter.passiveSkill as PassiveSkill))
  }
  return idols.sort(defaultCmp)
}

export const applyProduceFilter = (idols: ProduceIdol[], filter: IdolFilter) => {
  if (filter.member != 'all') idols = idols.filter((v) => v.idol == filter.member);
  if (filter.unit != 'all') idols = idols.filter((v) => v.unit == filter.unit);
  if (filter.liveSkill != 'none') {
    idols = idols.filter((idol) => liveSkillSelector(idol.meta.live_skills, filter.liveSkill as LiveSkill))
  }
  if (filter.passiveSkill != 'none') {
    idols = idols.filter((idol) => passiveSkillSelector(idol.meta.passive_skills, filter.passiveSkill as PassiveSkill))
  }
  return idols.sort(defaultCmp)
}