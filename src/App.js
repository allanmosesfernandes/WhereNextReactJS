import './App.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import SearchCourse from './components/search-course/SearchCourse';
import {Routes, Route} from 'react-router-dom'
import Auth from './routes/authentication/Auth';
import News from './components/news/News';
import SearchUniversity from './components/search-university/SearchUniversity';
import CourseDetails from './components/course/CourseDetails';
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
        <Route path='discover'element={<SearchCourse />} />
        <Route path='news'element={<News />} />
        <Route path='auth'element={<Auth />} />
        <Route path='discover/computer-science'element={<SearchUniversity />} />
        <Route path='discover/computer-science/course-details' element={<CourseDetails />} />
        {/* <Route path='discover/computer-science' element={<SearchUniversity />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
