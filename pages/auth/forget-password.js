import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    Link,
    useColorModeValue,
    Center,
} from '@chakra-ui/react';

export default function forgetPassword() {
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
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Forgot your password?
                </Heading>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
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
                        bg={'teal.400'}
                        color={'white'}
                        _hover={{
                            bg: 'teal.500',
                        }}>
                        Request Reset
                    </Button>
                </Stack>
                <Center>
                    <Link
                        href="/auth/login"
                        color={'teal.300'}
                        _hover={{
                            color: 'teal.500',
                        }}>
                        go back to login.
                    </Link>
                </Center>
            </Stack>
        </Flex>
    );
}