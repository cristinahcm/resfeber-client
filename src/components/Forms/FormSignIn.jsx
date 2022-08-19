import React, { useState } from "react"
import service from "../../services/apiHandler"
import useAuth from "../../context/auth/useAuth"
import { useNavigate, Link } from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const FormSignIn = () => {
	const [user, setUser] = useState({
		email: "",
		password: "",
	})
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	const { storeToken, authenticateUser } = useAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await service.signin(user)
			console.log(res)
			storeToken(res.authToken)
			await authenticateUser()
			navigate("/home")
		} catch (error) {
			console.log(error)
			setError(error)
		}
	}

	return (
		<Box className="formsignup"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			{error && <h3 className="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
				<h2 className="signh2">Hello!</h2>
				<TextField
					required
					id="email"
					label="Email"
					name="email"
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.email}
				/>
				<TextField
					required
					id="password"
					label="Password"
					name="password"
					type="password"
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.password}
				/>
				<br></br>
				<Button type="submit" variant="outlined" className="buttonsign" >
					Continue
				</Button>
			</form>

			<Link to="/signup" className="backsign">Not registered yet?</Link>

		</Box>
	)
}

export default FormSignIn
