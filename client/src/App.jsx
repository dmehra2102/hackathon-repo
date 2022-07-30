import './App.css';
// import { ConnectMentors } from './Components/ConnectMentors/ConnectMentors';
import { Navbar } from './Components/Navbar/Navbar';
import { MainRoutes } from './Pages/MainRoutes';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <MainRoutes/>
       {/* <ConnectMentors/> */}
    </div>
  );
}

export default App;
