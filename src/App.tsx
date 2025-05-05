import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import LandingPage from './pages/LandingPage';
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './pages/SuccessPage';

const GlobalStyle = createGlobalStyle`
  :root {
    --netflix-red: #E50914;
    --netflix-black: #141414;
    --netflix-dark: #181818;
    --netflix-gray: #808080;
    --netflix-white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body {
    background-color: var(--netflix-black);
    color: var(--netflix-white);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/*" element={<LandingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
