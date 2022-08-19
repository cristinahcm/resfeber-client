import React, { useEffect, useMemo, useState } from "react";
import SelectComponent from "../components/Select/SelectComponent";

//Filter list by category in React JS
export default function SearchPage() {
  // Default Value
  const userData = [
	{
		"name": "Xenos Maldonado",
		"email": "pretium@google.ca",
		"age": 30,
		"interests": "beach, shopping, nature, food, culture, nightlife",
		"gender": "female"
	},
	{
		"name": "Melinda Morrison",
		"email": "lectus.cum.sociis@hotmail.ca",
		"age": 35,
		"interests": "shopping, nature, culture, food",
		"gender": "male"
	},
	{
		"name": "Yvonne Terrell",
		"email": "quis@outlook.ca",
		"age": 39,
		"interests": "aventurer, beach, nightlife, nature",
		"gender": "other"
	},
	{
		"name": "Rylee Petersen",
		"email": "neque@hotmail.couk",
		"age": 48,
		"interests": "food, nightlife, beach, nature, culture, shopping, aventurer",
		"gender": "female"
	},
	{
		"name": "Elizabeth Shannon",
		"email": "vitae@aol.couk",
		"age": 34,
		"interests": "nightlife, food, nature, shopping",
		"gender": "male"
	},
	{
		"name": "Dahlia Roberson",
		"email": "integer.vulputate@hotmail.ca",
		"age": 54,
		"interests": "food, culture, nature",
		"gender": "male"
	},
	{
		"name": "Reed Leon",
		"email": "porttitor@yahoo.couk",
		"age": 40,
		"interests": "nightlife, food, culture",
		"gender": "male"
	},
	{
		"name": "Brenden Clayton",
		"email": "diam.dictum@yahoo.net",
		"age": 26,
		"interests": "culture, food, nature, nightlife, shopping",
		"gender": "male"
	},
	{
		"name": "Pamela Davenport",
		"email": "montes.nascetur.ridiculus@google.edu",
		"age": 69,
		"interests": "shopping, culture",
		"gender": "other"
	},
	{
		"name": "Florence Colon",
		"email": "dui@icloud.edu",
		"age": 40,
		"interests": "nature, shopping",
		"gender": "male"
	},
	{
		"name": "Daquan Everett",
		"email": "natoque.penatibus.et@outlook.com",
		"age": 24,
		"interests": "nature, nightlife, beach, culture",
		"gender": "female"
	},
	{
		"name": "Karyn Schultz",
		"email": "ullamcorper.magna.sed@yahoo.edu",
		"age": 64,
		"interests": "shopping, culture, beach, food",
		"gender": "male"
	},
	{
		"name": "Cody Palmer",
		"email": "ac.mi.eleifend@google.couk",
		"age": 56,
		"interests": "beach, nightlife",
		"gender": "other"
	},
	{
		"name": "Sybil Puckett",
		"email": "sed.eu@outlook.couk",
		"age": 24,
		"interests": "food, culture",
		"gender": "female"
	},
	{
		"name": "Tobias Patel",
		"email": "amet@hotmail.com",
		"age": 38,
		"interests": "culture, food, beach, aventurer, nightlife, shopping",
		"gender": "other"
	},
	{
		"name": "Mannix Walters",
		"email": "sed.eu.eros@protonmail.ca",
		"age": 27,
		"interests": "beach, culture, nature, food, aventurer",
		"gender": "other"
	},
	{
		"name": "Hiroko Mendoza",
		"email": "suspendisse.aliquet.molestie@google.com",
		"age": 68,
		"interests": "shopping",
		"gender": "other"
	},
	{
		"name": "Jessica Garcia",
		"email": "nulla@outlook.com",
		"age": 21,
		"interests": "shopping, nature, nightlife, food",
		"gender": "other"
	},
	{
		"name": "Forrest Pearson",
		"email": "dis@google.net",
		"age": 27,
		"interests": "nightlife, culture, food, beach",
		"gender": "other"
	},
	{
		"name": "Wade Hickman",
		"email": "curae@outlook.org",
		"age": 49,
		"interests": "aventurer, beach, food",
		"gender": "other"
	},
	{
		"name": "Elijah Carrillo",
		"email": "vitae.nibh.donec@outlook.com",
		"age": 34,
		"interests": "nature, nightlife, shopping, food, beach",
		"gender": "female"
	},
	{
		"name": "Francesca Wynn",
		"email": "erat@protonmail.org",
		"age": 58,
		"interests": "aventurer, nature, nightlife",
		"gender": "male"
	},
	{
		"name": "Hakeem Chase",
		"email": "nec.leo@yahoo.couk",
		"age": 41,
		"interests": "nature, beach",
		"gender": "female"
	},
	{
		"name": "Keegan Pearson",
		"email": "metus.urna@google.couk",
		"age": 29,
		"interests": "beach, shopping, food, nature, nightlife, aventurer",
		"gender": "male"
	},
	{
		"name": "Ocean Mueller",
		"email": "cras.interdum@icloud.edu",
		"age": 37,
		"interests": "food, nightlife, beach",
		"gender": "other"
	},
	{
		"name": "Katell Brewer",
		"email": "neque@outlook.org",
		"age": 61,
		"interests": "food, nightlife, beach, culture, shopping, nature",
		"gender": "other"
	},
	{
		"name": "Anthony Fisher",
		"email": "mollis.lectus@outlook.ca",
		"age": 29,
		"interests": "beach, culture, shopping, food, nightlife",
		"gender": "male"
	},
	{
		"name": "Piper Clements",
		"email": "placerat.augue@google.couk",
		"age": 43,
		"interests": "aventurer, food, culture, shopping, nightlife",
		"gender": "other"
	},
	{
		"name": "Joelle George",
		"email": "lorem.ipsum@protonmail.net",
		"age": 58,
		"interests": "aventurer, nature, shopping",
		"gender": "other"
	},
	{
		"name": "Joy Bray",
		"email": "magna.sed@protonmail.com",
		"age": 27,
		"interests": "aventurer, shopping, nature, beach, food",
		"gender": "male"
	},
	{
		"name": "Gabriel Witt",
		"email": "dolor.tempus@icloud.net",
		"age": 24,
		"interests": "nightlife, food, beach, culture, aventurer",
		"gender": "other"
	},
	{
		"name": "Megan Kelly",
		"email": "risus.donec@yahoo.couk",
		"age": 54,
		"interests": "aventurer, shopping, food, nature, culture",
		"gender": "other"
	},
	{
		"name": "Reese Webster",
		"email": "justo@hotmail.net",
		"age": 49,
		"interests": "shopping, nightlife, aventurer, beach",
		"gender": "other"
	},
	{
		"name": "Jacqueline Hinton",
		"email": "mollis.non@yahoo.org",
		"age": 56,
		"interests": "aventurer, nightlife, nature, shopping, food",
		"gender": "female"
	},
	{
		"name": "Catherine Dodson",
		"email": "vitae.purus@outlook.com",
		"age": 19,
		"interests": "aventurer, culture",
		"gender": "other"
	},
	{
		"name": "Uriel Booker",
		"email": "eget@google.net",
		"age": 56,
		"interests": "aventurer, nature, food, beach, shopping, nightlife",
		"gender": "female"
	},
	{
		"name": "Ivan Mcleod",
		"email": "donec.tempor@yahoo.edu",
		"age": 23,
		"interests": "food, nightlife",
		"gender": "other"
	},
	{
		"name": "Emi Alvarado",
		"email": "malesuada@yahoo.com",
		"age": 69,
		"interests": "food, culture, nightlife, beach",
		"gender": "other"
	},
	{
		"name": "Felicia Fulton",
		"email": "ante@protonmail.net",
		"age": 61,
		"interests": "food",
		"gender": "male"
	},
	{
		"name": "Jemima Schultz",
		"email": "sed@protonmail.org",
		"age": 29,
		"interests": "nature, food, shopping, beach, aventurer, culture",
		"gender": "other"
	},
	{
		"name": "Michelle Hayden",
		"email": "montes@icloud.org",
		"age": 51,
		"interests": "nature, shopping, food, aventurer",
		"gender": "female"
	},
	{
		"name": "Dexter Sanchez",
		"email": "suspendisse.commodo.tincidunt@hotmail.net",
		"age": 38,
		"interests": "nightlife, culture, shopping, food, nature",
		"gender": "male"
	},
	{
		"name": "Keith Boyle",
		"email": "neque.sed.dictum@aol.com",
		"age": 25,
		"interests": "aventurer, beach, nature, shopping",
		"gender": "other"
	},
	{
		"name": "Lydia Donaldson",
		"email": "dapibus.ligula@hotmail.com",
		"age": 18,
		"interests": "food",
		"gender": "male"
	},
	{
		"name": "Prescott Romero",
		"email": "congue.in@protonmail.com",
		"age": 62,
		"interests": "culture",
		"gender": "male"
	},
	{
		"name": "Dillon Walker",
		"email": "risus.a@icloud.com",
		"age": 41,
		"interests": "nature, nightlife, beach, culture, aventurer, shopping",
		"gender": "other"
	},
	{
		"name": "Quyn Patrick",
		"email": "a.feugiat@outlook.ca",
		"age": 63,
		"interests": "aventurer, culture, shopping, beach, nightlife, nature",
		"gender": "male"
	},
	{
		"name": "Nichole Stephenson",
		"email": "ante.vivamus@outlook.couk",
		"age": 46,
		"interests": "nightlife, culture, shopping, nature",
		"gender": "other"
	},
	{
		"name": "Ishmael Larsen",
		"email": "natoque.penatibus@google.couk",
		"age": 29,
		"interests": "aventurer, beach, nature, nightlife, food",
		"gender": "male"
	},
	{
		"name": "Mercedes Rios",
		"email": "lectus@google.couk",
		"age": 43,
		"interests": "aventurer, food, shopping, culture, beach, nightlife, nature",
		"gender": "female"
	},
	{
		"name": "Hedwig Oneil",
		"email": "turpis.egestas@outlook.net",
		"age": 50,
		"interests": "shopping, nature, nightlife, culture, beach",
		"gender": "female"
	},
	{
		"name": "Barrett Daniel",
		"email": "enim.condimentum@aol.com",
		"age": 45,
		"interests": "beach, aventurer, food, nature",
		"gender": "other"
	},
	{
		"name": "Adam Long",
		"email": "in.dolor.fusce@outlook.net",
		"age": 51,
		"interests": "nightlife, food, shopping",
		"gender": "other"
	},
	{
		"name": "Stacy Chen",
		"email": "scelerisque@outlook.couk",
		"age": 36,
		"interests": "nightlife, aventurer, nature, beach, food, culture, shopping",
		"gender": "female"
	},
	{
		"name": "Sophia Dennis",
		"email": "porttitor.tellus@outlook.net",
		"age": 29,
		"interests": "nature, nightlife",
		"gender": "female"
	},
	{
		"name": "Oren Lindsey",
		"email": "sed.leo@yahoo.com",
		"age": 69,
		"interests": "shopping, nature",
		"gender": "other"
	},
	{
		"name": "Ignatius Petersen",
		"email": "senectus.et@protonmail.com",
		"age": 31,
		"interests": "culture, nature, shopping, aventurer, beach",
		"gender": "female"
	},
	{
		"name": "Leslie Rojas",
		"email": "sed.et.libero@outlook.couk",
		"age": 44,
		"interests": "food, nightlife, beach, nature",
		"gender": "male"
	},
	{
		"name": "Daniel Velasquez",
		"email": "ac.tellus@yahoo.org",
		"age": 40,
		"interests": "food, aventurer",
		"gender": "female"
	},
	{
		"name": "Moana Cunningham",
		"email": "duis.elementum.dui@google.ca",
		"age": 52,
		"interests": "aventurer, culture, beach, nature, nightlife, food",
		"gender": "male"
	},
	{
		"name": "Martina Irwin",
		"email": "lorem.ipsum@yahoo.org",
		"age": 53,
		"interests": "food, aventurer, culture, nightlife, shopping, beach",
		"gender": "female"
	},
	{
		"name": "Eaton Hood",
		"email": "in.lobortis@aol.org",
		"age": 65,
		"interests": "nature, nightlife",
		"gender": "male"
	},
	{
		"name": "Wang Hart",
		"email": "ut@icloud.org",
		"age": 65,
		"interests": "beach, aventurer, nightlife",
		"gender": "male"
	},
	{
		"name": "Selma Wilkerson",
		"email": "etiam@google.edu",
		"age": 69,
		"interests": "nature, food, beach",
		"gender": "other"
	},
	{
		"name": "Clarke Chandler",
		"email": "donec.elementum@icloud.org",
		"age": 53,
		"interests": "shopping, food, nightlife, beach, aventurer, nature, culture",
		"gender": "other"
	},
	{
		"name": "Carson Bonner",
		"email": "pulvinar.arcu@hotmail.com",
		"age": 59,
		"interests": "nature, food, beach, aventurer, culture, shopping, nightlife",
		"gender": "male"
	},
	{
		"name": "Wanda Williamson",
		"email": "pellentesque.habitant@google.couk",
		"age": 51,
		"interests": "aventurer, nature, shopping, beach, culture",
		"gender": "other"
	},
	{
		"name": "Sigourney Glenn",
		"email": "per.conubia@outlook.ca",
		"age": 39,
		"interests": "culture, nature, aventurer, nightlife, shopping, beach, food",
		"gender": "male"
	},
	{
		"name": "Kaitlin Gilbert",
		"email": "a@google.net",
		"age": 49,
		"interests": "shopping, food",
		"gender": "male"
	},
	{
		"name": "Omar Dillon",
		"email": "dictum.placerat@protonmail.net",
		"age": 50,
		"interests": "culture, beach, shopping",
		"gender": "male"
	},
	{
		"name": "Hedley Simon",
		"email": "eget.venenatis.a@yahoo.net",
		"age": 21,
		"interests": "aventurer, shopping, food",
		"gender": "female"
	},
	{
		"name": "Cade Kelley",
		"email": "etiam.laoreet@google.net",
		"age": 21,
		"interests": "nightlife, nature, food, aventurer",
		"gender": "female"
	},
	{
		"name": "Dalton Mcclure",
		"email": "justo.faucibus.lectus@protonmail.com",
		"age": 69,
		"interests": "shopping, nature, food, aventurer, beach, culture, nightlife",
		"gender": "male"
	},
	{
		"name": "Hadassah Boone",
		"email": "duis.mi@aol.com",
		"age": 67,
		"interests": "nature, shopping, nightlife, beach, culture, aventurer, food",
		"gender": "other"
	},
	{
		"name": "Yeo Huber",
		"email": "arcu.et.pede@icloud.ca",
		"age": 27,
		"interests": "nightlife, aventurer",
		"gender": "female"
	},
	{
		"name": "Leandra Kelley",
		"email": "felis.donec.tempor@aol.ca",
		"age": 60,
		"interests": "food, nightlife, nature, aventurer",
		"gender": "male"
	},
	{
		"name": "Daria Day",
		"email": "lorem.vehicula.et@icloud.couk",
		"age": 64,
		"interests": "food, beach, shopping, culture, nature",
		"gender": "other"
	},
	{
		"name": "Burton Mcbride",
		"email": "magna@protonmail.ca",
		"age": 52,
		"interests": "nature, nightlife, beach, food, culture, aventurer",
		"gender": "male"
	},
	{
		"name": "Mary Randall",
		"email": "phasellus.vitae@outlook.com",
		"age": 33,
		"interests": "culture, beach, food, nightlife",
		"gender": "female"
	},
	{
		"name": "Ciaran Cooley",
		"email": "sem.magna@yahoo.couk",
		"age": 36,
		"interests": "aventurer, nature, nightlife, culture, food",
		"gender": "female"
	},
	{
		"name": "Josephine Hunter",
		"email": "mauris@aol.com",
		"age": 59,
		"interests": "culture, aventurer, shopping, nightlife",
		"gender": "female"
	},
	{
		"name": "Moana Kent",
		"email": "cubilia.curae@aol.net",
		"age": 55,
		"interests": "nature, food, shopping",
		"gender": "other"
	},
	{
		"name": "Anthony Sharpe",
		"email": "erat@outlook.com",
		"age": 25,
		"interests": "food, nature, shopping, nightlife, culture, beach",
		"gender": "female"
	},
	{
		"name": "Igor Cantrell",
		"email": "natoque.penatibus.et@aol.com",
		"age": 37,
		"interests": "culture",
		"gender": "female"
	},
	{
		"name": "Fitzgerald Washington",
		"email": "nec.metus@yahoo.com",
		"age": 22,
		"interests": "shopping, aventurer, nature",
		"gender": "male"
	},
	{
		"name": "Nicholas Ryan",
		"email": "interdum.enim@protonmail.ca",
		"age": 48,
		"interests": "aventurer, nature",
		"gender": "female"
	},
	{
		"name": "Aimee Patel",
		"email": "justo.sit.amet@google.edu",
		"age": 48,
		"interests": "beach, shopping, aventurer, food, nature, culture",
		"gender": "female"
	},
	{
		"name": "Jemima Kirkland",
		"email": "erat.vivamus@outlook.ca",
		"age": 21,
		"interests": "nature, culture",
		"gender": "male"
	},
	{
		"name": "Sybil Moss",
		"email": "eu.augue@google.net",
		"age": 54,
		"interests": "nightlife, culture, food, aventurer, nature",
		"gender": "male"
	},
	{
		"name": "Gavin Kerr",
		"email": "suscipit.est@hotmail.org",
		"age": 47,
		"interests": "aventurer",
		"gender": "male"
	},
	{
		"name": "Christian Kline",
		"email": "mauris@google.edu",
		"age": 50,
		"interests": "shopping, nature, nightlife, aventurer, beach",
		"gender": "male"
	},
	{
		"name": "Joy Dudley",
		"email": "lectus.nullam.suscipit@aol.net",
		"age": 47,
		"interests": "nature, food, culture, beach, aventurer",
		"gender": "female"
	},
	{
		"name": "Suki Preston",
		"email": "justo.nec@protonmail.ca",
		"age": 18,
		"interests": "food, shopping",
		"gender": "female"
	},
	{
		"name": "Nissim Branch",
		"email": "sem@yahoo.couk",
		"age": 23,
		"interests": "shopping, nature, food",
		"gender": "male"
	},
	{
		"name": "Stella O'donnell",
		"email": "venenatis.lacus.etiam@icloud.org",
		"age": 56,
		"interests": "nature, food, shopping",
		"gender": "female"
	},
	{
		"name": "Alexa Holt",
		"email": "cras.dolor@yahoo.org",
		"age": 58,
		"interests": "aventurer, nightlife, beach",
		"gender": "other"
	},
	{
		"name": "Joel Franklin",
		"email": "et.arcu@outlook.ca",
		"age": 24,
		"interests": "aventurer, nature",
		"gender": "male"
	},
	{
		"name": "Xena Wall",
		"email": "duis.at@icloud.org",
		"age": 45,
		"interests": "shopping, beach",
		"gender": "female"
	},
	{
		"name": "David Olsen",
		"email": "sed@icloud.ca",
		"age": 51,
		"interests": "shopping, beach, nightlife, culture, nature",
		"gender": "female"
	},
	{
		"name": "Camilla Pearson",
		"email": "fusce.aliquam@aol.couk",
		"age": 62,
		"interests": "culture, aventurer",
		"gender": "female"
	}
]
  const [userList, setUserList] = useState(userData);
  

  

  const [selectedInterest, setSelectedInterest] = useState();
  // Add default value on page load
  //useEffect(() => {
    //setUserList(userData);
  //}, []);

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedInterest) {
      return userList;
    }
    return userList.filter((user) => user.interests.split(" ").includes(selectedInterest));
  }

  // Avoid duplicate function calls with useMemo
  const filteredList = useMemo(getFilteredList, [selectedInterest, userList]);

  function handleCategoryChange(event) {
    setSelectedInterest(event.target.value);
  }

  return (
    <div className="app">
      <div className="filter-container">
        <div>Interests:</div>
        <div>
          <select
            name="category-list"
            id="category-list"
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            <option value="aventurer">Aventurer</option>
            <option value="beach">Beach</option>
            <option value="culture">Culture</option>
            <option value="food">Food</option>
            <option value="nightlife">Nightlife</option>
            <option value="nature">Nature</option>
            <option value="shopping">Shopping</option>
          </select>
        </div>
      </div>
      <div className="user-list">
        {filteredList.map((element, index) => (
          <SelectComponent {...element} key={index} />
        ))}
      </div>
    </div>
  );
}