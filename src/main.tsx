import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Home from './pages/Home'
import Story from './pages/Story'
import Quality from './pages/Quality'
import Products from './pages/Products'
import Global from './pages/Global'
import Official from './pages/Official'

const pages = { home: Home, story: Story, quality: Quality, products: Products, global: Global, official: Official }
const root = document.getElementById('root')!
const Page = pages[(root.dataset.page as keyof typeof pages) ?? 'home'] ?? Home

createRoot(root).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
