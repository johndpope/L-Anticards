import * as React from 'react';
import { useContext } from 'react';

import { Strength } from '../../common/idolInfo'
import { defaultStrengthFilter } from '../../common/filter';

const currentAppData = {
  strengthFilter: defaultStrengthFilter,
  teams: [],
  // token: window.localStorage.getItem(LOCAL_STORAGE_TOKEN) || defaultToken,
  // user_name: window.localStorage.getItem(LOCAL_STORAGE_USERNAME) || defaultUserName,
  // user_id: window.localStorage.getItem(LOCAL_STORAGE_USERID) || defaultUserID,
  // expirationTime: window.localStorage.getItem(LOCAL_STORAGE_EXPIRATION_TIME) || defaultExpirationTime,
};
type AppData = typeof currentAppData;
const appDataOperator = {
  ...currentAppData,
  setStrengthFilter: async (tf: Strength[]) => {},
}

const AppDataContext = React.createContext(appDataOperator);

export class AppDataProvider extends React.PureComponent<{}, AppData> {
  state: Readonly<AppData> = currentAppData;

  setStrengthFilter = async (tf: Strength[]) => {
    this.setState({ strengthFilter: tf })
  }

  render() {
    const value = {
      ...this.state,
      setStrengthFilter: this.setStrengthFilter,
    };
    return (<AppDataContext.Provider value={value}>{this.props.children}</AppDataContext.Provider>);
  }
}

export function useAppData(){
  const appData = useContext(AppDataContext);
  // return (appData as any).resp as AppData
  return appData
}

// export const AppDataConsumer = AppDataContext.Consumer;