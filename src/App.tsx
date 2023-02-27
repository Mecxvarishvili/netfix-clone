import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import page from './pages/page';
import BrowsePage from './pages/BrowsePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path={page.HOME} element={<HomePage/>}/>
        <Route path={page.BROWSE} element={<BrowsePage/>}/>
        <Route path={page.LOGIN} element={<LogInPage/>}/>
        <Route path={page.SIGNUP} element={<SignUpPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
