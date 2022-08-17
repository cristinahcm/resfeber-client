import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import service from "../../services/apiHandler"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const FormSignUp = () => {
	const [user, setUser] = useState({ name: "", email: "", password: "" })
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await service.signup(user)
			console.log(res)
			navigate("/userInfoPage")
		} catch (error) {
			setError(e.message)
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
				<h2 className="signh2">Welcome to Resfeber!</h2>
				<TextField
					required
					id="name"
					label="Name"
					name="name"
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.name}
				/>
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

			<Link to="/signin" className="backsign">Sign in</Link>
		</Box>
	)
}

export default FormSignUp
