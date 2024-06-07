import PetCard from "./PetCard";
import React, { useEffect, useState } from 'react';
import "./AdoptMe.css";
import image1 from './images/im6.jpg';
import image2 from './images/im2.jpg';
import image3 from './images/im4.jpg';
import firebase from '../../Firebase';


function AdoptMe() {
  
  const database = firebase.database();
const [pets, setPets] = useState([
   /* {
      
      id: 1,
      name: "Rex",
      breed: "Toy",
      age: "1 year",
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      origin: "Germany, France",
      image: image1,
      localisation: "sousse",
         phoneNumber: "123456789",
    },
    {
     
      id: 2,
      name: "Roy",
    
      breed: "Hound",
    age: "3years",
      temperament: "Aloof, Clownish, Dignified, Independent, Happy",
      origin: "germany",
      image:image2,
      localisation: "mahdia",
         phoneNumber: "123-456-7890",
    },
    {
     
      id: 3,
      name: "cookie",
    
      breed: "Shirazi",
      age: "1 year",
      temperament: "Wild, Hardworking, Dutiful",
      origin: "",
      image: image3,
      localisation: "United Kingdom, England",
         phoneNumber: "123-456-7890",
    },*/
    
  ]);
  const [newPet, setNewPet] = useState({
    id: pets.length + 1,
    name: "",
    breed: "",
    age: "",
    localisation: "",
    temperament: "",
    phoneNumber: "",
    image: null,
    dueDate:null,
  });
  useEffect(() => {
    const fetchPets = async () => {
      const petsSnapshot = await database.ref('pets').once('value');
      const petsData = petsSnapshot.val();
      if (petsData) {
        const petsArray = Object.values(petsData);
        setPets(petsArray);
      }
    };

    fetchPets();
  }, []);
  const [isFormVisible, setIsFormVisible] = useState(false);
const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNewPet({ ...newPet, image: URL.createObjectURL(e.target.files[0]) });
    }
  };
  const handleInputChange = (e) => {
    setNewPet({
      ...newPet,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPet.isLost === "true") {
      newPet.dueDate = new Date(Date.now() + 48 * 60 * 60 * 1000);
    }
    const newPetData = { ...newPet, id: pets.length + 1 };
    setPets([...pets, newPetData]);
  
    // Save the new pet data to the Firebase Realtime Database
    database.ref('pets').push(newPetData).then(() => {
      console.log('New pet data saved successfully.');
    }).catch((error) => {
      console.error('Error saving new pet data:', error);
    });
  
    setNewPet({
      id: pets.length + 2,
      name: "",
      breed: "",
      age: "",
      localisation: "",
      temperament: "",
      phoneNumber: "",
      image: null,
      dueDate: null,
    });
    setIsFormVisible(false);
  };
  const handleCancel = () => {
    setIsFormVisible(false);
  };
  return (
    <>
      <div className="Shop">
        <h1 className="PetShop-headings">Choose your new bestfreind!</h1></div>
        <div className="button-container">
        <button className="new-pet-button"onClick={() => setIsFormVisible(true)}>NEW PET</button></div>
      {isFormVisible && (
        <form className="pet-form" onSubmit={handleSubmit} method="POST">
           <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          name="name"
          value={newPet.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="breed"
          value={newPet.breed}
          onChange={handleInputChange}
          placeholder="Breed"
          required
        />
        <input
          type="text"
          name="age"
          value={newPet.age}
          onChange={handleInputChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="localisation"
          value={newPet.localisation}
          onChange={handleInputChange}
          placeholder="Localisation"
          required
        />
        <input
          type="text"
          name="temperament"
          value={newPet.temperament}
          onChange={handleInputChange}
          placeholder="Temperament"
          required
        />
        <input
          type="text"
          name="phoneNumber"
          value={newPet.phoneNumber}
          onChange={handleInputChange}
          placeholder="Phone Number"
          required
        />
        <label htmlFor="isLost">Is the pet lost?</label>
<select id="isLost" name="isLost" onChange={handleInputChange}>
  <option value="false">No</option>
  <option value="true">Yes</option>
</select>
        <div className="button-group">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
      )}
      <div>
      {pets.map((val) => (
    <PetCard
      key={val.id}
      image={val.image}
      name={val.name}
      breed={val.breed}
      age={val.age}
      localisation={val.localisation}
      temperament={val.temperament}
      phoneNumber={val.phoneNumber}
      isLost={val.isLost}
      lostTime={val.lostTime}
      dueDate={val.dueDate}
    />
  ))}
  </div>
     
    </>
  );
}

export default AdoptMe;


