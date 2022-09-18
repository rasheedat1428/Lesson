
import './App.css';
import Name, {addition, subtraction, division} from "./Components/Name";
import Result, {Grade} from './Components/Result';
import Destructuring from './Components/Destructuring';
import EventComponents, {EventComponent1, EventComponent2, EventComponent3, EventComponent4, EventComponent5} from './Components/EventComponents';

function App() { 
  return (
    <div>
      <EventComponents />
      <EventComponent1 name={"Rash"} />
      <EventComponent2 name={"Lat"} />
      <EventComponent3 />
      <EventComponent4 a={1} />
      <EventComponent5 arr={[1, 3, 4]}/> 
      <Destructuring/> 
      <Name/>
      <Result name = {"Rasheedat"} score = {70}/>
      <Result name = {"Rash"} score = {47}/>
      <Result name = {"Rasheed"} score = {57}/>
      
      
    
    </div>
  );
}

export default App;
