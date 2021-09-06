import { useReducer } from 'react';
import App from './App';
import AppHeader from './App.Header';
import WaterTankInputs from './WaterTank.Inputs';
import StoreContext from './+state/water.tankerprovider.context'
import { initialState , reducer, Screen } from './+state/water.tanker.reducer'
import { ProviderStateInterface } from './+state/water.tankerprovider.context';
import { Box } from "@material-ui/core";
import WaterTankerMessages from './Components/Notifications';

export const WaterTankerContainer = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const providerState: ProviderStateInterface = {
    state,
    dispatch
  }
  return(
    <StoreContext.Provider value={providerState}>
      <Box>
        <AppHeader/>
        <WaterTankerMessages/>
        <Box mb={3} />
        { state.screen === Screen.INPUT_SCREEN ? <WaterTankInputs/> : <App/> }
      </Box>
    </StoreContext.Provider>
  )
}

