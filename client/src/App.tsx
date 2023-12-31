import './App.css'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Game from './components/pages/Game/game'
import Home from './components/pages/Home/home'
import Register from './components/pages/auth/log/register'
import SignIn from './components/pages/auth/log/signIn'
import Dashboard from './components/pages/Dashboard/Dashboard'
import Notification from './components/pages/Notification/Notification'
import Account from './components/pages/Dashboard/Account/Account'
import Overview from './components/pages/Dashboard/overview/Overview'
import Games from './components/pages/Dashboard/Games/Games'

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
        path: 'user/:user_id/game/:game_id',
        element:<Game />
      }, 
      {
        path: '/auth/register',
        element:<Register />
      },
      {
        path: '/auth/sign-in',
        element:<SignIn />
      },
      {
        path: '/user/:user_id/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/user/:user_id/dashboard',
            element: <Overview />
          },
          {
            path: '/user/:user_id/dashboard/games',
            element:<Games />
          },
          {
            path: '/user/:user_id/dashboard/account',
            element:<Account />
          }
        ]
      }
    ]
  }])

  function Root(): JSX.Element{
    return (
      <main className=' bg-primary-background font-secondary min-h-screen max-w-screen w-screen h-screen max-w-screen text-primary'>
        <Notification />
        <Outlet />
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
