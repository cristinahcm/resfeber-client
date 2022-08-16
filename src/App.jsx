import { Routes, Route } from "react-router-dom"
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


function App() {
	return (
		<div className="App">
			<BottomAppBar />
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
				<Route path="*" element={<Oops />} />
			</Routes>
		</div>
	)
}



export default App
