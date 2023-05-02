import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import appPages from './appPages';
import Person from './features/person/Person';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./features/home/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: `${appPages.person}/:id`,
    element: <Person />,
  },
]);

function App() {
  return (
    <div>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </div>
  );
}

export default App;
