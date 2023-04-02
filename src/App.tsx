import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import page from './pages/page';
import BrowsePage from './pages/browse/BrowsePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import MainHeader from './layout/header/MainHeader';
import SearchPage from './pages/search/SearchPage';
import MainFooter from './pages/browse/MainFooter';
import MoviePreview from './layout/preview/MoviePreview';
import PersonLayout from './layout/person/PersonLayout';


function App() {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path={page.HOME} element={<HomePage/>}/>
        <Route path={page.BROWSE} element={<BrowsePage/>}/>
        <Route path={page.GENRE} element={<BrowsePage/>}/>
        <Route path={page.SEARCH} element={<SearchPage/>}/>
        <Route path={page.LOGIN} element={<LogInPage/>}/>
        <Route path={page.SIGNUP} element={<SignUpPage/>}/>
        <Route path={page.PERSON} element={<PersonLayout/>}/>
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
