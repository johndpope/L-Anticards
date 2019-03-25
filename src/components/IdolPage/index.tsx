import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

import IdolAvatar from '../IdolAvatar';
import { useAppData } from '../../context/AppData';
import { IdolType } from '../../common/type';
import { Typography, Paper } from '@material-ui/core';

const styles = createStyles({
  topInfo: {
    margin: '0 0 3% 0'
  },
  avatar: {
    float: 'left',
    margin: '3% 15% 3% 5%',
  },
  basicInfo: {
    float: 'left',
    width: '60%',
    // marginTop: ,
    overflowX: 'auto',
  },
  liveSkillInfo: {
    width: '90%',
    margin: '1%',
  },
  passiveSkillInfo: {
    width: '90%',
    margin: '1%',
  },
  otherSkillInfo: {
    width: '90%',
    margin: '1%',
  },
  omoideInfo: {
    width: '90%',
    margin: '1%',
  },
  supportSkillInfo: {
    width: '90%',
    margin: '1%',
  },
  supportSkillLevelCol: {
    borderStyle: 'solid',
    width: '3%',
    borderWidth: 1,
  }
});

interface Props extends WithStyles<typeof styles> {
}

const supportSkillLevels = [50, 55, 60, 65, 70, 75, 80];

const parseSupportSkillList = (get_lv: number[], lv: number[]) => {
  const s = get_lv.reduce((acc, x, index) => (Math.max(acc, x <= supportSkillLevels[0] ? lv[index] : 0)), 0)
  return supportSkillLevels.slice(1).reduce((acc, cur, index) => acc.concat(
    lv[get_lv.findIndex(x => x == cur)] || 0
  ), [s])
};

const IdolPage: React.FunctionComponent<Props> = (props) => {
  const { currentIdolType, currentIdolID, allIdols } = useAppData();

  const { classes } = props;
  const idol = ((currentIdolType == IdolType.support)
    ? allIdols.s.find(x => x.id == currentIdolID)
    : allIdols.p.find(x => x.id == currentIdolID)
  ) || allIdols.p[0];
  if (currentIdolType == IdolType.support) {
    const idol = allIdols.s.find(x => x.id == currentIdolID) || allIdols.s[0];
    return (
      <div>
        <div className={classes.topInfo}>
          <div className={classes.avatar}>
            <IdolAvatar idolType={IdolType.support} idolID={idol.id}></IdolAvatar>
          </div>
          <div style={{ width: '10%', float: 'left' }} />
          <Paper className={classes.basicInfo}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th"><strong>卡名</strong></TableCell>
                  <TableCell align="right">{idol.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><strong>稀有度</strong></TableCell>
                  <TableCell align="right">{idol.rarity}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><strong>实装日</strong></TableCell>
                  <TableCell align="right">{idol.avail.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><strong>入手方法</strong></TableCell>
                  <TableCell align="right">{idol.avail.source_detail}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <div style={{ clear: 'both' }} />
        </div>

        <Paper className={classes.liveSkillInfo}>
          <Table>
            <TableHead>
              <TableRow><TableCell align="center" colSpan={3}>主动技能 ライブスキル</TableCell></TableRow>
              <TableRow>
                <TableCell align="left">技能名</TableCell>
                <TableCell align="left">效果</TableCell>
                <TableCell align="left">开放条件</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {idol.live_skills.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.effect}</TableCell>
                  <TableCell>{s.obtain || ''}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </Paper>

        <Paper className={classes.passiveSkillInfo}>
          <Table>
            <TableHead>
              <TableRow><TableCell align="center" colSpan={5}>被动技能 パッシブスキル</TableCell></TableRow>
              <TableRow>
                <TableCell align="left">效果</TableCell>
                <TableCell align="left">条件</TableCell>
                <TableCell align="left">发动概率</TableCell>
                <TableCell align="left">最大</TableCell>
                <TableCell align="left">开放条件</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {idol.passive_skills.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.effect}</TableCell>
                  <TableCell>{s.condition}</TableCell>
                  <TableCell>{s.probability}%</TableCell>
                  <TableCell>{s.max_time}回</TableCell>
                  <TableCell>{s.obtain || ''}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </Paper>


        <Paper className={classes.otherSkillInfo}>
          <Table>
            <TableHead>
              <TableRow><TableCell align="center" colSpan={3}>其它技能</TableCell></TableRow>
              <TableRow>
                <TableCell align="left">技能名</TableCell>
                <TableCell align="left">效果</TableCell>
                <TableCell align="left">条件</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {idol.other_skills.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.effect}</TableCell>
                  <TableCell>{s.obtain || ''}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </Paper>

        <Paper className={classes.supportSkillInfo}>
          <Table>
            <TableHead style={{ tableLayout: 'fixed' }}>
              <TableRow><TableCell align="center" colSpan={2 + supportSkillLevels.length}>
                支援技能 サポートスキル
              </TableCell></TableRow>
              <TableRow style={{ width: '10%' }}>
                <TableCell align="left">技能</TableCell>
                <TableCell align="left">技能效果</TableCell>
                {/* <TableCell align="left">取得Lv/スキルLv</TableCell> */}
                {supportSkillLevels.map((x, index) => (
                  <TableCell align="center" padding="none" className={classes.supportSkillLevelCol} key={index}>
                    {x}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {idol.support_skills.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.effect}</TableCell>
                  {parseSupportSkillList(s.get_lv, s.lv).map((x, index) => (
                    <TableCell align="center" padding="none" className={classes.supportSkillLevelCol} key={index}>
                      {x > 0 ? x : ''}
                    </TableCell>
                  ))}
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  } else {
    const idol = allIdols.p.find(x => x.id == currentIdolID) || allIdols.p[0];
    return (
      <div>
        <div className={classes.topInfo}>
          <div className={classes.avatar}>
            <IdolAvatar idolType={IdolType.produce} idolID={idol.id}></IdolAvatar>
          </div>
          <div style={{ width: '10%', float: 'left' }} />
          <Paper className={classes.basicInfo}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th"><strong>卡名</strong></TableCell>
                  <TableCell align="right">{idol.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><strong>稀有度</strong></TableCell>
                  <TableCell align="right">{idol.rarity}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><strong>实装日</strong></TableCell>
                  <TableCell align="right">{idol.avail.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th"><strong>入手方法</strong></TableCell>
                  <TableCell align="right">{idol.avail.source}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <div style={{ clear: 'both' }} />
        </div>

        <Paper className={classes.liveSkillInfo}>
          <Table>
            <TableHead>
              <TableRow><TableCell align="center" colSpan={4}>主动技能 ライブスキル</TableCell></TableRow>
              <TableRow>
                <TableCell align="left">技能名</TableCell>
                <TableCell align="left">效果</TableCell>
                <TableCell align="left">Link效果</TableCell>
                <TableCell align="left">开放条件</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {idol.live_skills.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.effect}</TableCell>
                  <TableCell>{s.link}</TableCell>
                  <TableCell>{s.obtain || ''}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </Paper>

        <Paper className={classes.passiveSkillInfo}>
          <Table>
            <TableHead>
              <TableRow><TableCell align="center" colSpan={5}>被动技能 パッシブスキル</TableCell></TableRow>
              <TableRow>
                <TableCell align="left">效果</TableCell>
                <TableCell align="left">条件</TableCell>
                <TableCell align="left">发动概率</TableCell>
                <TableCell align="left">最大</TableCell>
                <TableCell align="left">开放条件</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {idol.passive_skills.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.effect}</TableCell>
                  <TableCell>{s.condition}</TableCell>
                  <TableCell>{s.probability}%</TableCell>
                  <TableCell>{s.max_time}回</TableCell>
                  <TableCell>{s.obtain || ''}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </Paper>


        <Paper className={classes.otherSkillInfo}>
          <Table>
            <TableHead>
              <TableRow><TableCell align="center" colSpan={3}>其它技能</TableCell></TableRow>
              <TableRow>
                <TableCell align="left">技能</TableCell>
                <TableCell align="left">效果</TableCell>
                <TableCell align="left">开放条件</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {idol.other_skills.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.effect}</TableCell>
                  <TableCell>{s.obtain || ''}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </Paper>

        <Paper className={classes.omoideInfo}>
          <Table>
            <TableHead>
              <TableRow><TableCell align="center" colSpan={3}>回忆炸弹 思い出アピール</TableCell></TableRow>
              <TableRow>
                <TableCell align="left">LV</TableCell>
                <TableCell align="left">效果</TableCell>
                <TableCell align="left">Link效果</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {idol.omoide.map((s, index) => (
                <TableRow key={index}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.effect}</TableCell>
                  <TableCell>{s.link}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(IdolPage);