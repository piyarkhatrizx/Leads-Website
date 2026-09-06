import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = <StrictMode><App /></StrictMode>

// firstElementChild, not hasChildNodes: the <!--ssr-outlet--> comment is a child node
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
