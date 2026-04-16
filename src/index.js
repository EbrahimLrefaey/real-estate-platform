import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter,RouterProvider,} from "react-router";
import { AllData } from './Data/AllData';
import ScrollToTop from "react-scroll-to-top";
import AllProperties from './Properties/AllProperties';
import AllDetails from './Details/AllDetails';
import AllContact from './Contact/AllContact';
import AllProduct from './Products/AllProduct';
import AllSingleProduct from './SingleProduct/AllSingleProduct'; 
import AllCart from './Cart/AllCart';


let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "properties",
    element: <AllProperties/>,
  },
  {
    path: "details",
    element: <AllDetails/>,
  },
  {
    path: "contact",
    element: <AllContact/>,
  },
  {
    path: "products",
    element: <AllProduct/>,
  },
  {
    path: "singleProduct/:id",
    element: <AllSingleProduct/>,
  },
  {
    path: "cart",
    element: <AllCart/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AllData>
          <ScrollToTop smooth />
    <RouterProvider router={router} />,
  </AllData>
);

