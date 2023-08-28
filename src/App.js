import * as React from 'react';
import FetchData from './FetchData'
import CurrencyData from './CurrencyData'
import LanguageData from './LanguageData'
import CapitalData from './CapitalData'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavLinks from './NavLinks';







const router = createBrowserRouter([
  {
    path: "/",
    element:<NavLinks/>,
    errorElement: "page not found",
    children:[
      {
        index: true,
        element:<FetchData/>

      },
      {
        path: "#",
        element:<h1>PAGE NOT FOUND PLEASE RELOAD</h1>
      },
      {
        path: "/Currency",
        element:<CurrencyData/>,
        errorElement: "page not found"
      },
      {
        path: "/Language",
        element:<LanguageData/>,
        errorElement: "page not found"
      },
      {
        path: "/Capital",
        element:<CapitalData/>,
        errorElement: "page not found"
      },  
    ]
  },
  
])
function App () {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
};

export default App;
