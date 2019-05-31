import * as React from 'react';
import { useState } from 'react';

import { MuiThemeProvider, withStyles, createStyles, createMuiTheme, Theme, WithStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link as RouterLink, withRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LocalParkingIcon from '@material-ui/icons/LocalParking';
import LanguageIcon from '@material-ui/icons/Language';
import Home from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import { AppDataProvider, useAppData } from './context/AppData';
import { useToggle } from './hooks/gadget';
import IdolSearchPage from './components/IdolSearchPage'
import TeamList from './components/TeamList'
import IdolPage from './components/IdolPage'
import { IdolType } from './common/type';
import { GlobalTabs } from './common/filter';
import IntroPage from './components/IntroPage';
import IdolStatistics from './components/IdolStatistics';
import { toIntro, toProduce, toSupport } from './common/route';
import { supportedLanguage } from './common/i18n/i18n';

var classNames = require('classnames');

const drawerWidth = 320;

const anticaColor = '#673AB6';

const anticaTheme = createMuiTheme({
  palette: {
    primary: {
      'main': anticaColor,
    },
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    //contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    //tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  typeTab: {
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
  },
});

interface Props extends WithStyles<typeof styles> {
}

const LanguageButton = withStyles(styles)((props: Props) => {
  const { lang, setLang } = useAppData();
  const [anchorEl, setAnchorEl] = useState(null as HTMLElement | null);
  const onClose = () => { setAnchorEl(null); }
  return (
    <>
      <IconButton color="inherit" onClick={(e) => setAnchorEl(e.currentTarget)}>
        <LanguageIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose} >
        {
          Object.keys(supportedLanguage).map((v, index) => (
            <MenuItem key={index} selected={v === lang} onClick={() => {
              setLang(v);
              onClose();
            }}>{supportedLanguage[v]}</MenuItem>
          ))
        }
      </Menu>
    </>
  )
});

const AppBarWithTeamInfo = withStyles(styles)((props: Props) => {
  const [teamDrawerOpen, OpenTeamDrawer, CloseTeamDrawer] = useToggle(false);
  const { classes } = props;

  const TabList = withRouter(({ location }) => (
    <Tabs value={location.pathname} >
    <Tab label="Produce" value='/produce' 
      component={(props) => <RouterLink to={toProduce} {...props}/>} 
    />
    <Tab label="Support" value='/support'
      component={(props) => <RouterLink to={toSupport} {...props}/>}
    />
    {/* <Tab label="Idol" component={(props) => <RouterLink to={toIdol()} {...props}/>}/> */}
    {/* TODO: <Tab label="Team" value={GlobalTabs.team} /> */}
  </Tabs>
  ));

  return (
    <AppBar position="absolute"
      className={classNames(classes.appBar, teamDrawerOpen && classes.appBarShift)}
    >
      <Toolbar disableGutters={!teamDrawerOpen} className={classes.toolbar}>
        
        {/* TODO:
          <IconButton color="inherit" aria-label="Open drawer"
            onClick={OpenTeamDrawer}
            className={classNames(classes.menuButton, teamDrawerOpen && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton> */}
        <div className={classes.menuButton}>
          <Hidden smUp>
            <IconButton color="inherit" component={(props) => <RouterLink to={toIntro} {...props}/>}>
              <Home />
            </IconButton>
          </Hidden>
        </div>
        <Hidden xsDown>
          <Link color='inherit' component={(props) => <RouterLink to={toIntro} {...props}/>}>
            <Typography component="h1" variant="h5" color='inherit' noWrap>
              {'L\'Anticards'}
            </Typography>
          </Link>
        </Hidden>

        {/* padding between title and tabs */}
        <Typography component="h1" variant="h5" color='inherit' noWrap className={classes.title}>
        </Typography>
        <Typography color="inherit" className={classes.typeTab}>
          <TabList />
        </Typography>
        <LanguageButton />
        <Hidden xsDown>
          <IconButton color="inherit" href='https://github.com/kannpro/L-Anticards' target='_blank' rel="noopener">
            <LocalParkingIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
    /* TODO:
      <Drawer
        variant="permanent"
        classes={{ paper: classNames(classes.drawerPaper, !teamDrawerOpen && classes.drawerPaperClose) }}
        open={teamDrawerOpen}
      >
        <div className={classes.toolbarIcon}>
          TEAM INFO
            <IconButton onClick={CloseTeamDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <TeamList />
      </Drawer> */
  );
});

const ContentContainer = withStyles(styles)((props: Props) => {
  return (
    <div>
      <Route path={toIntro} exact component={IntroPage} />
      <Route path={toProduce} component={() => <IdolSearchPage idolType={IdolType.produce}/>} />
      <Route path={toSupport} component={() => <IdolSearchPage idolType={IdolType.support}/>} />
      <Route path='/idol/:idolID' render={(props) => <IdolPage idolID={props.match.params.idolID} />}/>
      <Route path='/statistics' component={IdolStatistics} />
      {/* {tab === 'team' &&
        <div>Type: team</div>
      } */}
    </div>
  )
});

const App = withStyles(styles)((props: Props) => {
  // 20190531: walkaround, HTMLMainElement can not be found
  const mainRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  const mainScrollToTop = () => {
    if (mainRef.current != null) { mainRef.current.scrollTo(0, 0); }
  };

  const { classes } = props;
  return (
    <AppDataProvider mainScrollToTop={mainScrollToTop}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBarWithTeamInfo classes={classes} />
        <main className={classes.content} ref={mainRef}>
          <div className={classes.appBarSpacer} />
          <ContentContainer classes={classes} />
        </main>
      </div>
    </AppDataProvider>
  );
});

export default () => (
  <Router>
    <MuiThemeProvider theme={anticaTheme}>
      <App />
    </MuiThemeProvider>
  </Router>
);
