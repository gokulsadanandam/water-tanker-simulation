import React from 'react';
import {WaterTankerState} from './water.tanker.reducer';

export interface ProviderStateInterface {
  state: WaterTankerState;
  dispatch: React.Dispatch<{
      type: string;
      payload?: any;
  }>;
}

const StoreContext = React.createContext<ProviderStateInterface>({} as ProviderStateInterface);

export function useStoreContext() {
  return React.useContext<ProviderStateInterface>(StoreContext);
}

export default StoreContext;