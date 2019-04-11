import * as React from 'react';

import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import haitaiImage from '../../asserts/haitai2.jpg';
import { Link } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  // tubaro: {
  //   width: 728,
  //   height: 410,
  //   margin: '0 auto',
  //   backgroundImage: `url(${haitaiImage})`,
  //   backgroundSize: 'contain',
  // },
  // tubaroContent: {
  //   padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  // },

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

const IntroPage = withStyles(styles)((props: Props) => {
  const { classes } = props;
  return (
    <main>
        {/* <div className={classes.tubaro}>
          <div className={classes.tubaroContent}>
            <Typography component="h1" variant="h2" align="center" style={{
              color: '#A91727',
              fontFamily: 'hkgokukaikk',
              fontSize: 100,
              textShadow: '0 0 30px #58211F',
              opacity: 0.9,
              margin: '70px',
              // boxShadow: '0 0 10px 4px white',
            }} gutterBottom>
              流三
            </Typography>
            <Typography variant="h6" align="center" style={{
              color: '#C9C9C9',
              fontSize: 12,
              margin: '-30px',
              textShadow: '0 0 8px black',
              WebkitTextStroke: '0.2px black',
            }} paragraph>
              <strong>你顶多就是个 P 吧。</strong>
            </Typography>
          </div>
        </div> */}
        <Grid container spacing={40} className={classes.mainGrid}>
            <Hidden xsDown>
              <Grid container justify={'center'}>
                <img src={haitaiImage} alt={'ryu3'} style={{
                  maxWidth: '80%',
                  // height: 'auto',
                  objectFit: 'none',
                }}/>
              </Grid>
            </Hidden>
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
              <Typography variant="h6" gutterBottom>
                更新日志
              </Typography>
              <Divider />
              <Typography paragraph>
                <ul>
                  <li>2019-04-11，适配窄屏</li>
                  <li>2019-04-03，修复：回忆炸弹3, 4级效果缺失</li>
                  <li>2019-03-29，更新主页、技能效果染色、名词说明</li>
                  <li>2019-03-25，第一版 demo</li>
                </ul>
              </Typography>
              <Typography variant="h6" gutterBottom>
                版权声明
              </Typography>
              <Divider />
              <Typography paragraph>
                本网站的所有图片素材及数据版权均归 BANDAI NAMCO Entertainment Inc所有，不得用于任何商业活动。
              </Typography>
            </Grid>
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              {/* <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </Paper> */}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                建议/Bug 报告
              </Typography>
              <Typography>
                <Link href='https://peing.net/zh-CN/yabukikanyan?event=0' target='_blank' rel="noopener">Peing(什么都可以说)</Link>
              </Typography>
              <Typography>
                <Link href='https://github.com/kannpro/L-Anticards/issues' target='_blank' rel="noopener">Github Issue</Link>
              </Typography>
              {/* <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {['s1', 's2', 's3'].map(network => (
                <Typography key={network}>{network}</Typography>
              ))} */}
            </Grid>
          </Grid>
    </main>
  )
});

export default withStyles(styles)(IntroPage);