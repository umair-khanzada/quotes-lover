import { useContext, useEffect } from 'react';
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    useColorModeValue
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';

import AuthContext, { AuthProvider, types } from '../../contexts/authContext';
import { colors, themeSchema } from '../../constants/index';
import { ThemeContext } from '../../contexts/themeContext';

const coverImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80';


export default function LoginPage() {
    const router = useRouter();
    const [theme, useTheme] = useContext(ThemeContext);
    // const [{ _id, user_name, phone, email, token },
    // ] = useContext(AuthContext);
    const [
        { email, phone, token, user_name, __v, _id },
        dispatch] = useContext(AuthContext);

    useEffect(() => {
        if (token) router.push('/')
    }, [token])

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {

        userLoginHandler(values);
    }
    async function userLoginHandler(values) {
        const responce = await fetch('http://localhost:4001/api/login', {
            method: 'POST',
            body: JSON.stringify(
                // {
                //     email: "fahad@gmail.com",
                //     password: "1234asdf"
                // }
                values
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await responce.json();
        dispatch({ type: types.UPDATE_AUTH, data })


        // selectors(
        //     {
        //         action: types.UPDATE_AUTH,
        //         data
        //     }
        // );
    }

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl id="email" isInvalid={errors.email}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input
                                        id="email"
                                        placeholder="email"
                                        {...register("email", {
                                            required: "This is required",
                                        })}
                                        type="email" />
                                    <FormErrorMessage>
                                        {errors.email && errors.email.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl id="password" isInvalid={errors.password}>
                                    <FormLabel>Password</FormLabel>
                                    <Input
                                        id="password"
                                        placeholder="password"
                                        {...register("password", {
                                            required: "This is required",
                                            minLength: {
                                                value: 8,
                                                message: 'must be 8 character'
                                            }
                                        })}
                                        type="password" />
                                    <FormErrorMessage>
                                        {errors.password && errors.password.message}
                                    </FormErrorMessage>
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
                                    <Button
                                        bg={themeSchema[theme].buttonColor}
                                        color={themeSchema[theme].btnTextColor}
                                        _hover={{
                                            bg: themeSchema[theme].hoverbuttonColor,
                                            color: themeSchema[theme].hovetextColor
                                        }}
                                        variant={'solid'}
                                        type="submit">
                                        Log in
                                    </Button>
                                </Stack>
                            </form>
                        </Stack>
                    </Stack>
                </Flex>
            </Flex>

            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={`${coverImage}`}
                />
            </Flex>
        </Stack>
    );
}