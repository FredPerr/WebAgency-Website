import Footer from "components/footer"
import Navbar from "components/navbar"
import Layout from "."


type DefaultLayoutProps = {
    children: React.ReactNode,
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <Layout>
            <Navbar/>
            {children}
            <Footer/>
        </Layout>
    )
}