import './App.css';
import Home from './components/home';
import Footer from './components/layout/footer';
import Header from './components/layout/header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
