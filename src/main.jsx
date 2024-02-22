import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider,} from "react-router-dom";

import Root from './routes/Root.jsx';
import AlejandroTestPage from './routes/AlejandroTestPage.jsx';
import AshtonTestPage from './routes/AshtonTestPage.jsx';
import JaskiratTestPage from './routes/JaskiratTestPage.jsx';
import MartynsTestPage from './routes/MartynsTestPage.jsx';
import MilesTestPage from './routes/MilesTestPage.jsx';
import ChristianTestPage from './routes/ChristianTestPage.jsx';
import ElizabethTestPage from './routes/ElizabethTestPage.jsx';
import CarlTestPage from './routes/CarlTestPage.jsx';


// import ErrorPage from "./error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
  },
  {
    path: "alejandro-test-page",
    element: <AlejandroTestPage></AlejandroTestPage>
  },
  {
    path: "ashton-test-page",
    element:<AshtonTestPage></AshtonTestPage>
  },

  {
    path: "jaskirat-test-page",
    element: <JaskiratTestPage></JaskiratTestPage>

  }
  ,
  {
    path: "martyns-test-page",
    element: <MartynsTestPage></MartynsTestPage>
    
  },
  {
    path: "miles-test-page",
    element: <MilesTestPage></MilesTestPage>
    
  },
  {
    path: "christian-test-page",
    element: <ChristianTestPage></ChristianTestPage>
  },
  { 
    path: "elizabeth-test-page",
    element: <ElizabethTestPage></ElizabethTestPage>
  },
  { 
    path: "carl-test-page",
    element: <CarlTestPage></CarlTestPage>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
