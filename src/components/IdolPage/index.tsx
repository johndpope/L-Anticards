import * as React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import IdolAvatar from '../IdolAvatar';
import { useAppData } from '../../context/AppData';

const styles = createStyles({
});

interface Props extends WithStyles<typeof styles> {
}

const IdolPage: React.FunctionComponent<Props> = (props) => {
    const { currentIdolType, currentIdolID } = useAppData();
    const { classes } = props
    return (
      <IdolAvatar idolType={currentIdolType} idolID={currentIdolID}></IdolAvatar>
    )
}

export default withStyles(styles)(IdolPage);