import React from 'react';
import Home from './view/Home'
import Footer from './components/footer';
// import CssBaseline from '@material-ui/core/CssBaseline';

const App: React.FC = () => {
  return (
    <>
      {/* <CssBaseline /> */}
      <Home/>
      <Footer/>
    </>
  );
}

export default App;