
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path : '/', element : <Main></Main>, children : [
        {
          path : '/' ,
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
           element : <Home></Home>
        },
        {
          path : 'home',
          loader : () => fetch('https://openapi.programming-hero.com/api/quiz'),
           element : <Home></Home>
        }
      ]
    }

  ])
  return (
    <div>
   
   <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
