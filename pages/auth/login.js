import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    useColorModeValue
} from '@chakra-ui/react';
import { colors } from '../../constants/theme';
import Link from 'next/link';

export default function login() {
    return (
        <Stack minH={'100vh'}
            bg={useColorModeValue(colors.background)}
            direction={{ base: 'column', md: 'row' }}>

            <Flex p={8} flex={1} align={'center'} justify={'center'}>

                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={useColorModeValue(colors.background)}>
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
                            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" />
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
                                    <Checkbox>Remember me</Checkbox>
                                    <Link
                                        href="/auth/forget-password"
                                        color={'teal.500'}>Forgot password?</Link>
                                </Stack>
                                <Button colorScheme={'teal'} variant={'solid'}>
                                    Log in
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>
            </Flex>

            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
    );
    // return <>
    //     <h1>Login Page</h1>
    //     <Link href="/auth/forget-password">
    //         forget-password
    //     </Link>
    // </>
}