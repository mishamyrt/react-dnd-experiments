import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'

import './styles.scss'

const root = document.getElementById('root')

if (!root) {
  throw new Error('root node is not found')
}

ReactDOM.createRoot(root).render(<App />)
