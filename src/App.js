import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

//Import components
import Header from './Components/Header';
import Home from './Components/Home';
import Help from './Components/Help';
import MainGame from './Components/MainGame';


/*I used multiple github repositories as well as videos and google to help me with this project. Most sources had the same basic structure,
 but the way they impimented the functions etc. was a bit confusing. I did my best to re-create this in a way that made sense to me and that met all the task requirments
 
 Helpfull links:
 https://codeburst.io/learning-react-js-by-building-a-minesweeper-game-ced9d41560ed
 https://iq.opengenus.org/minesweeper-game-in-react-js/
 https://codesandbox.io/s/yin56?file=/src/components/Board/index.js
 */


function App() {
  return (
    <div className="App">   
      <BrowserRouter>
            <Header />

            <Routes> 
              <Route exact={true} path="/" element={<Home />} />
              <Route path="/MainGame" element={<MainGame />} />
              <Route path="/Help" element={<Help />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
