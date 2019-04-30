import * as React from 'react';
import { useEffect, useState } from 'react';
import { AllIdolList, emptyIdolList, membersList } from '../../common/type';
import { STATIC_IDOL_FILE } from '../../common/constants';


export default () => {
  const [idols, setIdols] = useState(emptyIdolList);
  useEffect(() => {
    fetch(STATIC_IDOL_FILE)
      .then(resp => resp.json())
      .then(resp => {
        const r: AllIdolList = resp;
        setIdols(r);
      }).catch(err =>
        console.log(err.message) // eslint-disable-line no-console
      );
  })
  const res = membersList.map(m => {
    const p = idols.p.filter(x => x.character.name === m);
    const s = idols.s.filter(x => x.character.name === m);
    const pSSR = p.filter(x => x.rarity === 'SSR');
    const pSR = p.filter(x => x.rarity === 'SR');
    const sSSR = s.filter(x => x.rarity === 'SSR');
    const sSR = s.filter(x => x.rarity === 'SR');
    const limitPSSR = pSSR.filter(x => x.avail.sourceType === '限定')
    const limitSSSR = sSSR.filter(x => x.avail.sourceType === '限定')
    return {
      member: m,
      pSSR: pSSR.length,
      pSR: pSR.length,
      sSSR: sSSR.length,
      sSR: sSR.length,
      SSR: pSSR.length + sSSR.length,
      SR: pSR.length + sSR.length,
      limitpSSR: limitPSSR.length,
      limitsSSR: limitSSSR.length,
    }
  })
  const tableStyle = {
    borderStyle: 'solid',
    borderWidth: 1,
  }
  return (
    <div style={{
      padding: 10,
    }}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <td>メンバー</td>
            <td>pSSR</td>
            <td>pSR</td>
            <td>sSSR</td>
            <td>sSR</td>
            <td>SSR</td>
            <td>SR</td>
            <td>限定pSSR</td>
            <td>限定sSSR</td>
          </tr>
        </thead>
        {
          res.map(r => (
            <tr>
              <td>{r.member}</td>
              <td>{r.pSSR}</td>
              <td>{r.pSR}</td>
              <td>{r.sSSR}</td>
              <td>{r.sSR}</td>
              <td>{r.SSR}</td>
              <td>{r.SR}</td>
              <td>{r.limitpSSR}</td>
              <td>{r.limitsSSR}</td>
            </tr>
          ))
        }
      </table>
    </div>
  )
}