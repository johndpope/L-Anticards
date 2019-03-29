import { LiveSkill, PassiveSkill } from './type';

export const liveSkillTextDict: { [key: string]: string } = {
  'appeal': '展示',
  'first_appeal': '必定最先展示',
  'last_appeal': '必定最后展示',
  'perfect_appeal': '完美展示',
  'genre_up': 'Vo/Da/Vi UP',
  'rival_genre_down': '敌人 Vo/Da/Vi Down',
  'mental_damage_cut': 'mental伤害DOWN',
  'interest_down': '兴趣DOWN',
  'interest_up': '兴趣UP',
  'omoide_gauge_up': '回忆槽上升',
  'attention_down': '注目度UP',
  'attention_up': '注目度DOWN',
  'phased_mental_recovery': 'mental恢复【多回合】',
  'mental_recovery': 'mental恢复',
  'haisui_appeal': '背水',
  'haisui_max_appeal': '背水【最大】',
  'konshin_appeal': '浑身',
  'konshin_max_appeal': '浑身【最大】',
  'influence_down': '影响力DOWN',
  'influence_up': '影响力UP',
  'area_appeal': '全观客展示',
  'area_interest_down': '全观客兴趣DOWN',
  'melancholy': '忧郁',
  'resurgence': '复活',
  'ikki': '瞬杀'
}
export const passiveSkillTextDict: { [key: string]: string } = {
  'genre_up': 'Vo/Da/Vi UP',
  'mental_damage_cut': 'mental伤害减',
  'interest_up': '兴趣UP',
  'interest_down': '兴趣DOWN',
  'mental_recovery': 'mental恢复',
  'omoide_gauge_up': '回忆槽上升',
  'attention_up': '注目度UP',
  'attention_down': '注目度DOWN',
  'attention_plus_damage': '注目度&mental 伤害DOWN',
}

export const liveSkillText = (s: LiveSkill | 'none') => {
  if (s === 'none') {
    return '无';
  } else {
    return liveSkillTextDict[s];
  }
}

export const passiveSkillText = (s: PassiveSkill | 'none') => {
  if (s === 'none') {
    return '无';
  } else {
    return passiveSkillTextDict[s];
  }
}