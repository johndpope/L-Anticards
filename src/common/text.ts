const skillEffectTextDict: { [key: string]: string } = {
  'damage': '展示',
  'memory_appeal_damage': '回忆炸弹',
  'mental_favorable_damage': '浑身【mental越高伤害越高】',
  'mental_unfavorable_damage': '背水【mental越低伤害越高】',
  'memory_appeal_point_favorable_damage': '展示【回忆槽越高伤害越高】',
  'appeal_up': 'Vo/Da/Vi UP',
  'appeal_down': 'Vo/Da/Vi DOWN',
  'rival_appeal_down': '对手 Vo/Da/Vi Down',
  'mental_damage_down': 'mental伤害降低',
  'mental_damage_up': 'mental伤害上升',
  'attention_down': '注目度DOWN',
  'attention_up': '注目度UP',
  'interest_down': '兴趣DOWN',
  'interest_up': '兴趣UP',
  'judge_attack_down': '影响力DOWN',
  'judge_attack_up': '影响力UP',
  'mental': 'mental恢复',
  'regenerate': 'mental恢复【多回合】',
  'slip_damage': '忧郁',
  'hp_proportion_damage': '自身mental减少',
  'memory_appeal_gauge_bonus': '回忆槽上升',
  'memory_appeal_gauge_down': '回忆槽下降',
  'probability_blow': '瞬杀',
  'fastest_appeal': '最先行动',
  'slowest_appeal': '最后行动',
  'reraise': '复活',
}

export const liveSkillText = (s: string) => {
  if (s === 'none') {
    return '无限制';
  } else if (s in skillEffectTextDict) {
    return skillEffectTextDict[s];
  } else {
    return 'UnknownLiveSkill';
  }
}

export const passiveSkillText = (s: string) => {
  if (s === 'none') {
    return '无限制';
  } else if (s in skillEffectTextDict) {
    return skillEffectTextDict[s];
  } else {
    return 'UnknownPassiveSkill';
  }
}