import './App.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import {Routes, Route} from 'react-router-dom'
import Auth from './routes/authentication/Auth';
import News from './components/news/News';
function App() {


  const About = () => {
    return(
      <h2>Loda Lasson</h2>
    )
  }
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index={true} element={<Hero />} />
        <Route path='about'element={<About />} />
        <Route path='news'element={<News />} />
        <Route path='auth'element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
