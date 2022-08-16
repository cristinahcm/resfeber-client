import { Routes, Route, Link } from "react-router-dom"
import BottomAppBar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Oops from "./pages/Oops"
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import CreateTravelPage from "./pages/CreateTravelPage"
import UserInfoPage from "./pages/UserInfoPage"
import UserProfile from "./pages/UserProfile"
import SearchPage from "./pages/SearchPage"
import ResponsiveAppBar from "./components/Logo/Logo"


function App() {
	return (
		<div className="App">
			
			<BottomAppBar />
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/createTravel" element={<CreateTravelPage />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/UserInfoPage" element={<UserInfoPage />} />
				<Route path="/profile/:id" element={<UserProfile />} />
				<Route element={<PrivateRoute />}>
					<Route path="/profile" element={<Profile />} />
				</Route>
				<Route path="/oops" element={<Oops />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="*" element={<Oops />} />
			</Routes>
		</div>
	)
}



export default App
