import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { avatarUrl } from '../FetchData';

const styles = createStyles({
  card: {
    width: 100,
    height: 130,
  },
});

interface Props extends WithStyles<typeof styles> {
  idolID: number,
}

const IdolAvatar: React.FunctionComponent<Props> = (props) => {
    const { classes, idolID } = props
    return (
      <Card className={classes.card} >
        <CardActionArea>
          <CardMedia component="img" image={avatarUrl(idolID)}>
          </CardMedia>
        </CardActionArea>
        {/* <CardContent className={classes.idolStars}>
          { <IdolStars starred={2} maxStar={4} /> }
        </CardContent> */}
      </Card >
    )
}

export default withStyles(styles)(IdolAvatar);