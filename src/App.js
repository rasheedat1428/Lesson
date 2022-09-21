
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import HomePage from './Pages/HomePage';
import Layout from './Pages/Layout';
import PageNotFound from './Pages/PageNotFound';
//import Name, {addition, subtraction, division} from "./Components/Name";
//import Result, {Grade} from './Components/Result';
//import Destructuring from './Components/Destructuring';
//import EventComponents, {EventComponent1, EventComponent2, EventComponent3, EventComponent4, EventComponent5} from './Components/EventComponents';

function App() { 
  return (
    <div>
     <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="" element={<HomePage/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="contact" element={<ContactUs/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      </Layout>
      </BrowserRouter>
  
      { /*<EventComponents />
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
  */}
    </div>
  );
};

export default App;
