import { DocumentScanner, EmojiPeople, HelpCenter, Info, MyLocation, PriceChange } from "@mui/icons-material"
import { Box, Button, type SxProps, Typography, useTheme, Fade } from "@mui/material"
import SectionTitle from "../common/SectionTitle"
import React from "react"
import GoogleAdsDemo from "public/images/home/google-ads.svg";
import FacebookAdsCellphone from "public/images/home/fb-ads-cellphone.svg";
import Link from "next/link"
import Image from "next/image";


interface FeatureCardProps {
    icon: React.ReactNode,
    titleIcon?: React.ReactNode,
    title: string,
    text: string,
    sx?: SxProps | undefined
}


function FeatureCard(props: FeatureCardProps) {
    const theme = useTheme()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: {md: '300px', xs: '100%'}, p: {md: '30px 10px', xs: '15px 10px'}, background: '#FFFFFF', boxShadow: theme.shadows[1], alignItems: 'center', borderRadius: '3px', ...props.sx }}>
            {props.icon}
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: '12px' }}>
                <Typography variant="h6" sx={{ textAlign: 'center', mb: 2, fontSize: 14 }}>{props.titleIcon}{props.title}</Typography>
                <Typography variant="body2" paragraph sx={{ fontSize: 13, color: 'grey.500', textAlign: 'justify' }}>{props.text}</Typography>
            </Box>
        </Box>
    )
}


export default function AdvertisementSection() {
    const theme = useTheme()
    const [slide, setSlide] = React.useState(0)
    React.useEffect(() => {
        const timer = setInterval(() => {
            setSlide((prev) => { return prev === 1 ? 0 : 1 })
        }, 7000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <Box id="advertisement" component="section" sx={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', px: {md: 10, xs: 2} }}>
            <SectionTitle title="Publicité numérique" subtitle="pour atteindre un retour sur investissement élevé" />
            <Box sx={{ display: 'flex', alignItems: {xs: 'center'}, flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ display: 'flex', width: { md: '30%', xs: '100%' }, pl: {md: 3}, pr: {md: 15} }}>
                    <Fade in={slide === 0} unmountOnExit mountOnEnter timeout={800} easing="cubic-bezier(0.4, 0, 0.2, 1)">
                        <Box sx={{ display: slide === 0 ? 'block' : 'none', position: 'relative', width: {xs: '100%', md: '400'}, height: {xs: '50vh', md: '80vh'} }}>
                            <GoogleAdsDemo/>
                            {/* <Image src={GoogleAdsDemo} layout="fill" objectFit="contain" alt="Google ads" /> */}
                        </Box>
                    </Fade>
                    <Fade in={slide === 1} unmountOnExit mountOnEnter timeout={800} easing="cubic-bezier(0.4, 0, 0.2, 1)">
                        <Box sx={{ display: slide === 1 ? 'block' : 'none', position: 'relative', width: {xs: '100%', md: '400'}, height: {xs: '50vh', md: '80vh'} }}>
                            {/* <Image src={FacebookAdsCellphone} layout="fill" objectFit="contain" alt="Facebook ads" /> */}
                            <FacebookAdsCellphone/>
                        </Box>
                    </Fade>
                </Box>
                <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: {md: 'repeat(3, auto)', xs: '1fr'}, gridTemplateRows: {md: 'repeat(3, auto)', xs: 'repeat(auto, auto)'}, gap: '2em 1.5em', '& .MuiSvgIcon-root': { fontSize: 80, my: 2 } }}>
                        <Typography variant="h3" sx={{ gridColumnStart: 1, gridColumnEnd: { md: 4, xs: 2 }, textAlign: 'center' }}>Nous offrons tous les standards fiables et modernes de l&#39;industrie</Typography>
                        <FeatureCard icon={<EmojiPeople sx={{ color: '#357ED2', gridRowStart: 2 }} />} title="Attirez plus de clients sur votre site Web et à vos portes" text="Sans publicité, la probabilité que les clients acheteurs vous trouvent par hasard est excessivement faible. Prenez le dessus sur vos compétiteurs et grandisser votre bassin de clients." />
                        <FeatureCard icon={<MyLocation sx={{ color: '#DE2E2E', gridRowStart: 2 }} />} title="Ciblez la bonne clientèle avec les bons outils" text="Notre expertise avec les services de publicité de Google, Facebook et Instagram permet d'optimiser chaque dollar investit pour augmenter votre retour sur investissement (ROI)." />
                        <FeatureCard icon={<PriceChange sx={{ color: '#42CF7B', gridRowStart: 2 }} />} title="Budget adaptatif et coûts en fonction de la performance" text="Peu importe la taille du budget alloué à la publicité, elle reste êtremement bénéfique pour une entreprise. Vous pouvez parfois choisir de payer en fonction de la performance de vos annonces. " />
                        <Box sx={{ gridColumnStart: 1, gridColumnEnd: {md: 4, xs: 2}, display: 'flex', alignItems: 'center', background: 'white', boxShadow: theme.shadows[1], p: '20px 20px' }}>
                            <Info sx={{ color: '#FF0000', fontSize: '14px !important', mr: 2 }} />
                            <Typography variant="body2" paragraph sx={{ fontWeight: 500, width: '91%', mr: 1, color: 'grey.500' }}>Nos services s&#39;adaptent à vos besoins et la répartition du budget entre les différents services de publicité est déterminée dépendamment de votre public cible et votre manière de livrer vos services.</Typography>
                            <Link href="/blog/advertisement-service">
                                <Button variant="outlined">En savoir plus</Button>
                            </Link>
                        </Box>
                    </Box>
                    <Link href="/#quote">
                        <Button sx={{ mx: 'auto', mt: 3, mb: 2 }}><DocumentScanner />Obtenir ma soumission gratuite</Button>
                    </Link>
                    <Link href="#">
                        <Button variant="outlined" sx={{ mx: 'auto', mb: 6 }}><HelpCenter />En savoir plus</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}