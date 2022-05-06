import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Weather from './Components/Weather';
import Header from './Components/Header';
import Calculator from './Components/Calculator';
import Join from './Components/join/Join';
import Chat from './Components/chat/Chat';



// const ENDPOINT='http://localhost:4500/';
// const socket= socketIO(ENDPOINT,{transports:['websocket']})
function App() {
  
  return (
    <div className="App">
     <Router>
       <Header/>
       <main>
         <section>
           <Routes>
             <Route exact path='/'  element={<Weather/>} />
             <Route exact path='/calculator'  element={<Calculator/>} />
             <Route exact path='/Join'  element={<Join/>} />
             <Route exact path='/chat'  element={<Chat/>} />
           </Routes>
         </section>
       </main>
     </Router>
    </div>
  );
}

export default App;
