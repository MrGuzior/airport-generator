import './App.css';
import Runway from '../Runway/Runway'
import parser from '../../Utilities/parser'

const App = () => {
  console.log(parser())
  return (
    <Runway />
  );
}

export default App;
