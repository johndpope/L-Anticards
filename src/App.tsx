import * as React from 'react';
import { useState } from 'react';

import { MuiThemeProvider, withStyles, createStyles, createMuiTheme, Theme, WithStyles } from '@material-ui/core/styles';
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
import LocalParkingIcon from '@material-ui/icons/LocalParking'


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import { AppDataProvider, useAppData } from './context/AppData';
import { useToggle } from './hooks/gadget';
import IdolSearchPage from './components/IdolSearchPage'
import TeamList from './components/TeamList'
import IdolPage from './components/IdolPage'
import { IdolType } from './common/type';
import { GlobalTabs } from './common/filter';

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
    //padding: spacing.unit,
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
    height: '100vh',
    overflow: 'auto',
  },
});

interface Props extends WithStyles<typeof styles> {
}

const App = withStyles(styles)((props: Props) => {
  const [teamDrawerOpen, OpenTeamDrawer, CloseTeamDrawer] = useToggle(false);
  const { tab, setTab } = useAppData();

  const { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute"
        className={classNames(classes.appBar, teamDrawerOpen && classes.appBarShift)}
      >
        <Toolbar disableGutters={!teamDrawerOpen} className={classes.toolbar}>
          <IconButton color="inherit" aria-label="Open drawer"
            onClick={OpenTeamDrawer}
            className={classNames(classes.menuButton, teamDrawerOpen && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
            L'Anticards
          </Typography>
          <Typography color="inherit" className={classes.typeTab}>
            <Tabs value={tab} onChange={(_, value: string) => setTab(value)}>
              <Tab label="Produce" value={GlobalTabs.produce} />
              <Tab label="Support" value={GlobalTabs.support} />
              <Tab label="Idol" value={GlobalTabs.idol} />
              <Tab label="Team" value={GlobalTabs.team} />
            </Tabs>
          </Typography>
          <IconButton color="inherit" >
            <Badge badgeContent={null} color="secondary">
              <LocalParkingIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{paper: classNames(classes.drawerPaper, !teamDrawerOpen && classes.drawerPaperClose)}}
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
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {tab === 'support' &&
          <Typography variant="h4" gutterBottom component="h2">
            <IdolSearchPage idolType={IdolType.support} />
          </Typography>
        }
        {tab === 'produce' &&
          <Typography variant="h4" gutterBottom component="h2">
            <IdolSearchPage idolType={IdolType.produce} />
          </Typography>
        }
        {tab === 'idol' &&
          <Typography variant="h4" gutterBottom component="h2">
            {/* <IdolList idolType={IdolType.produce} /> */}
            <IdolPage/>
            </Typography>
        }
        {tab === 'team' &&
          <Typography variant="h4" gutterBottom component="h2">
            Type: team
            </Typography>
        }
      </main>

    </div>
  );
});

export default () => (
  <MuiThemeProvider theme={anticaTheme}>
    <AppDataProvider>
      <App />
    </AppDataProvider>
  </MuiThemeProvider>
);
