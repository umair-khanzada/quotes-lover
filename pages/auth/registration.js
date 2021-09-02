import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    // Link,
    Stack,
    Image,
    useColorModeValue
} from '@chakra-ui/react';

import Link from 'next/link'

const coverImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80';

export default function registration() {
    return (
        <Stack minH={'100vh'}
            bg={useColorModeValue('teal.50', 'gray.800')}
            direction={{ base: 'column', md: 'row' }}>

            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={`${coverImage}`}
                />
            </Flex>


            <Flex p={8} flex={1} align={'center'} justify={'center'}>

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

                        <Stack spacing={4} w={'full'} maxW={'md'}>
                            <Heading fontSize={'2xl'}>Sign up to your account</Heading>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" />
                            </FormControl>
                            <FormControl id="user">
                                <FormLabel>User name</FormLabel>
                                <Input type="text" />
                            </FormControl>
                            <FormControl id="phone">
                                <FormLabel>Phone number</FormLabel>
                                <Input type="number" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" />
                            </FormControl>
                            <Stack spacing={6}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <label>You have already account.</label>
                                    <Link
                                        href="/auth/login"
                                        color={'teal.500'}>Log in</Link>
                                </Stack>
                                <Button colorScheme={'teal'} variant={'solid'}>
                                    Sign up
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>
            </Flex>


        </Stack>
    );
}