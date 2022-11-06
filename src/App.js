
import './App.css';


import { MenuProvider } from './Components/context/MenuProvider';
import { ConfigProvider } from './Components/context/ConfigProvider';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';





function App() {

  return (

    <div className="App">
      <MenuProvider>
        <ConfigProvider>

          <Header />

          <Main />
          
        </ConfigProvider>
      </MenuProvider>
    </div>

  );
}

export default App;
