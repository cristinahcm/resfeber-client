import { useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom"


const API_URL = 'http://localhost:5005';

const TravelEditForm  = () => {
const [edit, setEdit] = useState([]);
const {id} = useParams();
const {navigate} = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try{
    const response = await axios.put(`${API_URL}/api/travels/edit/${id}`)
    navigate("/");  }
    catch(err){console.log(err)}
 
}

  // return (
  //   <div className="container">
  //     <form onSubmit={handleEdit}>
  //       <div className="form-group">
  //         <label htmlFor="destination">Destination</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           id="destination"
  //           name="destination"
  //           placeholder="Enter destination"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="route">Route</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           id="route"
  //           name="route"
  //           placeholder="Description of your route"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="origin">Origin</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           id="origin"
  //           name="origin"
  //           placeholder="Origin"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="budget">Budget</label>
  //         <input
  //           type="number"
  //           className="form-control"
  //           id="budget"
  //           name="budget"
  //           placeholder="Enter budget"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="initialDate">Initial Date</label>
  //         <input
  //           type="date"
  //           className="form-control"
  //           id="initialDate"
  //           name="initialDate"
  //           placeholder="Enter initial date"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div className="form-group">  
  //         <label htmlFor="finalDate">Final Date</label>
  //         <input
  //           type="date" 
  //           className="form-control"  
  //           id="finalDate"  
  //           name="finalDate"
  //           placeholder="Enter final date"
  //           onChange={handleChange} 
  //         />  
  //       </div>
  //       <div className="form-group">  
  //         <label htmlFor="typeTravel">Type</label>
  //         <select name="typeTravel" className="form-select" id="typeTravel">
  //           <option value="Eco">Eco</option>
  //           <option value="Family">Family</option>
  //           <option value="Friends">Friends</option>
  //           <option value="Only Women">Only Women</option>
  //           <option value="Solo">Solo</option>
  //         </select>
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="images">Images</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           id="images"
  //           name="images"
  //           placeholder="Enter images"
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <button type="submit" className="btn btn-primary">
  //         Submit
  //       </button>
  //     </form>
  //   </div>
  // );

}

export default TravelEditForm;
