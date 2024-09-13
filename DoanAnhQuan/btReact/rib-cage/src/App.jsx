import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import Contact from './components/Contact';
import Content from './components/Content';
import Calculator from './calculator/Calculator';
import Form_main from './form/Form_main';


function App() {
  return (
   <div className='main'>
     {/* <Navbar className = 'navbar' />
     <Slidebar className = 'slidebar' />
     <Contact className = 'contact'/>
     <Content className = 'content'/> */}
     {/* <Form /> */}
     {/* <Calculator /> */}
     <Form_main />
   </div>
   
  );
}

export default App;
