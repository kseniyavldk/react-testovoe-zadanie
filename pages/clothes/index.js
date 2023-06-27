import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/clothes.module.css';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
  
    return {
      props: { clothes: data }
    }
  }

const ClothesAll = ({ clothes } ) => {
    
    return (
        <div>
            <h1>Our clothes</h1>
            {clothes.map(clothes => {
                return (
                    <Link href={`/clothes/${clothes.id}`} key={clothes.id}>
                        <a className={styles.clothesCard}>
                            <div className={styles.imageContainer}>
                                <Image 
                                    src={`${clothes.image}`}
                                    alt={`${clothes.name}`}
                                    width={100}
                                    height={100}
                                    style={{objectFit:"cover"}}
                                />
                            </div>
                            <div>
                                <h3>{ clothes.name }</h3>
                                <p> { clothes.desc } </p>
                            </div>
                        </a>
                    </Link>
                )
            })}
        </div>
    )
}

export default ClothesAll;