import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { WaterTankerContainer } from './WaterTanker.Container';
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
        <WaterTankerContainer />
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);