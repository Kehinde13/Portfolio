import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
import ElevatorPitch from './pages/ElevatorPitch';
import Blog from './pages/Blog';

function App() {
  return (
    <>
      <Navbar />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/elevator-pitch" element={<ElevatorPitch />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
