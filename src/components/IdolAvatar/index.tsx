import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { Link as RouterLink, withRouter } from 'react-router-dom';

import { CardActions, Theme } from '@material-ui/core';
import { useAppData } from '../../context/AppData';
import { IdolType } from '../../common/type';
import { toIdol } from '../../common/route';

function padLeft(text: string, padChar: string, size: number): string {
  return (String(padChar).repeat(size) + text).substr((size * -1), size);
}

function avatarUrl(idolID: number): string {
  return process.env.PUBLIC_URL + '/image/webp/' + padLeft(idolID.toString(), '0', 4) + '.webp'
}

const styles = (theme: Theme) => createStyles({
  card: {
    width: 95,
    height: 130,
  },
  cardActionArea: {
    width: 95,
    height: 95,
  }
});

interface Props extends WithStyles<typeof styles> {
  idolID: number,
  idolType: IdolType,
}

const IdolAvatar: React.FunctionComponent<Props> = (props) => {
    const { classes, idolID } = props

    const AvatarCardMedia = withRouter(({ history }) => (
      <CardMedia component="img" image={avatarUrl(idolID)} 
        onClick={() => {
          history.push(toIdol(idolID));
        }}
        src={toIdol(idolID)}
      />
    ))
    return (
      <Card className={classes.card} >
        <CardActionArea className={classes.cardActionArea}>
          <AvatarCardMedia />
          <CardActions></CardActions>
        </CardActionArea>
        {/* <CardContent className={classes.idolStars}>
          { <IdolStars starred={2} maxStar={4} /> }
        </CardContent> */}
      </Card >
    )
}

export default withStyles(styles)(IdolAvatar);