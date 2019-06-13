import * as React from 'react';
import { useContext } from 'react';

import { defaultProduceFilter, defualtSupportFilter, IdolFilter } from '../../common/filter';
import { applySupportFilter, applyProduceFilter } from '../../common/filter';
import { SupportIdol, AllIdolList, emptyIdolList, ProduceIdol, IdolType } from '../../common/type';
import { LOCAL_STORAGE_LANG, idolsFile } from '../../common/constants';
import i18n from '../../common/i18n/i18n';
import { getDefaultLanguage } from '../../common/i18n/i18n';

const currentAppData = {
  lang: window.localStorage.getItem(LOCAL_STORAGE_LANG) || getDefaultLanguage(),
  // Idol list
  allIdols: emptyIdolList,
  supportIdols: [] as SupportIdol[],
  produceIdols: [] as ProduceIdol[],
  // User teams list
  teams: [],
  // Filter Setting
  produceFilter: defaultProduceFilter,
  supportFilter: defualtSupportFilter,
};
type AppData = typeof currentAppData;
const appDataOperator = {
  ...currentAppData,
  setFilter: (typ: IdolType, f: IdolFilter) => { },
  getFilter: (typ: IdolType) => { return defualtSupportFilter },
  resetFilter: (typ: IdolType) => { },
  mainScrollToTop: () => {},
  setLang: (lang: string) => {},
  i18nMsg: (key: string) => '',
}

const AppDataContext = React.createContext(appDataOperator);
interface AppDataContentProps {
  mainScrollToTop: () => void,
}

export class AppDataProvider extends React.PureComponent<AppDataContentProps, AppData> {
  state: Readonly<AppData> = currentAppData;
  locale: Readonly<i18n> = new i18n(currentAppData.lang);

  applyFilter = () => {
    this.setState((prevState) => {
      const idols = prevState.allIdols;
      return {
        supportIdols: applySupportFilter(idols.s, prevState.supportFilter),
        produceIdols: applyProduceFilter(idols.p, prevState.produceFilter),
      }
    })
  }

  loadIdols = (lang?: string) => {
    fetch(idolsFile(lang || this.state.lang))
      .then(resp => resp.json())
      .then(resp => {
        const idols: AllIdolList = resp;
        this.setState({
          allIdols: idols,
        })
        this.applyFilter()
      }
      ).catch(err =>
        console.log(err.message) // eslint-disable-line no-console
      );
  }

  componentDidMount = () => {
    this.loadIdols();
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
      mainScrollToTop: () => {
        this.props.mainScrollToTop()
      },
      resetFilter: (typ: IdolType) => {
        if (typ === IdolType.support) {
          this.setState({ supportFilter: defualtSupportFilter })
        } else {
          this.setState({ produceFilter: defaultProduceFilter })
        }
        this.applyFilter()
      },
      setLang: (lang: string) => {
        this.locale.setLanguage(lang);
        window.localStorage.setItem(LOCAL_STORAGE_LANG, lang);
        this.setState({ lang: lang });
        this.loadIdols(lang);
      },
      i18nMsg: (key: string) => {
        return this.locale.msg(key);
      },
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
