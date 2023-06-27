import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/clothes.module.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import AddClothesButton from "../../components/AddClothesButton";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  return {
    props: { clothes: data },
  };
};

const ClothesAll = ({ clothes }) => {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/items/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Data deleted successfully");
        router.replace(router.asPath);
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
          <Link href={`/clothes/${clothes.id}`} key={clothes.id}>
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
                <div className={styles.buttonContainer}>
                  <Link href={`/clothes/${clothes.id}`}>
                    <a className={styles.editButton}>
                      <AiFillEdit />
                    </a>
                  </Link>
                  <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(clothes.id)}
                >
                  <AiFillDelete />
                </button>
                </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ClothesAll;
