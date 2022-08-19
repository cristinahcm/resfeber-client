import FormSignUp from "../components/Forms/FormSignUp";
import Welcome from "../components/Welcome/WelcomeLetter.jsx";
import { useState } from "react";


const Signup = () => {
const [welcome, setWelcome] = useState(true)


const handleWelcome = () => {
	setWelcome(!welcome)
}


	return (
	<> 
	{welcome && <Welcome onClick={handleWelcome} />}
	{!welcome && <FormSignUp />}
	</>
	);
};

export default Signup;
