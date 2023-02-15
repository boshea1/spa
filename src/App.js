import './App.css';
import Container from './components/Container';
import Header from './components/Header'

import { loremIpsum } from 'lorem-ipsum';


function App() {
  const a = loremIpsum({count:5})
  return (
    <div className="App">
      <Header/>
      <Container words={a} font='black' styler='shimmer' id='first'/>
      
      <Container words={a} styler='containers shimmer' id='second'/>
       
      <Container words={a} styler='shimmer' id='third'/>
       
      <Container words={a} styler='containers' id='forth'/>
       
      <Container words={a} styler='shimmer' id='fifth'/>
    </div>
  );
}

export default App;
