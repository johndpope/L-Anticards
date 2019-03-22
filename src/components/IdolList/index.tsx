import * as React from 'react';
import { useState } from 'react';

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import IdolAvatar from '../IdolAvatar';
import { idolData } from '../FetchData';

import { viewGrip, viewList, viewIdol, idolListViews, viewText } from './filters';
import { initIdolListView, allStrengths, initStrengths } from './filters';
import { useAppData } from '../../context/AppData';
import { Strength } from '../../common/idolInfo';


const styles = createStyles({
  filter: {
    width: '90%',
  },
  idolGrips: {
    width: '100%',
    //height: 450,
  },
  idolGrip: {
    width: 110,
    height: 130,
  },
  idolList: {
  },
  idolListItem: {
    width: '100%',
    height: 330,
  },
  viewControl: {
    //margin: theme.spacing.unit,
    // minWidth: 120,
  },
  strengthControl: {
    //margin: theme.spacing.unit,
    // minWidth: 120,
  },
  strengthMenu: {
    maxHeight: 200,
    // width: 150,
  },
  form: {
    display: 'flex',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  chip: {
    // margin: theme.spacing.unit / 4,
    height: '80%',
    // width: '80%',
  },
});

interface Props extends WithStyles<typeof styles> {
}

const IdolList: React.FunctionComponent<Props> = (props) => {
  const [view, setView] = useState(initIdolListView);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const appData = useAppData();

  const { strengthFilter, setStrengthFilter } = appData;
  const { classes } = props;
  return (
    <div>
      <div className={classes.filter}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <FormControl className={classes.viewControl}>
                <InputLabel htmlFor="select-multiple-chip">View</InputLabel>
                <Select value={view} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                  setView(event.target.value)
                }}>
                  {idolListViews.map(v => (<MenuItem value={v}> {viewText(v)} </MenuItem>))}
                </Select>
              </FormControl>
              <FormControl className={classes.strengthControl}>
                <InputLabel htmlFor="select-multiple-chip">Strength</InputLabel>
                <Select multiple value={strengthFilter}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    setStrengthFilter(event.target.value as any as Strength[]);
                  }}
                  input={<Input id="select-multiple-chip" />}
                  renderValue={selected => (
                    <div className={classes.chips}>
                      {Object.keys(Strength).map(value => (
                        <Chip key={value} label={value} className={classes.chip} />
                      ))}
                    </div>
                  )}
                // MenuProps={MenuProps}
                >
                  {allStrengths.map(s => (
                    <MenuItem key={s} value={s} > {s} </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>

      <br />
      {view === viewGrip &&
        <GridList className={classes.idolGrips}>
          {idolData.map(idol => (
            <GridListTile key={idol.id} style={styles.idolGrip} >
              <IdolAvatar idolID={idol.boom_id} />
            </GridListTile>
          ))}
        </GridList>
      }
      {view === viewList &&
        <Table className={classes.idolList}>
          <TableBody>
            {idolData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(idol => (
              <TableRow key={idol.id} >
                <TableCell component="th" scope="row">
                  <IdolAvatar idolID={idol.boom_id} />
                </TableCell>
                <TableCell scope="row">
                  {idol.name}
                </TableCell>
                <TableCell align="right">{100}</TableCell>
                <TableCell align="right">{200}</TableCell>
              </TableRow>
            ))}
            {/* {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[2, 5, 10]}
                colSpan={3}
                count={idolData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => 
                  setPage(newPage)
                }
                onChangeRowsPerPage={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                  setRowsPerPage(Number(event.target.value));
                  setPage(0);
                }}
              // ActionsComponent={TablePaginationActionsWrapped}
              />
            </TableRow>
          </TableFooter>
        </Table>
        // <GridList className={classes.idolList}>
        //   {idolData.map(idol => (
        //     <GridListTile key={idol.id} style={styles.idolListItem} >
        //       <IdolAvatar idolID={idol.boom_id} />
        //     </GridListTile>
        //   ))}
        // </GridList>

        // TODO: maybe more view like 
        // https://devexpress.github.io/devextreme-reactive/react/grid/demos/featured/chart-integration/
      }
    </div>
  );
}

export default withStyles(styles)(IdolList);