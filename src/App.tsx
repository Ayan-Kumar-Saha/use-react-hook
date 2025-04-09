import './App.css'
import AppLayout from './AppLayout';
import { BrowserRouter, Route, Routes } from "react-router";
import { NAV_LINKS } from './constants/nav-links';
import { INavLink } from './interfaces/nav-link';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route element={<AppLayout />}>
          {
            NAV_LINKS.map(({ path, element: Page }: INavLink) => (
              <Route path={path} element={<Page />} />
            ))
          }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
