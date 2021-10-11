import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Heading,
    Input,
    // Link,
    Stack,
    Image,
    useColorModeValue
} from '@chakra-ui/react';

import Link from 'next/link';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { themeSchema } from '../../constants';
import { ThemeContext } from '../../contexts/themeContext';

const coverImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80';

export default function registration() {
    const [theme, useTheme] = useContext(ThemeContext);
    console.log(theme, "<.")
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();

    function onSubmit(values) {
        userRegisterHandler(values);
    }

    async function userRegisterHandler(values) {
        const responce = await fetch(`http://localhost:4001/api/register`, {
            method: 'POST',
            body: JSON.stringify(values),
            // body: values,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        const data = await responce.json();
        //await responce 
        // router.push('/');
    }

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

                                <FormControl id="user_name" isInvalid={errors.user_name}>
                                    <FormLabel>User name</FormLabel>
                                    <Input
                                        id="user_name"
                                        placeholder="user name"
                                        {...register("user_name", {
                                            required: "This is required",
                                        })}
                                        type="text" />
                                    <FormErrorMessage>
                                        {errors.user_name && errors.user_name.message}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl id="phone" isInvalid={errors.phone}>
                                    <FormLabel>Phone number</FormLabel>
                                    <Input
                                        id="phone"
                                        placeholder="phone"
                                        {...register("phone", {
                                            required: "This is required",
                                        })}
                                        type="number" />
                                    <FormErrorMessage>
                                        {errors.phone && errors.phone.message}
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
                                        <label>You have already account.</label>
                                        <Link
                                            href="/auth/login"
                                            color={'teal.500'}>Log in</Link>
                                    </Stack>

                                    <Button
                                        bg={themeSchema[theme].buttonColor}
                                        color={themeSchema[theme].btnTextColor}
                                        _hover={{
                                            bg: themeSchema[theme].hoverbuttonColor,
                                            color: themeSchema[theme].hovetextColor
                                        }}
                                    // variant={'solid'}
                                    // type="submit"
                                    >
                                        Sign up123
                                    </Button>

                                </Stack>
                            </form>
                        </Stack>
                    </Stack>
                </Flex>
            </Flex>


        </Stack>
    );
}

