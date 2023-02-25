import logo from './logo.svg';
import './App.css';
import Appbar from './Components/Appbar/Appbar'
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Searchskill from './Components/Banner/Searchskill';
import Ecosystem from './Components/Banner/Ecosystem';
import Newtech from './Components/Banner/Newtech';
import Solutions from './Components/Banner/Solutions';
import TechPlatforms from './Components/Banner/TechPlatforms';
// import { Tabs } from '@mui/material';
function App() {
  return (
    <div className="App">
      <Appbar />
      <Banner />
      <Skills />
      <Searchskill />
      <Ecosystem />
      <Newtech />
      <Solutions />
      <TechPlatforms />

    </div>
  );
}

export default App;
