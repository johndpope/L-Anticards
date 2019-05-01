import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default () => (
  <CircularProgress style={{
    position: 'absolute', left: '50%', top: '50%',
  }}/>
);