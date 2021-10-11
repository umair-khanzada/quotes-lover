import { useCallback, useContext, useEffect } from 'react';
import {
    Flex, Spacer, Box, Text, Heading, Button, Switch,
    useColorMode, FormControl,
    FormLabel,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import AuthContext, { AuthConsumer, types } from '../../contexts/authContext';
import { defaultAuth } from '../../reducers/authReducer';
import DropDownMenu from '../Menu';
import { ThemeContext } from '../../contexts/themeContext';
import { themeSchema } from '../../constants';


const Header = ({ brandName, auth }) => {
    const { push } = useRouter();
    const [stateAuth, dispatchAuth] = useContext(AuthContext);
    const [theme, useTheme] = useContext(ThemeContext);
    const { colorMode, toggleColorMode } = useColorMode();


    const {
        email, phone, token, user_name, __v, _id
    } = stateAuth;

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

    const onClickContextTheme = () => {
        useTheme({
            type: theme === "dark" ? "light" : "dark"
        });
    }



    return (
        <Flex p="8">
            <Box b>
                <Heading
                    onClick={onClickLogoHandler}
                    size="md">{brandName}
                </Heading>
            </Box>

            <Spacer />

            <Box>
                {/* <Button
                    mr="5"
                    bg={themeSchema[theme].buttonColor}
                    color={themeSchema[theme].btnTextColor}
                    _hover={{
                        bg: themeSchema[theme].hoverbuttonColor,
                        color: themeSchema[theme].hovetextColor
                    }}
                    onClick={toggleColorMode}>
                    Toggle Theme {colorMode === "light" ? "Dark" : "Light"}
                </Button> */}
                <Box display="flex" h="10" alignItems="center" justifyContent="center" mr="4">
                    <Text>Light</Text>
                    <Switch pl="2" pr="2"
                        colorScheme={themeSchema["light"].buttonColor}
                        //  isChecked={theme === "dark"}
                        //   onChange={onClickContextTheme} 
                        isChecked={colorMode === "dark"}
                        onChange={toggleColorMode}
                        id="theme_alert" />
                    <Text>Dark</Text>
                </Box>

                {/* <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="theme_alert" mb="0">
                        Light
                    </FormLabel>
                    <Switch isChecked={theme === "dark"} onChange={onClickContextTheme} id="theme_alert" />
                    <FormLabel htmlFor="theme_alert" mb="0">
                        Dark
                    </FormLabel>
                </FormControl> */}

                {/* <Button
                    mr="5"
                    bg={themeSchema[theme].buttonColor}
                    color={themeSchema[theme].btnTextColor}
                    _hover={{
                        bg: themeSchema[theme].hoverbuttonColor,
                        color: themeSchema[theme].hovetextColor
                    }}
                    onClick={onClickContextTheme}>
                    Context Theme {theme}
                </Button> */}
            </Box>

            {!token ? <Box>
                <Button
                    bg={themeSchema[theme].buttonColor}
                    color={themeSchema[theme].btnTextColor}
                    _hover={{
                        bg: themeSchema[theme].hoverbuttonColor,
                        color: themeSchema[theme].hovetextColor
                    }}
                    onClick={onClickRegistrationHandler}
                    colorScheme="teal" mr="4">
                    Sign Up
                </Button>
                <Button
                    bg={themeSchema[theme].buttonColor}
                    color={themeSchema[theme].btnTextColor}
                    _hover={{
                        bg: themeSchema[theme].hoverbuttonColor,
                        color: themeSchema[theme].hovetextColor
                    }}
                    onClick={onClickLoginHandler}
                    colorScheme="teal">Log in</Button>
            </Box> :
                <Box>
                    <DropDownMenu />
                </Box>}
        </Flex>
    );
}

export default Header;

Header.defaultProps = {
    brandName: 'Quotes App',
}