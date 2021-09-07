import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Text, Heading, Box, Center, VStack, Grid } from "@chakra-ui/react"
import QuoteItem from '../../components/Quote';

export default function HomePage() {
  return (
    // <Box flex="1" height="100vh" p="16" overflow="scroll" flexWrap="wrap" ></Box>
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <QuoteItem quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
      <QuoteItem quote="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
    the leap into electronic typesetting, remaining essentially unchanged."/>
      <QuoteItem />
      <QuoteItem />
      <QuoteItem />
      <QuoteItem />
      <QuoteItem />
    </Grid>

  );
}