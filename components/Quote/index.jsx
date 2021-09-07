import { Box, Center, Heading, Text,useColorModeValue } from '@chakra-ui/react';

export default function QuoteItem({ quote }) {
    return (
        <>
            <Box 
            w={'half'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            m={4}
            textAlign={'center'}
            // bgColor="blackAlpha.100" width="40%" zIndex="999" 
            >
                <Center>
                    <Heading>Quotes</Heading>
                </Center>

                <Text justifyContent="center" alignItems="center" textAlign="center" p="4" fontSize="2xl">
                    <q>{quote}</q>
                </Text>
            </Box>
        </>
    );
}

QuoteItem.defaultProps = {
    quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
    galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
    the leap into electronic typesetting, remaining essentially unchanged.
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
    , and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
}
