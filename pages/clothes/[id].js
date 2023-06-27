import styles from '../../styles/clothes.module.css';
import Image from "next/image";

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();

    const paths = data.map(clothes => {
        return {
            params: {id: clothes.id}
        }
    })

    return {
        paths,
        fallback: false
      }
 }

 export const getStaticProps = async (context) => {
    const id = context.params.id;

    const res = await fetch(`http://localhost:5000/items/${id}`);
    const data = await res.json();

    return {
        props: { clothes: data }
    }
 }

const Details = ({ clothes }) => {
    console.log('details clothes >>>', clothes)
    return (
        <div className={styles.singleClothes}>
            <h1>{clothes.name}</h1>
            <div className={styles.imageContainer}>
            <Image 
                src={clothes.image}
                alt={clothes.name}
                width={100}
                height={100}
                style={{objectFit:"cover"}}
            />
            </div>
            <div>
                <p>{clothes.desc}</p>
            </div>
        </div>
    )
}

export default Details;