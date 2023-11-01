import './App.css'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Game from './components/pages/Game/Playground/game'
import Home from './components/pages/Home/home'
import Register from './components/pages/auth/log/register'
import SignIn from './components/pages/auth/log/signIn'

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
      }, 
      {
        path: '/auth/register',
        element:<Register />
      },
      {
        path: '/auth/sign-in',
        element:<SignIn />
      }
    ]
  }])

  function Root(): JSX.Element{
    return (
      <main className='bg-primary-background font-secondary min-h-screen max-w-screen w-screen h-screen max-w-screen text-white'>
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
