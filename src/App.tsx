import { FilterLead } from './components/FilterLead';
import { Header } from './components/Header';
import ListLead from './components/ListLead';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Header />
      <FilterLead />
      <ListLead />
    </>
  );
}

export default App;
