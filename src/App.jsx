import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import EthnicDebate from './pages/EthnicDebate';
import EthnicMap from './pages/EthnicMap';
import Quiz from './pages/Quiz';
import Chatbot from './pages/Chatbot';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ChapterHub from './pages/chapters/ChapterHub';
import Chapter1 from './pages/chapters/Chapter1';
import Chapter2 from './pages/chapters/Chapter2';
import Chapter3 from './pages/chapters/Chapter3';
import Chapter4 from './pages/chapters/Chapter4';
import CompletionScreen from './pages/chapters/CompletionScreen';
import { ROUTES } from './utils/constants';

function App() {
  return (
    <Router basename="/mln131/">
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ETHNIC_CONCEPT} element={<ChapterHub />} />
          <Route path={ROUTES.CHAPTER_1} element={<Chapter1 />} />
          <Route path={ROUTES.CHAPTER_2} element={<Chapter2 />} />
          <Route path={ROUTES.CHAPTER_3} element={<Chapter3 />} />
          <Route path={ROUTES.CHAPTER_4} element={<Chapter4 />} />
          <Route path={ROUTES.COMPLETION} element={<CompletionScreen />} />
          <Route path={ROUTES.ETHNIC_DEBATE} element={<EthnicDebate />} />
          <Route path={ROUTES.ETHNIC_MAP} element={<EthnicMap />} />
          <Route path={ROUTES.QUIZ} element={<Quiz />} />
          <Route path={ROUTES.CHATBOT} element={<Chatbot />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;