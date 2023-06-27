import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/styles.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clothes | Home</title>
        <meta name="title" content="Clothes" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>
          Our clothes
        </h1>
        <div className={styles.mainImage}>
          <Image
            src="/banner3_1390x1497_112567.jpg"
            alt="banner"
            width={400}
            height={300}
          />
        </div>
        <p className={styles.text}>Everything you wanted to know about your fave fashion brand. And then some.</p>
        <Link href="/pages/clothes">
          <a className={styles.btn}>All clothes</a>
        </Link>
      </div>
    </>
  );
}
