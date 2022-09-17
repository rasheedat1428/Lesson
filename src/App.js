import logo from './logo.svg';
import './App.css';
import Name, {addition, subtraction, division} from "./Components/Name";
import Result, {Grade} from './Components/Result';
import Destructuring from './Components/Destructuring';

function App() {
  return (
    <div>
      <Destructuring/> 
      <Name/>
      <Result name = {"Rasheedat"} score = {70}/>
      <Result name = {"Rash"} score = {47}/>
      <Result name = {"Rasheed"} score = {57}/>
    
    </div>
  );
}

export default App;
