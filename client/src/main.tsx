import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import userStore from './data/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={userStore}>
      <App />
    </Provider>
)
