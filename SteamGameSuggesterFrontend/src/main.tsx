import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import { store } from './redux/store.tsx'
import { BrowserRouter } from 'react-router-dom';
import App1 from './components/App1.tsx';

createRoot(document.getElementById('root')!).render(
  <>
  <BrowserRouter>
  <Provider store={store}>
      <App1 />
    </Provider>
    </BrowserRouter>
  </>
)
