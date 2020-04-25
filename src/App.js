import React from 'react';
import useGlobal from './store'
import * as Styled from './styles/App.styles';
import { Splash } from './components/Splash'
import { Game } from './components/Game'

function App() {
  const [globalState, globalActions] = useGlobal();

  return (
    <Styled.App>
      {
        globalState.name && globalState.rules ? null : <Splash />
      }
      {
        globalState.rules && globalState.name ? <Styled.Game><Game actions={globalActions} /> </Styled.Game> : null
      }
    </Styled.App>
  );
}

export default App;
