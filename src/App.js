import './App.css';
import {
  createBrowserRouter, RouterProvider,
 
} from "react-router-dom";
import Signup from "./components/Signup";
import Main from './components/layouts/Main';
import Signin from './components/Signin';
const router = createBrowserRouter([
  {path:"/",
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element:<Signup></Signup>
    },
    {
      path: '/register',
      element:<Signup></Signup>
    },
    {
      path: '/login',
      element:<Signin></Signin>
    },
  ]
},
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
