import * as React from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { avatarUrl, teamInfo } from '../FetchData'

const styles = createStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
});

interface Props extends WithStyles<typeof styles> {
}

const TeamList: React.FunctionComponent<Props> = (props) => {
  const { classes } = props;
  const membersList = teamInfo.map(idol => (
    <ListItem key={idol.boom_id}>
      <ListItemAvatar>
        <Avatar src={avatarUrl(idol.id)} />
      </ListItemAvatar>
      <ListItemText
        primary={idol.name}
        secondary={
          <div> VO {idol.status.vo} <br /> DA {idol.status.da} <br />VI {idol.status.vi} <br /> </div>
        }
      />
    </ListItem>
  ));
  return (
    <List className={classes.root}>
      {membersList}
    </List>
  );
}

export default withStyles(styles)(TeamList);