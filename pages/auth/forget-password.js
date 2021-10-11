import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Center,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useContext } from 'react';
import { themeSchema } from '../../constants';
import { ThemeContext } from '../../contexts/themeContext';

export default function forgetPassword() {
    const [theme, useTheme] = useContext(ThemeContext)
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('teal.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={themeSchema[theme].cardBg}
                // bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading
                    lineHeight={1.1}
                    color={themeSchema[theme].textColor}
                    fontSize={{ base: '2xl', md: '3xl' }}>
                    Forgot your password?
                </Heading>
                <Text
                    color={themeSchema[theme].textColor}
                    fontSize={{ base: 'sm', sm: 'md' }}
                // color={useColorModeValue('gray.800', 'gray.400')}
                >
                    You&apos;ll get an email with a reset link
                </Text>
                <FormControl id="email">
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={themeSchema[theme].buttonColor}
                        color={themeSchema[theme].btnTextColor}
                        _hover={{
                            bg: themeSchema[theme].hoverbuttonColor,
                            color: themeSchema[theme].hovetextColor
                        }}
                    >
                        Request Reset
                    </Button>
                </Stack>
                <Center>
                    <Link   //i am use next link so style is not run
                        href="/auth/login"
                    // color={themeSchema[theme].textColor}
                    // _hover={{
                    //     bg: themeSchema[theme].hoverbuttonColor,
                    //     color: themeSchema[theme].hovetextColor
                    // }}
                    >
                        go back to login.
                    </Link>
                </Center>
            </Stack>
        </Flex>
    );
}