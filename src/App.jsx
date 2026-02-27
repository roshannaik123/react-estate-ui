

import HomePage from "./pages/Homepage/HomePage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ListPage from "./pages/ItemPage/ListPage";
import Layout from "./pages/Layout/Layout";
import SinglePage from "./pages/SinglePage/SinglePage";
import Login from "./pages/Login/Login";
function App() {
const router=createBrowserRouter([
  {
    path:"/",
element:<Layout/>,
children:[
  {
    path:"/",
    element:<HomePage/>
  },
  {
path:"/singlePage",
element:<SinglePage/>
  },
  {
  path:"/login",
  element:<Login/>
},
  {
path:"/list",
element:<ListPage/>
  },
  {
    path:"/:id",
    element:<SinglePage/>
  }
]
  },
]);


  return (
    // <div className="layout">
    //   <div className="navbar">
    // <Navbar/>
    //    </div>
    // <div className="content">
    // <HomePage/>
 
    // </div>
    // </div>
    <RouterProvider router={router}/>
  )
}

export default App