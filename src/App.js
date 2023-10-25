
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Nav';
import About from './component/About';
import What from './component/What'
import Cryptostraps from './component/Cryptostraps';
import Team from './component/Team';
import Faq from './component/Faq';
import Solana from './component/Solana';




function App() {
  return (
    <>
      <Nav />
      <About />
     <What />
     <Cryptostraps />
      <Team /> 
      <Faq/>
      <Solana /> 
      </>
  );
}

export default App;
