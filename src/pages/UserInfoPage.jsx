import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import service from "../services/apiHandler"

const API_URL = "http://localhost:5005"

const UserInfoPage = () => {
	const [user, setUser] = useState({ picture: "", interests: "", gender: "", age: ""})
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await  axios.put(`${API_URL}/api/users/edit`)
			console.log(res)
			navigate("/")
		} catch (error) {
			setError(e.message)
		}
	}
	return (
		<>
			{error && <h3 className="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
				<h2>Tell us more about you</h2>
				<label htmlFor="name">Picture</label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.picture]: e.target.value })
					}
					value={user.picture}
					type="image"
					id="picture"
					name="picture"
				/>
				<label htmlFor="interests">Interests</label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.interests]: e.target.value })
					}
					value={user.interests}
					type="text"
					id="interests"
					name="interests"
				/>
				<label htmlFor="gender">Gender</label>
				<input
					onChange={(e) =>
						setUser({ ...user, [e.target.gender]: e.target.value })
					}
					value={user.gender}
					type="text"
					id="gender"
					name="gender"
				/>
                <label htmlFor="age">Age</label>
                <input
                    onChange={(e) =>
                        setUser({ ...user, [e.target.age]: e.target.value })
                    }
                    value={user.age}
                    type="text"
                    id="age"
                    name="age"
                />
				<button>Submit</button>
			</form>
		</>
	)
}

export default UserInfoPage
