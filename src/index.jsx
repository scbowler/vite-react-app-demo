import ReactDOM from 'react-dom/client'
import App from './components/app'

if (import.meta.hot) {
  import.meta.hot.accept()
  import.meta.hot.dispose(() => root.unmount())
}

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)

root.render(<App />)
