import React from 'react';

import {
  createBrowserRouter,
} from "react-router";
import Error from '../Pages/Error/Error';
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
      {
        index:true,
        path:"/",
        Component:Home,
        loader: async () => await (await fetch('/booksData.json')).json()


      }
    ]
  },
]);
