import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root, 
    errorElement:<ErrorPage></ErrorPage>,  
    children:[
      {
        index:true,
        
        path:"/",
        loader:() =>fetch('book-data.json'),
        Component: Home,
      },
      {
        path:"/about",
        Component: About
      },
      {
        path:"/readList",
        loader:() =>fetch('book-data.json'),
        Component:ReadList
      },
      {
        path:'/bookDetails/:id',
        loader:() =>fetch('book-data.json'),
        Component:BookDetails
      }
    ]
  },

]);