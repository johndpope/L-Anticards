import { Rarity } from './type';

interface IIdol {
  id: number;
  rarity: Rarity;
  meta: {
    idol_id: number;
  }
}

const rarityValue = (r: Rarity) => {
  switch (r) {
    case 'SSR': return 4;
    case 'SR': return 3;
    case 'R': return 2;
    case 'N': return 1;
  }
  return 0;
}

const cmpRarity = (a: Rarity, b: Rarity) => {
  return rarityValue(b) - rarityValue(a);
}

export const defaultCmp = (a: IIdol, b: IIdol) => {
  let r = cmpRarity(a.rarity, b.rarity);
  if (r !== 0) {
    return r;
  }
  r = a.meta.idol_id - b.meta.idol_id;
  if (r !== 0) {
    return r;
  }
  return a.id - b.id;
};
