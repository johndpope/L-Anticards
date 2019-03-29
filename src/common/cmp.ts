interface IIdol {
  id: number;
  rarity: string;
  meta: {
    idol_id: number;
  }
}

const cmpRarity = (a: string, b: string) => {
  return b.length - a.length;
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
