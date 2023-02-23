import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import GlobalContextProvider from 'context/GlobalContext';
import Home from 'pages/Home/Home';
import TeamOverview from './pages/TeamOverview/TeamOverview';

const App = () => {
    var router = createBrowserRouter([
        {
            path: '*',
            element: <Home />,
        },
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/teamOverview',
            element: <TeamOverview />,
        },
    ]);

    return (
        <GlobalContextProvider>
            <RouterProvider router={router} />
        </GlobalContextProvider>
    );
};

export default App;
