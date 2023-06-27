import Link from "next/link";
import styles from "../styles/clothes.module.css";

const AddClothesButton = () => {
  return (
    <Link href="/clothes/add">
      <a className={styles.addButton}>Add Clothes</a>
    </Link>
  );
};

export default AddClothesButton;