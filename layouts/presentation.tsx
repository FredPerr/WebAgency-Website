import { Box, Button, Divider, Typography } from "@mui/material"
import Footer from "components/footer"
import Navbar from "components/navbar"
import Link from "next/link"
import React from "react"
import Layout from "."


type DefaultLayoutProps = {
    children: React.ReactNode,
    name: string,
    subtitle?: string,
}

export default function PresentationLayout(props: DefaultLayoutProps) {
    return (
        <Layout>
            <Navbar />
            <Box sx={{ width: '90%', mx: 'auto', mt: 8, p: 8 }}>
                <Typography sx={{ fontSize: 30, color: 'primary.main', fontWeight: 600 }}>{props.name}</Typography>
                {props.subtitle && <Typography sx={{ mt: 3 }}>{props.subtitle}</Typography>}
            </Box>
            <Divider sx={{ width: '80%', mx: 'auto' }} />
            <Box sx={{ width: '80%', p: 5, borderRadius: 3, mx: 'auto' }}>
                {props.children}
            </Box>
            <Box sx={{display: 'flex', width: '100%', mx: 'auto', justifyContent: 'center',  mb: 5}}>
                <Link href="/#quote"><Button variant="contained" sx={{mr: 2}}>Obtenir ma soumission gratuite maintenant</Button></Link>
                <Link href="/#contact"><Button variant="outlined" sx={{ml: 2}}>Nous contacter</Button></Link>
            </Box>
            <Footer />
        </Layout>
    )
}