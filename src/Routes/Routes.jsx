import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root, 
    errorElement:<ErrorPage></ErrorPage>,  
    children:[
      {
        index:true,
        loader:() =>fetch('book-data.json'),
        path:"/",
        Component: Home,
      },
      {
        path:"/about",
        Component: About
      },
      {
        path:'/bookDetails/:id',
        Component:BookDetails,
      }
    ]
  },

]);