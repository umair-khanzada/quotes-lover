import { useCallback, useContext, useEffect } from 'react';
import { Flex, Spacer, Box, Text, Heading, Button, Link } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import AuthContext, { AuthConsumer, types } from '../../contexts/authContext';
import { defaultAuth } from '../../reducers/authReducer';
import DropDownMenu from '../Menu';


const Header = ({ brandName, auth }) => {
    const { push } = useRouter();
    const [state, dispatch] = useContext(AuthContext);

    const {
        email, phone, token, user_name, __v, _id
    } = state;

    // useEffect(() => {
    // }, [token])

    const onClickLoginHandler = useCallback(() => {
        push('/auth/login')
    }, []);

    const onClickRegistrationHandler = useCallback(() => {
        push('/auth/registration')
    }, []);

    const onClickLogoHandler = useCallback(() => {
        push('/')
    }, []);

    const onClickLogoutHandler = () => {
        dispatch({
            type: types.UPDATE_AUTH,
            data: defaultAuth
        });
    }

    return (
        <Flex p="8">
            <Box>
                <Heading
                    onClick={onClickLogoHandler}
                    size="md">{brandName}
                </Heading>
            </Box>

            <Spacer />

            {!token ? <Box>
                <Button
                    onClick={onClickRegistrationHandler}
                    colorScheme="teal" mr="4">
                    Sign Up
                </Button>
                <Button
                    onClick={onClickLoginHandler}
                    colorScheme="teal">Log in</Button>
            </Box> :
                <Box>
                    <DropDownMenu />
                    {/* <Button
                        onClick={onClickLogoutHandler}
                        colorScheme="teal">Log out</Button>
                    <Text>{user_name}</Text> */}
                </Box>}
        </Flex>
    );
}

export default Header;

Header.defaultProps = {
    brandName: 'Quotes App',
}