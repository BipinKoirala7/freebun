import './App.css'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Game from './components/game/game'
import Home from './components/pages/Home/home'
// import Logobar from './components/Navbar/logobar'

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element:<Home />
      },
      {
        path: '/game',
        element:<Game />
      }
    ]
  }])

  function Root(): JSX.Element{
    return (
      <main className='bg-black min-h-screen w-screen max-w-screen text-white p-2'>
          <Outlet/>
      </main>

    )
  }

  return (
    <> 
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
