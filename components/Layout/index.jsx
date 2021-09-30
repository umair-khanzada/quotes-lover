import { useRouter } from "next/dist/client/router";
import Footer from "../Footer";
import Header from "../Header";

import { Box } from "@chakra-ui/react";
import { AuthProvider, AuthConsumer } from "../../contexts/authContext";

export default function Layout({ children }) {
    const { pathname } = useRouter();

    return (
        <Box>
            {pathname !== "/auth/forget-password" ?
                <Header /> :
                null}
            {children}
            <Footer />
        </Box>
    )
}