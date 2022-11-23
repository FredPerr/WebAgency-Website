import { Menu } from "@mui/icons-material";
import { AppBar, Box, Button, Drawer, IconButton, Typography, useScrollTrigger } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LogoName from "public/images/logos/logo-name.svg?url"
import React from "react";


function NavLinks(props: { children?: React.ReactNode, flexColumn?: boolean }) {
    return (
        <Box sx={{ display: { md: 'flex', xs: props.flexColumn? 'flex': 'none' }, flexDirection: props.flexColumn ? 'column' : 'row', '& .MuiTypography-root': { fontWeight: 500, color: 'primary.main', fontSize: { md: 13, xs: 12 }, cursor: 'pointer', my: props.flexColumn ? 2: 0, mx: { md: 3, xs: 1 } }}}>
            <Link href="/#web-creation"><Typography>Services</Typography></Link>
            <Link href="/#contact"><Typography>Contact</Typography></Link>
            <Link href="/blog"><Typography>Blog</Typography></Link>
            <Link href="/about"><Typography>À propos</Typography></Link>
            {props.children}
        </Box>
    )
}


export default function Navbar() {
    const { locale } = useRouter()
    const [navDrawerOpen, setNavDrawerOpen] = React.useState(false);
    return (
        <AppBar sx={{ background: "white", borderBottom: '1px solid lightgrey' }}>
            <IconButton sx={{display: {xs: 'block', md: 'none'}}} onClick={() => setNavDrawerOpen(true)}><Menu sx={{ color: 'grey.400' }} /></IconButton>
            <Link href="/">
                <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <Image src={LogoName} width={130} height={50} alt="WebAgency logo" />
                </Box>
            </Link>
            <Drawer anchor="left" open={navDrawerOpen} onClose={() => { setNavDrawerOpen(false) }}>
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
                    <Image src={LogoName} width={130} height={50} alt="WebAgency logo" />
                    <Box sx={{m: 2}}>
                        <NavLinks flexColumn>
                            <Link href="/#quote"><Typography>Obtenir ma soumission gratuite</Typography></Link>
                        </NavLinks>
                    </Box>
                </Box>
            </Drawer>
            <Box component="nav" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexGrow: 1, ml: { md: 12, xs: 3 }}}>
                <NavLinks />
                <Box sx={{ display: 'flex' }}>
                    <Link href="/#quote">
                        <Button variant="contained" sx={{my: {xs: 0.5}}}>Obtenir ma soumission gratuite</Button>
                    </Link>
                    <Box sx={{ display: 'flex', alignItems: 'center', '& .MuiButton-root': { color: 'grey.600' } }}>
                        {locale === "fr" ?
                            <Link href="/" locale="en"><Button variant="text">EN</Button></Link>
                            :
                            <Link href="/" locale="fr"><Button variant="text">FR</Button></Link>
                        }
                    </Box>
                </Box>
            </Box>
        </AppBar>
    )
}