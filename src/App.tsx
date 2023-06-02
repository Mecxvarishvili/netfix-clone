import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import page from './pages/page';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/search/SearchPage';
import MainFooter from './pages/browse/MainFooter';
import BrowseRoutes from './pages/browse/BrowseRoutes';
import MainHeader from './layout/header/MainHeader';
import MoviePreview from "./layout/preview/MoviePreview";


function App() {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path={page.HOME} element={<HomePage/>}/>
        <Route path={page.BROWSE + "/*"} element={<BrowseRoutes/>}/>
        <Route path={page.SEARCH} element={<SearchPage/>}/>
        <Route path={page.LOGIN} element={<LogInPage/>}/>
        <Route path={page.SIGNUP} element={<SignUpPage/>}/>
      </Routes>
      {/* <MoviePreview /> */} cont appear when choosing profile
      <MainFooter />
    </Router>
  );
}

export default App;
