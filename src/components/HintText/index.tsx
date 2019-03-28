import * as React from 'react';
import { useState } from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


const MouseOverPopover: React.FC<{ text: string }> = (props) => {
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null);

  const { text } = props;
  return (
    <>
      <span
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => setAnchor(e.currentTarget)}
        onMouseLeave={() => setAnchor(null)}
      >
        {props.children}
      </span>
      <Popover
        id="mouse-over-popover"
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={() => setAnchor(null)}
        disableRestoreFocus
        style={{ pointerEvents: 'none' }}
      >
        <Typography style={{ margin: 4 }}>{text}</Typography>
      </Popover>
    </>
  )
}

const replaceText: { [v: string]: {'hint': string | null, 'color': string} } = {
  'Vocal': {'hint': null, 'color':'#F959DA'},
  'Dance': {'hint': null, 'color':'#1CAEFF'},
  'Visual': {'hint': null, 'color': '#FADB1A'},
  'SP': {'hint': '用于学技能盘技能的点数', 'color': '#FA7F1F'},
  'mental': {'hint': 'メンタル：试镜时的血量', 'color': '#AF4CEB'},
  '兴趣': {'hint': '興味：值越高，审查员满足度更容易上升（伤害越高）', 'color': '#20BA03'},
  '注目度': {'hint': '注目度：值越高，被审查员审查的概率越高', 'color': '#20BA03'},
  '影响力': {'hint': '影響力：值越高，审查员对偶像的mental伤害越高', 'color': '#20BA03'},
  '忧郁': {'hint': 'メランコリー効果：展示阶段开始时收到mental伤害', 'color': '#20BA03'},
}

const replaceRegex = /(Vocal)|(Dance)|(Visual)|(SP)|(mental)|(兴趣)|(注目度)|(影响力)|(忧郁)/g;

const HintText: React.FC<{ text: string }> = (props) => {
  const { text } = props;
  console.log(text.split(replaceRegex));
  const hinted = text
    .split(replaceRegex)
    .map((x => {
      if (x in replaceText) {
        let el = (<span style={{color: replaceText[x].color}}><strong> {x} </strong></span>);
        if (replaceText[x].hint != null) {
          el = <MouseOverPopover text={replaceText[x].hint as string}>{el}</MouseOverPopover>
        }
        return el;
      }
      return x;
    }));
  return <>{hinted}</>;
}

export default HintText;