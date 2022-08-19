import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import service from "../../services/apiHandler"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const FormSignUp = () => {
	const [user, setUser] = useState({ name: "", email: "", password: "" , gender: "", age: ""})
	const [error, setError] = useState(null)
	const [continueButton, setContinueButton] = useState(false)
	const [signUpBox, setSignUpBox] = useState(true)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await service.signup(user)
			console.log(res)
			navigate("/")
		} catch (error) {
			setError(e.message)
		}
	}


	const handleContinue =  () => {
	setContinueButton(true)
	setSignUpBox(false)
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
			{signUpBox && (
				 <>
				<h2 className="signh2">Welcome to Resfeber!</h2>
				<Box className="blacks">
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
				</Box>
				<Box className="blacks">
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
				</Box>
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
				<Button onClick={handleContinue} variant="outlined" className="buttonsign" >
					Continue
				</Button>

</>
			)
}

			
				{continueButton && (
					<> 
						<Box className="blacks">
						<TextField
							
							id="age"
							label="age"
							name="age"
							onChange={(e) =>
								setUser({ ...user, [e.target.name]: e.target.value })
							}
							value={user.age}
						/>
						</Box>
						<Select sx={{ m: 1, width: '28ch' }}
            required
            name="gender"
            id="gender"
            // value={gender}
            label="Gender"
            onChange={(e) =>
							setUser({ ...user, [e.target.name]: e.target.value })
						}
>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
						<MenuItem value="Other">Other</MenuItem>
            
          </Select>
					<Button type="submit" variant="outlined" className="buttonsign" >
					Submit
				</Button >

						</>
				)
				}
				<br></br>

			</form>

			<Link to="/signin" className="backsign">Sign in</Link>
		</Box>
	)
}

export default FormSignUp
