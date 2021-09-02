import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppHeader from './App.Header';
import WaterTankInputs from './WaterTank.Inputs';
import reportWebVitals from './reportWebVitals';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import StoreContext from './+state/water.tankerprovider.context'
import { initialState , reducer, Screen } from './+state/water.tanker.reducer'
import { ProviderStateInterface } from './+state/water.tankerprovider.context';
import { Box } from "@material-ui/core";
import WaterTankerMessages from './Components/Notifications';

const AppContainer = () => {

  const [state, dispatch] = React.useReducer(reducer, initialState);
  
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

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
        <AppContainer />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
