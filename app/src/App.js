import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Button from './components/Button';
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <Nav/>
    <div className='sectionOne'> 
    <Content/>
      <Button/>
    </div>
    <div className='sectionTwo'>
    <Cards/>
    </div>
      
      
    </div>
  );
}

export default App;
