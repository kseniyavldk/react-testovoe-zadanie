import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/clothes.module.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import AddClothesButton from "../../components/AddClothesButton";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: { clothes: data },
  };
};

const ClothesAll = ({ clothes }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/items/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Data deleted successfully");
      } else {
        console.log("Failed to delete data");
      }
    } catch (error) {
      console.error("Error occurred while deleting data:", error);
    }
  };

  return (
    <div>
      <h1>Our clothes</h1>
      <AddClothesButton />
      {clothes.map((clothes) => {
        return (
          <div className={styles.clothesCard} key={clothes.id}>
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
              <h3>{clothes.name}</h3>
              <p>{clothes.desc}</p>
            </div>
            <div>
              <div>
                <AiFillDelete onClick={() => handleDelete(clothes.id)} />
              </div>
              <div>
                <Link href={`/clothes/edit/${clothes.id}`}>
                  <a>
                    <AiFillEdit />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default ClothesAll;
