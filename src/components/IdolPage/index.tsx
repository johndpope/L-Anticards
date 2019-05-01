import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import CircularProgress from '@material-ui/core/CircularProgress';

import IdolAvatar from '../IdolAvatar';
import { useAppData } from '../../context/AppData';
import { IdolType, ProduceIdol, SupportIdol, Rarity, getActiveSkills, getPassiveSkills, getLimitBreakSkills } from '../../common/type';
import { Theme } from '@material-ui/core';
import LoadingProgress from '../LoadingProgress';

import HintText from '../HintText';

const styles = (theme: Theme) => createStyles({
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  tableBorder: {
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

interface Props extends WithStyles<typeof styles> {
}

const getSupportSkillLevels = (rarity: Rarity) => {
  switch (rarity) {
    case 'N':
      return [1, 10];
    case 'R':
      return [1, 30, 40, 50, 60];
    case 'SR':
      return [40, 50, 55, 60, 65, 70]
    default:
      return [50, 55, 60, 65, 70, 75, 80];
  }
}

const parseSupportSkillList = (rarity: Rarity, obtainLevels: number[], values: number[]) => {
  let levels = getSupportSkillLevels(rarity);

  const s = obtainLevels.reduce((acc, x, index) => (Math.max(acc, x <= levels[0] ? values[index] : 0)), 0)
  return levels.slice(1).reduce((acc, cur) => acc.concat(
    values[obtainLevels.findIndex(x => x == cur)] || 0
  ), [s])
};

const positiveOrEmpty = (t?: number) => {
  return (!t || t == 0) ? '' : t;
}

const ResponsiveSkillTable: React.FC<{
  title: (JSX.Element | string),
  headers: (JSX.Element | string)[],
  table: (JSX.Element | string | undefined)[][],
  smRender?: (e: (JSX.Element | string | undefined)[], index: number) => JSX.Element,
}> = (props) => {
  const { title, headers, table, smRender } = props;
  return (
    <>
      <Hidden xsDown>
        <Paper>
          <Table padding={'dense'}>
            <TableHead>
              <TableRow><TableCell align="center" colSpan={headers.length}>{title}</TableCell></TableRow>
              <TableRow>
                {headers.map((x, index) => <TableCell align="left" key={index}>{x}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {table.map((row, index) =>
                <TableRow key={index}>
                  {row.map((x, index) => <TableCell key={index}>{x}</TableCell>)}
                </TableRow>)
              }
            </TableBody>
          </Table>
        </Paper>
      </Hidden>
      <Hidden smUp>
        <Paper>
          <Table padding={'dense'}>
            <TableHead>
              <TableRow><TableCell align="center">{title}</TableCell></TableRow>
            </TableHead>
            <TableBody>
              {smRender ? table.map((row, index1) => smRender(row, index1)) :
                table.map((row, index1) => row.map((x, index2) => {
                  if (x) {
                    return <TableRow><TableCell>{x}</TableCell></TableRow>
                  } else {
                    return undefined
                  }
                }))
              }
            </TableBody>
          </Table>
        </Paper>
      </Hidden>
    </>
  )
}

const ProduceIdolPage: React.FC<Props & { idol: ProduceIdol }> = (props) => {
  const { i18nMsg } = useAppData();
  const { classes, idol } = props;
  return (
    <Grid container className={classes.mainGrid} justify={'center'} spacing={16}>
      <Grid item container sm={3} xs={11} justify={'center'}>
        <IdolAvatar idolType={IdolType.produce} idolID={idol.id}></IdolAvatar>
      </Grid>
      <Grid item sm={8} xs={11}>
        <Paper>
          <Table padding={'dense'}>
            <TableBody>
              <TableRow>
                <TableCell component="th"><strong>{i18nMsg('idolCardName')}</strong></TableCell>
                <TableCell align="right">{idol.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th"><strong>{i18nMsg('idolRarity')}</strong></TableCell>
                <TableCell align="right">{idol.rarity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th"><strong>{i18nMsg('idolReleastDate')}</strong></TableCell>
                <TableCell align="right">{idol.avail.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th"><strong>{i18nMsg('idolObtainSource')}</strong></TableCell>
                <TableCell align="right">{idol.avail.sourceType}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>

      <Grid item xs={11}>
        <ResponsiveSkillTable
          title={i18nMsg('activeSkill')}
          headers={['skillName', 'skillEffect', 'linkEffect', 'obtainCondition'].map(i18nMsg)}
          table={getActiveSkills(idol).map(s => [
            s.name,
            <HintText text={s.comment} />,
            s.link ? <HintText text={s.link.comment} /> : '',
            s.releaseConditions,
          ])}
          smRender={(e: (JSX.Element | string | undefined)[], index: number) => {
            return <TableRow><TableCell>
              <strong>{e[0]}</strong><br /><br />{i18nMsg('skillEffect')}:{e[1]}<br />LINK: {e[2]}<br />
              {e[3] && (<>{i18nMsg('condition')}: {e[3]}</>)}
            </TableCell></TableRow>
          }}
        />
      </Grid>
      <Grid item xs={11}>
        <ResponsiveSkillTable
          title={i18nMsg('passiveSkill')}
          headers={['skillEffect', 'condition', 'launchRate', 'skillMaxTime', 'obtainCondition'].map(i18nMsg)}
          table={getPassiveSkills(idol).map(s => [
            <HintText text={s.name} />,
            s.conditionComment,
            s.rateComment,
            s.limit.toString() + i18nMsg('times'),
            s.releaseConditions,
          ])}
          smRender={(e: (JSX.Element | string | undefined)[], index: number) => {
            return <TableRow><TableCell>
              {e[0]}<br /><br />{e[2]} | {e[3]} | {e[1]}
            </TableCell></TableRow>
          }}
        />
      </Grid>
      <Grid item xs={11}>
        <ResponsiveSkillTable
          title={i18nMsg('limitBreakSkill')}
          headers={['skillName', 'skillEffect', 'obtainCondition'].map(i18nMsg)}
          table={getLimitBreakSkills(idol).map(s => [
            s.name,
            <HintText text={s.comment} />,
            s.releaseConditions,
          ])}
          smRender={(e: (JSX.Element | string | undefined)[], index: number) => {
            return <TableRow><TableCell>
              <strong>{e[0]}</strong><br /><br />{i18nMsg('skillEffect')}:{e[1]}<br />
              {e[2] && (<>{i18nMsg('condition')}: {e[2]}</>)}
            </TableCell></TableRow>
          }}
        />
      </Grid>
      <Grid item xs={11}>
        <ResponsiveSkillTable
          title={i18nMsg('memorialAppeal')}
          headers={['lv', 'skillEffect', 'linkEffect'].map(i18nMsg)}
          table={idol.memoryAppeals.map(s => [
            s.name,
            <HintText text={s.comment} />,
            <HintText text={s.link.comment} />,
          ])}
          smRender={(e: (JSX.Element | string | undefined)[], index: number) => {
            return <TableRow><TableCell>
              <strong>{e[0]}</strong><br /><br />{i18nMsg('skillEffect')}:{e[1]}<br />LINK: {e[2]}
            </TableCell></TableRow>
          }}
        />
      </Grid>
    </Grid>
  )
}

const SupportIdolPage: React.FC<Props & { idol: SupportIdol }> = (props) => {
  const { i18nMsg } = useAppData();
  const { classes, idol } = props;
  return (
    <Grid container className={classes.mainGrid} justify={'center'} spacing={16}>
      <Grid item container sm={3} xs={11} justify={'center'}>
        <IdolAvatar idolType={IdolType.support} idolID={idol.id}></IdolAvatar>
      </Grid>
      <Grid item sm={8} xs={11}>
        <Paper>
          <Table padding={'dense'}>
            <TableBody>
              <TableRow>
                <TableCell component="th"><strong>{i18nMsg('idolCardName')}</strong></TableCell>
                <TableCell align="right">{idol.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th"><strong>{i18nMsg('idolRarity')}</strong></TableCell>
                <TableCell align="right">{idol.rarity}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th"><strong>{i18nMsg('idolReleastDate')}</strong></TableCell>
                <TableCell align="right">{idol.avail.date}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th"><strong>{i18nMsg('idolObtainSource')}</strong></TableCell>
                <TableCell align="right">{idol.avail.sourceType}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>

      <Grid item xs={11}>
        <ResponsiveSkillTable
          title={i18nMsg('activeSkill')}
          headers={['skillName', 'skillEffect', 'obtainCondition'].map(i18nMsg)}
          table={getActiveSkills(idol).map(s => [
            s.name,
            <HintText text={s.comment} />,
            s.releaseConditions,
          ])}
          smRender={(e: (JSX.Element | string | undefined)[], index: number) => {
            return <TableRow><TableCell>
              <strong>{e[0]}</strong><br /><br />{e[1]}<br />
              {e[2] && (<>{e[2]}</>)}
            </TableCell></TableRow>
          }}
        />
      </Grid>
      <Grid item xs={11}>
        <ResponsiveSkillTable
          title={i18nMsg('passiveSkill')}
          headers={['skillEffect', 'condition', 'launchRate', 'skillMaxTime', 'obtainCondition'].map(i18nMsg)}
          table={getPassiveSkills(idol).map(s => [
            <HintText text={s.name} />,
            s.conditionComment,
            s.rateComment,
            s.limit.toString() + i18nMsg('times'),
            s.releaseConditions,
          ])}
          smRender={(e: (JSX.Element | string | undefined)[], index: number) => {
            return <TableRow><TableCell>
              {e[0]}<br /><br />{e[2]} | {e[3]} | {e[1]}
            </TableCell></TableRow>
          }}
        />
      </Grid>
      <Grid item xs={11}>
        <ResponsiveSkillTable
          title={i18nMsg('limitBreakSkill')}
          headers={['skillName', 'skillEffect', 'obtainCondition'].map(i18nMsg)}
          table={getLimitBreakSkills(idol).map(s => [
            s.name,
            <HintText text={s.comment} />,
            s.releaseConditions,
          ])}
          smRender={(e: (JSX.Element | string | undefined)[], index: number) => {
            return <TableRow><TableCell>
              <strong>{e[0]}</strong><br /><br />{i18nMsg('skillEffect')}:{e[1]}<br />
              {e[2] && (<>{i18nMsg('condition')}: {e[2]}</>)}
            </TableCell></TableRow>
          }}
        />
      </Grid>
      <Grid item xs={11}>
        <Paper>
          <Hidden xsDown>
            <Table padding={'dense'}>
              <TableHead>
                <TableRow><TableCell align="center" colSpan={6}>{i18nMsg('supportEvent')}</TableCell></TableRow>
                <TableRow>
                  {['eventName', 'vocal', 'dance', 'visual', 'mental', 'sp'].map(i18nMsg).map(
                    (x, index) => <TableCell align="left" key={index}>{x}</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {idol.events.map((s, index) => (
                  <TableRow key={index}>
                    {[s.name, s.vo, s.da, s.vi, s.me, s.sp].map(
                      (x, index) => <TableCell key={index}>{x}</TableCell>
                    )}
                  </TableRow>
                ))
                }
                <TableRow key={'sumup'}>
                  {[
                    i18nMsg('sumup'),
                    ...[
                      idol.eventsSum.vo,
                      idol.eventsSum.da,
                      idol.eventsSum.vi,
                      idol.eventsSum.me,
                      idol.eventsSum.sp,
                    ].map(positiveOrEmpty)
                  ].map((x, index) => <TableCell key={index}>{x}</TableCell>)
                  }
                </TableRow>
              </TableBody>
            </Table>
          </Hidden>
          <Hidden smUp>
            <Table padding={'checkbox'}>
              <TableHead>
                <TableRow><TableCell align="center" colSpan={5}>{i18nMsg('supportEvent')}</TableCell></TableRow>
                <TableRow>
                  {['Vo', 'Da', 'Vi', 'Me', 'SP'].map(
                    (x, index) => <TableCell key={index}>{x}</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {idol.events.map((s, index) => (
                  <>
                    <TableRow><TableCell align="center" colSpan={5}>{s.name}</TableCell></TableRow>
                    <TableRow key={index}>
                      {[s.vo, s.da, s.vi, s.me, s.sp].map(
                        (x, index) => <TableCell key={index}>{x}</TableCell>
                      )}
                    </TableRow>
                  </>
                ))
                }
                <TableRow><TableCell align="center" colSpan={5}>{i18nMsg('sumup')}</TableCell></TableRow>
                <TableRow key={'sumup'}>
                  {[
                      idol.eventsSum.vo,
                      idol.eventsSum.da,
                      idol.eventsSum.vi,
                      idol.eventsSum.me,
                      idol.eventsSum.sp,
                    ].map(positiveOrEmpty)
                    .map((x, index) => <TableCell key={index}>{x}</TableCell>)
                  }
                </TableRow>
              </TableBody>
            </Table>
          </Hidden>
        </Paper>
      </Grid>
      <Grid item xs={11}>
        <Paper>
          <Hidden xsDown>
            <Table padding={'dense'}>
              <TableHead>
                <TableRow><TableCell align="center" colSpan={2 + getSupportSkillLevels(idol.rarity).length}>
                  {i18nMsg('supportSkill')}
                </TableCell></TableRow>
                <TableRow>
                  <TableCell align="left">{i18nMsg('skillName')}</TableCell>
                  <TableCell align="left">{i18nMsg('skillEffect')}</TableCell>
                  {getSupportSkillLevels(idol.rarity).map((x, index) => (
                    <TableCell align="center" padding="none"
                      className={classes.tableBorder} key={index}>
                      {x}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {idol.supportSkills.map((s, index) => (
                  <TableRow key={index}>
                    <TableCell>{s.name}</TableCell>
                    <TableCell><HintText text={s.description} /></TableCell>
                    {parseSupportSkillList(idol.rarity, s.levels, s.values).map((x, index) => (
                      <TableCell align="center" padding="none"
                        className={classes.tableBorder} key={index}>
                        {x > 0 ? x : ''}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
                }
              </TableBody>
            </Table>
          </Hidden>
          <Hidden smUp>
            <Table padding={'none'}>
              <TableHead>
                <TableRow><TableCell align="center" colSpan={getSupportSkillLevels(idol.rarity).length}>
                {i18nMsg('supportSkill')}
                </TableCell></TableRow>
                <TableRow>
                  {getSupportSkillLevels(idol.rarity).map((x, index) => (
                    <TableCell align='center' padding='none' key={index}>
                      {x}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {idol.supportSkills.map((s, index) => (
                  <>
                    <TableRow><TableCell align='center' colSpan={getSupportSkillLevels(idol.rarity).length}>
                      <HintText text={s.description} />
                    </TableCell></TableRow>
                    <TableRow key={index}>
                      {parseSupportSkillList(idol.rarity, s.levels, s.values).map((x, index) => (
                        <TableCell align='center' padding='none' key={index}>
                          {x > 0 ? x : ''}
                        </TableCell>
                      ))}
                    </TableRow>
                  </>
                ))
                }
              </TableBody>
            </Table>
          </Hidden>
        </Paper>
      </Grid>

    </Grid>
  )
}

const IdolPage: React.FunctionComponent<Props & {
  idolID: number,
}> = (props) => {
  const { allIdols, mainScrollToTop } = useAppData();
  React.useEffect(() => {
    mainScrollToTop();
  });

  const { classes, idolID } = props;
  if (!allIdols || allIdols.p.length === 0) {
    return (
      <LoadingProgress />
    )
  }
  let sIdol = allIdols.s.find(x => x.id == idolID);
  if (sIdol) {
    return (
      <SupportIdolPage idol={sIdol} classes={classes} />
    )
  }
  let pIdol = allIdols.p.find(x => x.id == idolID);
  if (pIdol) {
    return (
      <ProduceIdolPage idol={pIdol} classes={classes} />
    )
  }
  return (
    <p>No such Idol with id {idolID}</p>
  )
}

export default withStyles(styles)(IdolPage);