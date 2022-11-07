import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CustomProvider } from 'rsuite';
import AppRouter from '../appRouter/appRouter.component';
import Cookies from 'js-cookie';

function App() {
  const theme = useSelector((state: any) => state.app.theme);

  return (
    <>
      <CustomProvider theme={theme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </CustomProvider>
    </>
  );
}

export default App;
