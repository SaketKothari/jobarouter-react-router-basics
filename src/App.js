import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Careers, { careersLoader } from './pages/careers/Careers';

// layout
import RootLayout from './layout/RootLayout';
import HelpLayout from './layout/HelpLayout';
import CareersLayout from './layout/CareersLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* Here index is path="/" */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/* Nested Route */}
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        {/* Before we render the Career component it's gonna render carrersLoader function */}
        <Route index element={<Careers />} loader={careersLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
