import About from "../pages/about";
import Home from "../pages/home";
import Portfolio from "../pages/portfolio";
import { Services } from "../pages/service";
import Contact from "../pages/contact";
import { ROUTE_CONSTANT } from "../utils/RouteConstant";

export const APP_ROUTES = [
    {
        path: ROUTE_CONSTANT.HOME,
        element: <Home />,
    },
    {
        path: ROUTE_CONSTANT.ABOUT,
        element: <About />,
    },
    {
        path: ROUTE_CONSTANT.PORTFOLIO,
        element: <Portfolio />,
    },
    {
        path: ROUTE_CONSTANT.SERVICES,
        element: <Services />,
    },
    {
        path: ROUTE_CONSTANT.CONTACT,
        element: <Contact />,
    }
]