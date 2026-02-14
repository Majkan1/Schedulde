import {Routes,Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage.tsx'
import {BuilderPage} from './pages/BuilderPage.tsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/builder" element={<BuilderPage />} />
    </Routes>
  );
}