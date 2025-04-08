import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

// Lazy loaded components
const Home = lazy(() => import('./components/Home'));
const Header = lazy(() => import('./components/Header'));
const Error = lazy(() => import('./components/Error'));
const Cart = lazy(() => import('./components/Cart'));
const ProductList = lazy(() => import('./components/ProductList'));
const ProductItem = lazy(() => import('./components/ProductItem'));
const ProductDetails = lazy(() => import('./components/ProductDetails'));
const Footer = lazy(() => import('./components/Footer'));
const CartItem = lazy(() => import('./components/CartItem'));

// wrapper to reduce code repetition
const withLayout = (MainComponent) => (
  <>
    <Suspense fallback={<div>Loading Header...</div>}>
      <Header />
    </Suspense>
    <Suspense fallback={<div>Loading Page...</div>}>
      <MainComponent />
    </Suspense>
    <Suspense fallback={<div>Loading Footer...</div>}>
      <Footer />
    </Suspense>
  </>
);

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: withLayout(() => (
        <>
          <Home />
          <ProductList />
        </>
      )),
    },
    {
      path: '/products',
      element: withLayout(ProductList),
    },
    {
      path: '/cart',
      element: withLayout(Cart),
    },
    {
      path: '/product/:id',
      element: withLayout(ProductItem),
    },
    {
      path: '/product/details/:id',
      element: withLayout(ProductDetails),
    },
    {
      path: '/cart/item/:id',
      element: withLayout(CartItem),
    },
    {
      path: '*',
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Error />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
