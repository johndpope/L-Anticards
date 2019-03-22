import * as React from 'react';

const viewGrip = 'grip';
const viewList = 'list';
const viewIdol = 'idol';

const idolListViews = [viewGrip, viewList, viewIdol];
const initIdolListView = viewList;

const viewCHNName: { [key: string]: string | null; } = {
  'grip': '格子',
  'list': '列表',
  'idol': '爱豆',
}

const viewText = (name: string) => viewCHNName[name] || '无效';

export { viewGrip, viewList, viewIdol, idolListViews, viewText };

const allStrengths = ['vo', 'vi', 'da'];
const initStrengths = allStrengths;

export { initIdolListView, allStrengths, initStrengths };