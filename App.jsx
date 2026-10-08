// // // import {
// // //   Routes,
// // //   Route,
// // //   Link,
// // //   Outlet,
// // //   Navigate
// // // } from "react-router-dom";

// // // function DashboardLayout() {
// // //   return (
// // //     <div>
// // //       <aside>
// // //         <h2>Dashboard</h2>

// // //         <Link to="/dashboard">
// // //           Home
// // //         </Link>

// // //         <br />

// // //         <Link to="/dashboard/settings">
// // //           Settings
// // //         </Link>

// // //         <br />

// // //         <Link to="/dashboard/analytics">
// // //           Analytics
// // //         </Link>
// // //       </aside>

// // //       <main>
// // //         <Outlet />
// // //       </main>
// // //     </div>
// // //   );
// // // }

// // // function DashboardHome() {
// // //   return <h1>Dashboard Home</h1>;
// // // }

// // // function Settings() {
// // //   return <h1>Settings</h1>;
// // // }

// // // function Analytics() {
// // //   return <h1>Analytics</h1>;
// // // }

// // // function App() {
// // //   return (
// // //     <Routes>

// // //       {/* / open karne par dashboard par jayega */}
// // //       <Route
// // //         path="/"
// // //         element={<Navigate to="/dashboard" />}
// // //       />

// // //       {/* Dashboard Layout */}
// // //       <Route
// // //         path="/dashboard"
// // //         element={<DashboardLayout />}
// // //       >

// // //         {/* /dashboard */}
// // //         <Route
// // //           index
// // //           element={<DashboardHome />}
// // //         />

// // //         {/* /dashboard/settings */}
// // //         <Route
// // //           path="settings"
// // //           element={<Settings />}
// // //         />

// // //         {/* /dashboard/analytics */}
// // //         <Route
// // //           path="analytics"
// // //           element={<Analytics />}
// // //         />

// // //       </Route>

// // //     </Routes>
// // //   );
// // // }

// // // export default App;

// // import { Routes,Route } from "react-router-dom";
// // import Login from "./Login";
// // import Dashboard from "./Dashboard";
// // import AuthGurad from "./components/AuthGurad";
// // import DashboardLayout from "./components/DashboardLayout";
// // import UserProfile from "./UserProfile";

// // function App(){
// //   return(
// //     <Routes>
// //       <Route path="/" element={<Login/>}/>

// //       <Route path="/dashborad" element={
// //         <AuthGurad>
// //         <Dashboard/>
// //         <DashboardLayout/>
// //         </AuthGurad>}
// //         />

// //         <Route index element={<Dashboard/>}/>
// //         <Route path="users/:id" element={<UserProfile/>}/>

// //         <Route path="users/42" element={<h2>User#42</h2>}/>
// //         <Route path="users/99" element={<h2>User#99</h2>}/>

// // <Route/>
// //     </Routes>
// //   )
// // }
// // export default App;

// import { useState } from "react";

// import {
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useParams,
//   useNavigate,
//   Navigate
// } from "react-router-dom";


// // --------------------
// // Mock Recipe Data
// // --------------------

// const recipes = [
//   {
//     id: 1,
//     title: "Pasta",
//     ingredients: ["Pasta", "Tomato", "Cheese"],
//     instructions: "Boil pasta and add tomato sauce and cheese."
//   },
//   {
//     id: 2,
//     title: "Pizza",
//     ingredients: ["Flour", "Cheese", "Tomato"],
//     instructions: "Prepare dough, add toppings and bake."
//   },
//   {
//     id: 3,
//     title: "Sandwich",
//     ingredients: ["Bread", "Cheese", "Vegetables"],
//     instructions: "Put all ingredients between two slices of bread."
//   }
// ];


// // --------------------
// // Main Layout
// // --------------------

// function MainLayout({ isLoggedIn, setIsLoggedIn }) {

//   return (
//     <div>

//       <nav>

//         <Link to="/">Home</Link>
//         {" | "}

//         <Link to="/recipes">Browse Recipes</Link>
//         {" | "}

//         <Link to="/favorites">My Favorites</Link>

//         <br />
//         <br />

//         <button
//           onClick={() => setIsLoggedIn(!isLoggedIn)}
//         >
//           {isLoggedIn ? "Logout" : "Login"}
//         </button>

//       </nav>

//       <hr />

//       <Outlet />

//     </div>
//   );
// }


// // --------------------
// // Home
// // --------------------

// function Home() {

//   return (
//     <div>
//       <h1>Welcome to Recipe Book</h1>

//       <p>
//         Find and explore delicious recipes.
//       </p>
//     </div>
//   );
// }


// // --------------------
// // Recipe List
// // --------------------

// function RecipeList() {

//   return (
//     <div>

//       <h1>Browse Recipes</h1>

//       {recipes.map((recipe) => (

//         <div key={recipe.id}>

//           <Link to={`/recipes/${recipe.id}`}>
//             {recipe.title}
//           </Link>

//         </div>

//       ))}

//     </div>
//   );
// }



// function RecipeDetails() {

//   const { recipeId } = useParams();

//   const navigate = useNavigate();

//   const recipe = recipes.find(
//     (item) => item.id === Number(recipeId)
//   );


//   if (!recipe) {

//     return <h1>Recipe Not Found</h1>;

//   }


//   function handleDelete() {

//     navigate("/recipes");

//   }


//   return (
//     <div>

//       <h1>{recipe.title}</h1>

//       <h2>Ingredients</h2>

//       <ul>

//         {recipe.ingredients.map((ingredient) => (

//           <li key={ingredient}>
//             {ingredient}
//           </li>

//         ))}

//       </ul>


//       <h2>Instructions</h2>

//       <p>
//         {recipe.instructions}
//       </p>


//       <button onClick={handleDelete}>
//         Delete Recipe
//       </button>

//     </div>
//   );
// }



// function Favorites() {

//   return (
//     <div>

//       <h1>My Favorites</h1>

//       <p>
//         These are your favorite recipes.
//       </p>

//     </div>
//   );
// }



// function ProtectedRoute({ isLoggedIn, children }) {

//   if (!isLoggedIn) {

//     return <Navigate to="/" replace />;

//   }

//   return children;
// }



// function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);


//   return (

//     <Routes>

//       <Route
//         path="/"
//         element={
//           <MainLayout
//             isLoggedIn={isLoggedIn}
//             setIsLoggedIn={setIsLoggedIn}
//           />
//         }
//       >

//         <Route
//           index
//           element={<Home />}
//         />

//         <Route
//           path="recipes"
//           element={<RecipeList />}
//         />

//         <Route
//           path="recipes/:recipeId"
//           element={<RecipeDetails />}
//         />

//         <Route
//           path="favorites"
//           element={
//             <ProtectedRoute
//               isLoggedIn={isLoggedIn}
//             >
//               <Favorites />
//             </ProtectedRoute>
//           }
//         />

//       </Route>

//     </Routes>

//   );
// }


// export default App;

import PostList from "./PostList";

function App(){
  return (
    <div>
      <PostList/>
    </div>
  )
}

export default App;