import Link from 'next/link';
import { Box, Center, Heading, Text, useColorModeValue, HStack, VStack, Flex, Spacer } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import {
    MdFormatQuote,
    MdFavorite,
    MdFavoriteBorder
} from "react-icons/md"
import AuthContext from '../../contexts/authContext';

export default function QuoteItem({ quote, author, isFav }) {
    const [_isFav, setIsFav] = useState(false);
    const [state, dispatch] = useContext(AuthContext);

    return (
        <Box
            h="fit-content"
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow="2xl"
            rounded="lg"
            p={6}
            m={4}>
            <Flex flexDirection="column">
                <Center>
                    <Heading>Quotes</Heading>
                </Center>
                <Box
                    p="4">
                    <VStack>
                        {/* <MdFormatQuote /> */}
                        <Text
                            fontSize="2xl">
                            <q>{quote}</q>
                        </Text>
                    </VStack>


                    <Spacer />
                    <HStack mt="8">
                        <Link
                            href={`/`}>
                            <Text
                                cursor='pointer'
                                _hover={{
                                    cursor: 'pointer',
                                    color: 'teal'
                                }}
                                color="gray.500"
                            >{author}</Text>
                        </Link>
                        <Spacer />
                        {isFav ? <MdFavorite
                            cursor='pointer'
                            color="teal"
                            size="24px"
                            onClick={() => setIsFav(!isFav)} /> :
                            <MdFavoriteBorder
                                cursor='pointer'
                                color="teal"
                                size="24px"
                                onClick={() => setIsFav(!isFav)} />}

                    </HStack>
                </Box>
            </Flex>
        </Box>
    );
}

// QuoteItem.defaultProps = {
//     quote: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
//     author: '-Author'
// }
