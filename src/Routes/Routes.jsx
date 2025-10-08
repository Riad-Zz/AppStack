import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from '../Pages/Root/Root'
import Home from '../Pages/Home/Home'
import AllApps from '../Pages/AllApps/AllApps'
import AppDetails from '../Components/AppDetails/AppDetails'
import InstalleApps from '../Pages/InstalledApps/InstalleApps'


export const router = createBrowserRouter([
  {
    path : '/' ,
    Component : Root ,
    loader :()=>fetch('/allApps.json'), //Fake one for loading animation 
    children : [
      {index : true , loader :()=>fetch('/allApps.json'),Component : Home} , // A non used Loader for loading Animations ! 
      {path :'app' , loader :()=>fetch('/allApps.json') ,Component : AllApps},
      {path : 'details/:title' ,loader :()=>fetch('/allApps.json') , Component : AppDetails},
      {path : 'installed' , loader :()=>fetch('/allApps.json'),Component:InstalleApps}
    ]
  }
])

