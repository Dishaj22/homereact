// import {
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   Navigate
// } from "react-router-dom";

// function DashboardLayout() {
//   return (
//     <div>
//       <aside>
//         <h2>Dashboard</h2>

//         <Link to="/dashboard">
//           Home
//         </Link>

//         <br />

//         <Link to="/dashboard/settings">
//           Settings
//         </Link>

//         <br />

//         <Link to="/dashboard/analytics">
//           Analytics
//         </Link>
//       </aside>

//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

// function DashboardHome() {
//   return <h1>Dashboard Home</h1>;
// }

// function Settings() {
//   return <h1>Settings</h1>;
// }

// function Analytics() {
//   return <h1>Analytics</h1>;
// }

// function App() {
//   return (
//     <Routes>

//       {/* / open karne par dashboard par jayega */}
//       <Route
//         path="/"
//         element={<Navigate to="/dashboard" />}
//       />

//       {/* Dashboard Layout */}
//       <Route
//         path="/dashboard"
//         element={<DashboardLayout />}
//       >

//         {/* /dashboard */}
//         <Route
//           index
//           element={<DashboardHome />}
//         />

//         {/* /dashboard/settings */}
//         <Route
//           path="settings"
//           element={<Settings />}
//         />

//         {/* /dashboard/analytics */}
//         <Route
//           path="analytics"
//           element={<Analytics />}
//         />

//       </Route>

//     </Routes>
//   );
// }

// export default App;

import { Routes,Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AuthGurad from "./components/AuthGurad";
import DashboardLayout from "./components/DashboardLayout";
import UserProfile from "./UserProfile";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>

      <Route path="/dashborad" element={
        <AuthGurad>
        <Dashboard/>
        <DashboardLayout/>
        </AuthGurad>}
        />

        <Route index element={<Dashboard/>}/>
        <Route path="users/:id" element={<UserProfile/>}/>

        <Route path="users/42" element={<h2>User#42</h2>}/>
        <Route path="users/99" element={<h2>User#99</h2>}/>

<Route/>
    </Routes>
  )
}
export default App;