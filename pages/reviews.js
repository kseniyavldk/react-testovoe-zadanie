import Head from "next/head";

const Reviews = ({ reviews }) => {    

    console.log(reviews);

  return (
    <>
      <Head>
        <title>Clothes | Home</title>
        <meta name="title" content="Clothes" />
      </Head>
      <div>
        <h1>Отзывы</h1>
        <div className='reviews'>
            { !!reviews.length && reviews.slice(0, 20).map(res => {
                return (
                    <div key={res.id} className='review'>
                        {res.id}{' '}
                        {`${res.body.slice(0, 90)}...`}
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();

    return {
        props: {
            reviews: data.slice(0, 20)
        }
    }
}

export default Reviews;
