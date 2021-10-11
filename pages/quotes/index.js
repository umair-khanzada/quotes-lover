import { Grid } from "@chakra-ui/react"
import QuoteItem from '../../components/Quote';
import Head from 'next/head';

const QUOTES = [
  {
    quote: "My favorite things in life don't cost any money. It's really clear that the most precious resource we all have is time.",
    author: "Steve Jobs",
    isFav: true
  },
  {
    quote: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.",
    author: "Sholom Aleichem",
    isFav: false
  },
  {
    quote: "Every man dies. Not every man really lives.",
    author: "William Wallace",
    isFav: false
  },
  {
    quote: "Life is what happens while you are busy making other plans.",
    author: "John Lennon",
    isFav: false
  },
  {
    quote: "Open your eyes, look within. Are you satisfied with the life you're living?",
    author: "Bob Marley",
    isFav: true
  },
  {
    quote: "Art is a harmony parallel with nature.",
    author: "Paul Cezanne",
    isFav: false
  },
  {
    quote: "On earth there is no heaven, but there are pieces of it.",
    author: "Jules Renard",
    isFav: false
  },
  {
    quote: "Rain is grace; rain is the sky descending to the earth; without rain, there would be no life.",
    author: "John Updike",
    isFav: false
  },
  {
    quote: "Don't threaten me with love, baby. Let's just go walking in the rain.",
    author: "Billie Holiday",
    isFav: true
  },
];

export default function HomePage({quotes}) {
  return (
    <>
      <Head>
        <title>Quotes App</title>
      </Head>
      <Grid templateColumns="repeat(3, 1fr)" gap={0}>
        {quotes.map((val, ind) =>
          <QuoteItem
            key={`${val._id}`}
            quote={val.quote}
            author={val.author}
          // isFav={val.isFav}
          />
        )}
      </Grid>
    </>
  );
};


export async function getStaticProps() {
  const res = await fetch('http://localhost:4001/api/quote')
  const quotes = await res.json();

  return {
    props: {
        quotes:quotes
    },
    revalidate: 1
  }
}