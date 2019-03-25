import * as React from 'react';
import { useContext } from 'react';

import { defaultProduceFilter, defualtSupportFilter, IdolFilter, defaultTab, GlobalTabs } from '../../common/filter';
import { applySupportFilter, applyProduceFilter } from '../../common/filter';
import { SupportIdol, AllIdolList, emptyIdolList, ProduceIdol, IdolType } from '../../common/type';

const currentAppData = {
  // Idol list
  allIdols: emptyIdolList,
  supportIdols: [] as SupportIdol[],
  produceIdols: [] as ProduceIdol[],
  // User teams list
  teams: [],
  // Filter Setting
  produceFilter: defaultProduceFilter,
  supportFilter: defualtSupportFilter,
  // Current Tab
  lastTab: defaultTab,
  tab: defaultTab,
  // Idol Page
  currentIdolType: IdolType.produce,
  currentIdolID: 1,
  // token: window.localStorage.getItem(LOCAL_STORAGE_TOKEN) || defaultToken,
  // user_name: window.localStorage.getItem(LOCAL_STORAGE_USERNAME) || defaultUserName,
  // user_id: window.localStorage.getItem(LOCAL_STORAGE_USERID) || defaultUserID,
  // expirationTime: window.localStorage.getItem(LOCAL_STORAGE_EXPIRATION_TIME) || defaultExpirationTime,
};
type AppData = typeof currentAppData;
const appDataOperator = {
  ...currentAppData,
  setFilter: (typ: IdolType, f: IdolFilter) => { },
  getFilter: (typ: IdolType) => { return defualtSupportFilter },
  gotoIdolPage: (typ: IdolType, id: number) => { },
  setTab: (v: string) => { },
  resetFilter: (typ: IdolType) => { },
}

const AppDataContext = React.createContext(appDataOperator);
interface AppDataContentProps {
  mainScrollToTop: () => void,
}

export class AppDataProvider extends React.Component<AppDataContentProps, AppData> {
  state: Readonly<AppData> = currentAppData;

  // componentDidMount() {
  //   axiosInstance = axios.create({
  //     baseURL: process.env.REACT_APP_API_ENTRYPOINT,
  //   });
  //   axiosInstance.get<AllIdolList>(
  //     "/all",
  //   ).then(res => 
  //     this.setState({
  //       allIdols: res.data,
  //       supportIdols: res.data.s,
  //       produceIdols: res.data.p,
  //     })
  //   ).catch(err =>
  //     console.log(err)
  //   );
  // }

  applyFilter = () => {
    this.setState((prevState) => {
      const idols = prevState.allIdols;
      return {
        supportIdols: applySupportFilter(idols.s, prevState.supportFilter),
        produceIdols: applyProduceFilter(idols.p, prevState.produceFilter),
      }
    })
  }

  componentDidMount() {
    fetch('./static.json')
      .then(resp => resp.json())
      .then(resp => {
        const idols: AllIdolList = resp;
        this.setState({
          allIdols: idols,
        })
        this.applyFilter()
      }
      ).catch(err =>
        console.log(err.message)
      );
  }

  render() {
    const value = {
      ...this.state,
      setFilter: (typ: IdolType, f: IdolFilter) => {
        if (typ === IdolType.support) {
          this.setState({ supportFilter: f })
        } else {
          this.setState({ produceFilter: f })
        }
        this.applyFilter()
      },
      getFilter: (typ: IdolType) => {
        if (typ === IdolType.support) {
          return this.state.supportFilter
        } else {
          return this.state.produceFilter
        }
      },
      gotoIdolPage: (typ: IdolType, id: number) => {
        this.setState((prevState) => ({
          currentIdolType: typ,
          currentIdolID: id,
          tab: GlobalTabs.idol,
          lastTab: prevState.tab,
        }));
        this.props.mainScrollToTop();
      },
      setTab: (v: string) => {
        this.setState((prevState) => ({
          tab: v,
          lastTab: prevState.tab,
        }))
      },
      resetFilter: (typ: IdolType) => {
        if (typ === IdolType.support) {
          this.setState({ supportFilter: defualtSupportFilter })
        } else {
          this.setState({ produceFilter: defaultProduceFilter })
        }
        this.applyFilter()
      }
    };
    return (
      <AppDataContext.Provider value={value}>
        {this.props.children}
      </AppDataContext.Provider>
    )
  }
}

export function useAppData() {
  const appData = useContext(AppDataContext);
  return appData
}
