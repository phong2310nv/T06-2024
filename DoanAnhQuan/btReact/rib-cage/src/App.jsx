import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import Contact from './components/Contact';
import Content from './components/Content';

function App() {
  return (
   <div className='main'>
     <Navbar className = 'navbar' />
     <Slidebar className = 'slidebar' />
     <Contact className = 'contact'/>
     <Content className = 'content'/>
   </div>
   
  );
}

export default App;
