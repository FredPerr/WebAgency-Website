import { Box, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LogoNameSvg from "public/images/logos/logo-name.svg?url"

export default function Footer() {
    return (
        <Box component="footer" sx={{ p: 3, display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'space-evenly', borderTop: '1px solid gray', borderColor: 'grey.300', '& .MuiListItem-root': { fontSize: 12, pl: 0, cursor: 'pointer' }, '& .MuiTypography-root': { mb: 1 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link href="/">
                    <Box sx={{ width: '200px', height: '80px', position: 'relative', cursor: 'pointer' }}>
                        <Image src={LogoNameSvg} layout="fill" objectFit="contain" alt="WebAgency logo" />
                    </Box>
                </Link>

                <Typography variant="subtitle2" sx={{ fontSize: 9, fontWeight: 400, textAlign: 'center' }}>© 2022 Tous droits réservés, WebAgency</Typography>
            </Box>
            <List>
                <Typography variant="h6">Services</Typography>
                <Link href="/#web-creation"><ListItem>Création de site Web</ListItem></Link>
                <Link href="/#advertisement"><ListItem>Publicité numérique</ListItem></Link>
                <Link href="/#hosting"><ListItem>Gestion de l&#39;hébergement Web</ListItem></Link>
            </List>


            <List>
                <Typography variant="h6">Communication</Typography>
                <Link href="/#quote"><ListItem>Obtenir ma soumission gratuite</ListItem></Link>
                <Link href="/#contact"><ListItem>Nous contacter</ListItem></Link>
            </List>

            <List>
                <Typography variant="h6">Légal</Typography>
                <Link href="/legal/privacy-policy"><ListItem>Politique de confidentialité</ListItem></Link>
                <Link href="/legal/terms-of-use"><ListItem>Termes d&#39;utilisation</ListItem></Link>
                <Link href="/legal/terms-of-service"><ListItem>Termes de service</ListItem></Link>
            </List>
        </Box>
    )
}