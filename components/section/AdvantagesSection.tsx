import { Explore, MyLocation, PlaylistAddCheck, Savings, Speed } from "@mui/icons-material"
import { Box, Button, Typography, useTheme } from "@mui/material"
import Link from "next/link"
import SectionTitle from "../common/SectionTitle"


interface AdvantageCardProps {
    icon: React.ReactNode,
    title: string,
    text: string,
}

function AdvantageCard(props: AdvantageCardProps) {
    const theme = useTheme()
    return (
        <Box sx={{ display: 'flex', p: {md: '20px 30px', xs: '10px 15px'}, background: '#FFFFFF', boxShadow: theme.shadows[1], alignItems: 'center', borderRadius: '3px' }}>
            {props.icon}
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: '20px' }}>
                <Typography variant="h5" sx={{ mb: 0.7 }}>{props.title}</Typography>
                <Typography variant="body2" paragraph>{props.text}</Typography>
            </Box>
        </Box>
    )
}



export default function AdvantagesSection() {
    return (
        <Box id="advantages" component="section" sx={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', px: {xs: 3, md: 10} }}>
            <SectionTitle title="Les avantages" subtitle="en faisant affaire avec nous" />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: {md: '1fr 1fr', xs: '1fr'}, gridTemplateRows: {md: 'auto auto', xs: 'repeat(4, 1fr)'}, gap: {md: '3em 4em', xs: '3em 1em'}, '& .MuiSvgIcon-root': { fontSize: {md: 70, xs: 40} }, 'p': { textAlign: 'justify' } }}>
                    <AdvantageCard icon={<Savings sx={{ color: '#E58FDD' }} />} title="Retour sur investissements élevé" text="Nos sites Web optimisés pour le classement et la publicité ciblée permettent de maximiser votre apport de nouveaux clients et de les garder. Chaque dollar est utilisé avec les outils stratégiques adaptés à vos besoins pour avoir le retour sur investissements le plus élevé possible." />
                    <AdvantageCard icon={<Speed sx={{ color: '#963EEE' }} />} title="Optimisez et modernisez votre entreprise " text="Presque toute la population se tourne déjà vers le Web pour trouver les services qui lui convient. Plusieurs entreprises perdent des revenus en raison des compétititeurs qui prend des parts du marché en se positionnent sur le Web. Devenez l'étoile brillante de votre secteur d'activité sur le Web avec nos différents services." />
                    <AdvantageCard icon={<MyLocation sx={{ color: '#DE2E2E' }} />} title="Ciblez efficacement la bonne clientèle" text="Arrêtez de jouer à cache-cache avec vos potentiels clients  puisqu'ils trouvent vos compétiteurs en premier. Avec nos services de publicités ciblées, vous devenez important parmi vos compétiteurs sur le plan numérique, peu importe la taille de votre entreprise." />
                    <AdvantageCard icon={<PlaylistAddCheck sx={{ color: '#65D15C' }} />} title="Obtenez la solution Web complète" text="Les entreprises doivent très souvent faire affaire avec plusieurs contractants, ce qui rend difficile la coordination entre les différents services. Avec notre solution Web complètes comprenant la création de sites Web, la publicité numérique et l'hébergement Web, vos services s'harmonisent pour livrer de meilleurs résultats sans tracas." />
                </Box>
                <Link href="/#web-creation">
                    <Button sx={{ mx: 'auto', mt: 3, mb: 6 }}><Explore />Explorer les services</Button>
                </Link>
            </Box>
        </Box>
    )
}