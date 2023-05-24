
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
// import RootLayout from './root.js';

import DonorRegistration from './Components/Donor/DonorRegistration';
import ReceiverRegistration from './Components/Receiver/ReceiverRegistration';
import ReceiverLogin from './Components/Receiver/ReceiverLogin';
import LandingPage from './Components/Home';
import AdminLogin from './Components/Admin/Admin';
import Receiver from './Components/Receiver/Receiver';
import Donor from './Components/Donor/Donor';
import Donate from './Components/Donor/Donate';
import { Donorhistory } from './Components/Donor/Donorhistory';
import Request from './Components/Receiver/Request';
import { Receiverhistory } from './Components/Receiver/Receiverhistory';
import { Stock } from './Components/Stock/StockDetails';

import Dashboard from './Components/Admin/Dashboard';
import Person from './Components/Person/Person';
import { Personhistory } from './Components/Person/Personhistory';

import DonorSearch from './Components/Donor/DonorSearch';
import ReceiverSearch from './Components/Receiver/ReceiverSearch';
import PersonSearch from './Components/Person/SearchPerson';

import { DDonor } from './Components/Admin/DDonor';
import DonorLogin from './Components/Donor/DonorLogin';
import { DReceiver } from './Components/Admin/DReceiver';
import AddStock from './Components/Stock/AddStock';




const router=createBrowserRouter([
  {
    // path:'/',element:<RootLayout/>,
    children:[
      {path:'/DonorRegistration',element:<DonorRegistration/>},
   {path:'/DonorLogin',element:<DonorLogin/>},
    {path:'/ReceiverRegistration',element:<ReceiverRegistration/>},
    {path:'/ReceiverLogin',element:<ReceiverLogin/>},
    {path:'/',element:<LandingPage/>},
    {path:'/Admin',element:<AdminLogin/>},
    {path:'/Dashboard',element:<Dashboard/>},
    {path:'/Donor',element:<Donor/>},
     {path:'/Donate',element:<Donate/>},
     {path:'/DonorHistory',element:<Donorhistory/>},
     {path:'/DonorSearch',element:<DonorSearch/>},
     {path:'/DDonor',element:<DDonor/>},

    {path:'/Receiver',element:<Receiver/>},
    {path:'/Request',element:<Request/>},
    {path:'/Receiverhistory',element:<Receiverhistory/>},
    {path:'/ReceiverSearch',element:<ReceiverSearch/>},
    {path:'/DReceiver',element:<DReceiver/>},

    {path:'/Stock',element:<Stock/>},
    {path:'/AddStock',element:<AddStock/>},
    {path:'/Person',element:<Person/>},
    {path:'/Personhistory',element:<Personhistory/>},
    {path:'/PersonSearch',element:<PersonSearch/>}

    ]
  }
])
function App() {
  return (
    <main>
      <header>

        <RouterProvider router={router}/>
        </header>
    </main>
  );
}

export default App;
