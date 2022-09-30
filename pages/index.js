import Head from 'next/head'


import Slider from '../Components/Home/Slider';
import Section from '../Components/Home/Section';

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/Movies')
  const movies_shows = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      movies_shows,
    },
  }
}


export default function Home({ movies_shows }) {
    
  return (
    <div>
      <Head>
        <title>Book Ticket</title>
      </Head>
      <Slider />
      <Section movies_shows={movies_shows} />
    </div>
  )
}
