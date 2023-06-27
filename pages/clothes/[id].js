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
      
    </div>
  );
};

export default Details;
