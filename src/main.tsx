import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './componants/Layout.tsx'
import './index.css'
import App from './App.tsx'
import Categorie from './componants/Page/Categorie.tsx'
import ByCatg from './componants/Page/ByCatg.tsx'
import Contact from "./componants/Page/Contact.tsx"
import Product from './componants/Page/Product.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<App />} />
        <Route path="categorie" element={<Categorie />}>
          <Route path=":categId" element={<ByCatg />} />
        </Route>
        <Route path="contact" element={<Contact />}/>
        <Route path="product" element={<Product />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
