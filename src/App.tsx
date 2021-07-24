import React from 'react';
import Routes from './routes';
import Footer from './components/footer';
// import CssBaseline from '@material-ui/core/CssBaseline';

const App: React.FC = () => {
  return (
    <>
      {/* <CssBaseline /> */}
      <Routes />
      <Footer/>
    </>
  );
}

export default App;