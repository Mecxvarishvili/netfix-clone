import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import page from './pages/page';
import BrowsePage from './pages/browse/BrowsePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import MainHeader from './layout/header/MainHeader';
import SearchPage from './pages/SearchPage';
import MainFooter from './pages/browse/MainFooter';


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
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
