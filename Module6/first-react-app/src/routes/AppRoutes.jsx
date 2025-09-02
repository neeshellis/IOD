// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
// function AppRoutes(props) {
// return (

import AboutPage from "../pages/AboutPage";
import Homepage from "../pages/Homepage";
import DashboardPage, { DashboardMessages, DashboardTasks } from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
import { Routes, Route } from "react-router-dom";
import PostsPage, { Post, PostList } from "../pages/PostsPage";
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "../components/LoginForm";
import CustomCard from "../components/CustomCard.jsx";
import BasicGrid from "../components/BasicGrid.jsx";
import MUIForm from "../components/MuiForm.jsx";


function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />

// update AppRoutes.jsx to protect the Dashboard
<Route path="dash" element={<ProtectedRoute>
<DashboardPage {...props} /></ProtectedRoute>}>
<Route path="messages" element={<DashboardMessages />} />
<Route path="tasks" element={<DashboardTasks />} />
</Route>
<Route path="login" element={<LoginForm/>} />


      {/* <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route> */}

      <Route path="/about" element={<AboutPage {...props} />} />

      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path='/card' element={<CustomCard/> }/>
       <Route path='/grid' element={<BasicGrid/> }/>
       <Route path='/form' element={<MUIForm/> }/>
      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
}
export default AppRoutes;

// Name this file AppRoutes.jsx and store in new folder 'routes'

// Name this file AppRoutes.jsx and store in new folder 'routes'


// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import HomePage from '../pages/HomePage'
// import PostPage from '../pages/PostPage'


// export default function AppRoutes() {
//     return (
//         <Routes>
//             <Route path='/black' element={<HomePage/>}/>
//             <Route path='/red' element={<PostPage/>}/>
//             </Routes>
//             )
// }