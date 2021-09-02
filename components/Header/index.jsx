import { useCallback } from 'react';
import { Flex, Spacer, Box, Text, Heading, Button, Link } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

const Header = ({ brandName, }) => {
    const { push } = useRouter();

    const onClickLoginHandler = useCallback(() => {
        push('/auth/login')
    }, []);

    const onClickRegistrationHandler = useCallback(() => {
        push('/auth/registration')
    }, []);

    const onClickLogoHandler = useCallback(() => {
        push('/')
    }, []);

    return (
        <Flex p="2">
            <Box>
                <Heading
                    onClick={onClickLogoHandler}
                    size="md">{brandName}
                </Heading>
            </Box>

            <Spacer />

            <Box>
                <Button
                    onClick={onClickRegistrationHandler}
                    colorScheme="teal" mr="4">
                    Sign Up
                </Button>
                <Button
                    onClick={onClickLoginHandler}
                    colorScheme="teal">Log in</Button>
            </Box>
        </Flex>
    );
}

export default Header;

Header.defaultProps = {
    brandName: 'Quotes App',
}