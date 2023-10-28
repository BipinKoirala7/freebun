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
      <main className='p-2 bg-black h-screen w-screen text-white'>
        <div className='text-white rounded-xl p-2 w-[100%] h-[100%]'>
          <Outlet/>
        </div>
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
