import { ProduceIdol, SupportIdol, ActiveSkill, PassiveSkill, getActiveSkills, getPassiveSkills } from './type';
import { strengthsList, SkillEffect } from './type';
import { defaultCmp } from './cmp';

export const GlobalTabs = {
  support: 'support',
  produce: 'produce',
  idol: 'idol',
  team: 'team',
  intro: 'intro',
}

export const defaultTab = GlobalTabs.intro;

export const IdolView = {
  grip: 'grip',
  list: 'list',
}

export const defaultProduceFilter = {
  view: IdolView.grip,
  listPage: 0,
  listRowPerPage: 5,

  strengths: strengthsList,
  member: 'all',
  unit: 'all',
  liveSkill: 'none',
  passiveSkill: 'none',
};

export type IdolFilter = typeof defaultProduceFilter;

export const defualtSupportFilter: IdolFilter = defaultProduceFilter;

const listIntersect = <T>(a: T[], b: T[]) => {
  return a.filter(x => b.find(y => y === x) !== undefined)
}

const skillEffectSelector = (effects: SkillEffect[], effectType: string) => {
  return effects.filter(s => s.type === effectType).length > 0;
}

const liveSkillSelector = (skills: ActiveSkill[], effectType: string) => {
  return skillEffectSelector(skills.map(s => s.effects).flat(), effectType);
}

const passiveSkillSelector = (skills: PassiveSkill[], effectType: string) => {
  return skillEffectSelector(skills.map(s => s.effects).flat(), effectType);
}

export const applySupportFilter = (idols: SupportIdol[], filter: IdolFilter) => {
  if (filter.member !== 'all') {
    idols = idols.filter((v) => v.character.name === filter.member);
  }
  if (filter.unit !== 'all') {
    idols = idols.filter((v) => v.character.unit === filter.unit);
  }
  idols = idols.filter((idol) => listIntersect(idol.strengths, filter.strengths).length !== 0);
  if (filter.liveSkill !== 'none') {
    idols = idols.filter((idol) => {
      return liveSkillSelector(getActiveSkills(idol), filter.liveSkill)
    })
  }
  if (filter.passiveSkill !== 'none') {
    idols = idols.filter((idol) => {
      return passiveSkillSelector(getPassiveSkills(idol), filter.passiveSkill)
    })
  }
  return idols.sort(defaultCmp)
}

export const applyProduceFilter = (idols: ProduceIdol[], filter: IdolFilter) => {
  if (filter.member !== 'all') {
    idols = idols.filter((v) => v.character.name === filter.member);
  }
  if (filter.unit !== 'all') {
    idols = idols.filter((v) => v.character.unit === filter.unit);
  }
  if (filter.liveSkill !== 'none') {
    idols = idols.filter((idol) => {
      return liveSkillSelector(getActiveSkills(idol), filter.liveSkill)
    })
  }
  if (filter.passiveSkill !== 'none') {
    idols = idols.filter((idol) => {
      return passiveSkillSelector(getPassiveSkills(idol), filter.passiveSkill)
    })
  }
  return idols.sort(defaultCmp)
}