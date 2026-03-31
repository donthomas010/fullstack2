import {createRoot} from 'react-dom/client'
import App from './App'
import data from './data'


const root = createRoot(document.getElementById("root"))

root.render(<>
  <App />
  </>)