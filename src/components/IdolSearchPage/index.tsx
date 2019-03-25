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

import { useAppData } from '../../context/AppData';
import { IdolType, Strength, membersList, unitsList, strengthsList } from '../../common/type';
import { IdolView } from '../../common/filter';


const styles = createStyles({
  root: {
    width: '97%',
  },
  filterToolbar: {
  },
  filters: {
    //margin: theme.spacing.unit,
    // minWidth: 120,
    padding: 6,
  },
  // strengthControl: {
  //   //margin: theme.spacing.unit,
  //   // minWidth: 120,
  //   padding: 6,
  // },
  strengthMenu: {
    maxHeight: 200,
    // width: 150,
  },
  idolGrips: {
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
  idolType: IdolType,
}

const IdolGrips: React.FunctionComponent<Props> = (props) => {
  const appData = useAppData();

  const { classes, idolType } = props;
  const { supportIdols, produceIdols } = appData;
  return (
    <GridList className={classes.idolGrips}>
      {idolType === IdolType.support &&
        supportIdols.map(idol => (
          <GridListTile key={idol.id} style={styles.idolGrip} >
            <IdolAvatar idolType={idolType} idolID={idol.id} />
          </GridListTile>
        ))
      }
      {idolType === IdolType.produce &&
        produceIdols.map(idol => (
          <GridListTile key={idol.id} style={styles.idolGrip} >
            <IdolAvatar idolType={idolType} idolID={idol.id} />
          </GridListTile>
        ))
      }
    </GridList>
  )
}

const IdolList: React.FunctionComponent<Props> = (props) => {
  const appData = useAppData();

  const { classes, idolType } = props;
  const { supportIdols, produceIdols, setFilter } = appData;
  const filter = appData.getFilter(idolType);
  const page = filter.listPage
  const rowsPerPage = filter.listRowPerPage
  const idolsNum = (idolType === IdolType.support) ? supportIdols.length : produceIdols.length;
  return (
    <Table className={classes.idolList}>
      <TableBody>
        {idolType === IdolType.support &&
          supportIdols.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(idol => (
            <TableRow key={idol.id} >
              <TableCell scope="row" style={{ width: '15%' }}>
                <IdolAvatar idolType={idolType} idolID={idol.id} />
              </TableCell>
              <TableCell scope="row" style={{ width: '20%' }}>
                <TableRow>{idol.name}</TableRow>
                <TableRow>{idol.rarity}</TableRow>
              </TableCell>
              <TableCell scope="row" style={{ width: '30%' }}>
                {idol.live_skills.map(s => (<TableRow>{s.effect}</TableRow>))}
              </TableCell>
            </TableRow>
          ))
        }
        {idolType === IdolType.produce &&
          produceIdols.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(idol => (
            <TableRow key={idol.id} >
              <TableCell scope="row" style={{ width: '15%' }}>
                <IdolAvatar idolType={idolType} idolID={idol.id} />
              </TableCell>
              <TableCell scope="row" style={{ width: '20%' }}>
                <TableRow>{idol.name}</TableRow>
                <TableRow>{idol.rarity}</TableRow>
              </TableCell>
              <TableCell scope="row" style={{ width: '30%' }}>
                {idol.live_skills.map(s => (<TableRow>{s.effect}</TableRow>))}
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[2, 5, 10]} colSpan={100}
            count={idolsNum} rowsPerPage={rowsPerPage} page={page}
            onChangePage={(event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) =>
              setFilter(idolType, {
                ...filter,
                listPage: newPage,
              })
            }
            onChangeRowsPerPage={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
              setFilter(idolType, {
                ...filter,
                listPage: 0,
                listRowPerPage: Number(event.target.value),
              })
            }}
          />
        </TableRow>
      </TableFooter>
    </Table>
  )
}

const Filter: React.FunctionComponent<Props> = (props) => {
  const appData = useAppData();
  
  const { classes, idolType } = props;
  const { getFilter, setFilter } = appData;
  const filter = getFilter(idolType);
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          <FormControl className={classes.filters}>
            <InputLabel htmlFor="select-multiple-chip">View</InputLabel>
            <Select value={filter.view} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFilter(idolType, {
                ...filter,
                view: event.target.value,
              });
            }}>
              {Object.values(IdolView).map(v => (<MenuItem value={v}> {v} </MenuItem>))}
            </Select>
          </FormControl>
          {
            // Strengths filter, only for support cards
            idolType == IdolType.support &&
            <FormControl className={classes.filters}>
            <InputLabel htmlFor="select-multiple-chip">Strength</InputLabel>
            <Select multiple value={filter.strengths}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {                
                setFilter(idolType, {
                  ...filter,
                  strengths: event.target.value as any as Strength[],
                });
              }}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div className={classes.chips}>
                  {filter.strengths.map(value => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
            // MenuProps={MenuProps}
            >
              {strengthsList.map(s => (
                <MenuItem key={s} value={s} > {s} </MenuItem>
              ))}
            </Select>
          </FormControl>
          }

          <FormControl className={classes.filters}>
            <InputLabel htmlFor="select-multiple-chip">Member</InputLabel>
            <Select value={filter.member} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFilter(idolType, {
                ...filter,
                member: event.target.value as typeof filter.member,
              });
            }}>
              {['all', ...membersList].map(v => (<MenuItem value={v}> {v} </MenuItem>))}
            </Select>
          </FormControl>
          <FormControl className={classes.filters}>
            <InputLabel htmlFor="select-multiple-chip">Unit</InputLabel>
            <Select value={filter.unit} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setFilter(idolType, {
                ...filter,
                unit: event.target.value as typeof filter.unit,
              });
            }}>
              {['all', ...unitsList].map(v => (<MenuItem value={v}> {v} </MenuItem>))}
            </Select>
          </FormControl>

        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const IdolSearchPage: React.FunctionComponent<Props> = (props) => {
  const appData = useAppData();

  const { classes, idolType } = props;
  const filter = appData.getFilter(idolType);
  return (
    <div className={classes.root}>
      <Filter idolType={idolType} classes={classes} />
      <br />
      {filter.view === IdolView.grip && <IdolGrips idolType={idolType} classes={classes} />}
      {filter.view === IdolView.list && <IdolList idolType={idolType} classes={classes} />}
      {/* TODO: maybe more view like 
      https://devexpress.github.io/devextreme-reactive/react/grid/demos/featured/chart-integration/ */}
    </div>
  );
}

export default withStyles(styles)(IdolSearchPage);