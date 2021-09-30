import { useContext } from 'react';
import Login_ from '../../components/Login'
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
import { useForm } from 'react-hook-form';

import { colors } from '../../constants/theme';
import AuthContext, { AuthProvider, types } from '../../contexts/authContext';

const coverImage = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80';

export default function login() {
    return (
        <Login_ />
    );
}