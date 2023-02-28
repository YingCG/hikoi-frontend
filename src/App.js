import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import HomePage from './pages/HomePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/about' element={ <AboutPage/>}/>
        <Route path='/articles' element={ <ArticlesListPage/>}/>
        <Route path='/articles/:articleName' element={ <ArticlePage/>}/>
        <Route path='/login' element={ <LoginPage/>}/>
        <Route path='/register' element={ <Register/>}/>
        <Route path='*' element={ <NotFoundPage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
