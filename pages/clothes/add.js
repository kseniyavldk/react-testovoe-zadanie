import { useState } from "react";
import styles from "../../styles/clothes.module.css";

const AddClothes = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClothes = {
        name: name,
        desc: desc
      };
  
      try {
        const response = await fetch("http://localhost:5000/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newClothes)
        });
  
        if (response.ok) {
          console.log("New clothes added successfully");
        } else {
          console.log("Failed to add new clothes");
        }
      } catch (error) {
        console.error("Error occurred while adding new clothes:", error);
      }
  };

  return (
    <div>
      <h1>Add Clothes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">Description:</label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddClothes;
