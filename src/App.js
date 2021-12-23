import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';

import AboutLink from './components/AboutLink';
import FeedbackList from './components/FeebackList';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>

        <AboutLink />
      </div>
    </FeedbackProvider>
  );
}

export default App;
