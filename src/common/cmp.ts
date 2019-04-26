import { Rarity, IIdol } from './type';

const rarityId = (r: Rarity) => {
  switch (r) {
    case 'SSR': return 4;
    case 'SR': return 3;
    case 'R': return 2;
    case 'N': return 1;
  }
  return 0;
}

const cmpRarity = (a: Rarity, b: Rarity) => {
  return rarityId(b) - rarityId(a);
}

export const defaultCmp = (a: IIdol, b: IIdol) => {
  let r = cmpRarity(a.rarity, b.rarity);
  if (r !== 0) {
    return r;
  }
  r = a.character.id - b.character.id;
  if (r !== 0) {
    return r;
  }
  return a.id - b.id;
};
