import styles from "../../styles/clothes.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Details = () => {
    const router = useRouter();
    const { id } = router.query;
    const [clothes, setClothes] = useState({});
    const [editedClothes, setEditedClothes] = useState({});
  
    useEffect(() => {
      fetch(`http://localhost:5000/items/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setClothes(data);
          setEditedClothes(data);
        })
        .catch((error) => console.error('Error occurred while fetching data:', error));
    }, [id]);
  
    const handleChange = (e) => {
      setEditedClothes({ ...editedClothes, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`http://localhost:5000/items/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedClothes),
          });
    
          if (response.ok) {
            console.log('Data updated successfully');
          } else {
            console.log('Failed to update data');
          }
        } catch (error) {
          console.error('Error occurred while updating data:', error);
        }
      };
  
    return (
      <div className={styles.singleClothes}>
        <h1>{clothes.name}</h1>
        <div className={styles.imageContainer}>
          <Image
            src={clothes.image}
            alt={clothes.name}
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <p>{clothes.desc}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedClothes.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="desc">Description:</label>
            <textarea
              id="desc"
              name="desc"
              value={editedClothes.desc || ""}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className={styles.btn}>
            Save
          </button>
        </form>
      </div>
    );
  };
  
  export default Details;