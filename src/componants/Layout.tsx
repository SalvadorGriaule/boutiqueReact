import React from 'react';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div>
      <header className='flex justify-between'>
        <h1>LaBoutique</h1>
        <nav>
          <ul className='flex space-x-2'>
            <li><a href="/">Accueil</a></li>
            <li><a href="/product">Produit</a></li>
            <li><a href="/categorie">Catégorie</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;