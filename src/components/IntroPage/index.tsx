import * as React from 'react';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { useAppData } from '../../context/AppData';

const styles = (theme: Theme) => createStyles({
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

interface Props extends WithStyles<typeof styles> {
}

const IntroPageZH = withStyles(styles)((props: Props) => {
  const { classes } = props;
  return (
    <main>
        <Grid container spacing={40} className={classes.mainGrid}>
            <Hidden smUp>
              <Grid container justify={'center'}>
                <Typography component="h1" variant="h5" color='inherit' noWrap>
                  {'L\'Anticards'}
                </Typography>
              </Grid>
            </Hidden>
            {/* Main */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                说明
              </Typography>
              <Divider />
              <Typography paragraph>
                <ul>
                  <li>{`关于 S卡擅长属性的定义是脑补的，仅供参考。规则：被动技能里这种属性的技能数目 >= 3（mental >= 2）。
                    比如先生千雪就定义为 vo, mental 擅长。
                    有的特例是手标的，比如进闸真乃只有两个被动技能，都是 Da, Vi UP，所以定义为 da, vi 擅长`}</li>
                  <li>{'所有的数据均无法完全保证正确性，请以游戏内为主'}</li>
                  <li>{'Bug 报告请尽量带上所用系统/浏览器/在什么情况下出现，或者在 github issue 中写以方便交流'}</li>
                </ul>
              </Typography>
              {/* <Typography variant="h6" gutterBottom>
                更新日志
              </Typography>
              <Divider />
              <Typography paragraph>
                <ul>
                  <li>2019-04-26，换数据源和数据结构</li>
                  <li>2019-04-11，适配窄屏</li>
                  <li>2019-04-03，修复：回忆炸弹3, 4级效果缺失</li>
                  <li>2019-03-29，更新主页、技能效果染色、名词说明</li>
                  <li>2019-03-25，第一版 demo</li>
                </ul>
              </Typography> */}
              <Typography variant="h6" gutterBottom>
                版权声明
              </Typography>
              <Divider />
              <Typography paragraph>
                本网站的所有图片素材及数据版权均归 BANDAI NAMCO Entertainment Inc. 所有，不得用于任何商业活动。
              </Typography>
            </Grid>
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                建议/Bug 报告
              </Typography>
              <Typography>
                <Link href='https://peing.net/zh-CN/yabukikanyan?event=0' target='_blank' rel="noopener">Peing(什么都可以说)</Link>
              </Typography>
              <Typography>
                <Link href='https://github.com/kannpro/L-Anticards/issues' target='_blank' rel="noopener">Github Issue</Link>
              </Typography>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                链接
              </Typography>
              <Typography>
                <Link href='https://github.com/kannpro/L-Anticards' target='_blank' rel="noopener">Github</Link>
              </Typography>
              <Typography>
                <Link component={(props) => <RouterLink to='/statistics' {...props}/>}>
                  统计
                </Link>
              </Typography>
            </Grid>
          </Grid>
    </main>
  )
});

const IntroPageJA = withStyles(styles)((props: Props) => {
  const { classes } = props;
  return (
    <main>
        <Grid container spacing={40} className={classes.mainGrid}>
            <Hidden smUp>
              <Grid container justify={'center'}>
                <Typography component="h1" variant="h5" color='inherit' noWrap>
                  {'L\'Anticards'}
                </Typography>
              </Grid>
            </Hidden>
            {/* Main */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                当サイトについて
              </Typography>
              <Divider />
              <Typography paragraph>
                <ul>
                  <li>当サイトは BANDAI NAMCO Entertainment Inc. が運営しているブラウザゲーム「アイドルマスターシャイニーカラーズ」の情報サイトです。</li>
                  <li>当サイトで掲載している画像の著作権や肖像権等は、各権利所有者に帰属します。</li>
                  <li>連絡、BUG 報告とか：
                    <Link href='https://github.com/kannpro/L-Anticards/issues' target='_blank' rel="noopener">Github</Link>
                    {'         '}
                    <Link href='https://peing.net/zh-CN/yabukikanyan?event=0' target='_blank' rel="noopener">Peing</Link>
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
    </main>
  )
});

export default () => {
  const { lang } = useAppData();
  if (lang == 'zh') {
    return (
      <IntroPageZH />
    );
  }
  return (
    <IntroPageJA />
  );
}