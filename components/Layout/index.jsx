import { useRouter } from "next/dist/client/router";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
    const { pathname } = useRouter();

    return (
        <>
            {pathname !== "/auth/forget-password" ? <Header /> : null}
            {children}
            <Footer />
        </>
    )
}