import { Box, Button, Typography, IconButton, LinearProgress, Fade } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import WebsiteCreationSvg from "public/images/hero/website-creation.svg?url"
import AdvertisementSvg from "public/images/hero/advertisement.svg?url"
import HostingSvg from "public/images/hero/hosting.svg?url"
import React from "react";
import { Circle, CircleOutlined } from "@mui/icons-material";
import { useTranslation } from "next-i18next";

interface IHeroSlideProps {
    index: number,
    currentSlide: number,
    title: string,
    subtitle: string,
    aspects: Array<string>,
    buttonContained: { name: string, href: string },
    buttonOutlined: { name: string, href: string },
    imageSrc: string,
    imageAlt: string
}


function HeroSlide(props: IHeroSlideProps) {
    return (
        <Fade in={props.index === props.currentSlide} easing="cubic-bezier(0.4, 0, 0.2, 1)" timeout={700} >
            <Box sx={{ justifyContent: 'start', width: '100%', height: '100%', minHeight: '100%', mt: 8, display: props.currentSlide === props.index ? 'flex': 'none', flexDirection: {xs: 'column-reverse', md: 'row'}, alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', width: {xs: '90%', md:'50%'}, mt: {xs: 5, md: 0}, pl: {md: 10, xs: 1}, 'h1': { fontSize: {xs: 20, md: 50}, color: 'primary.main', fontWeight: 700, mb: 2 }, 'h6': { color: 'text.main', fontWeight: 500, fontSize: 15, mb: 2 } }}>
                    <Typography variant="h1" sx={{ textTransform: 'uppercase' }}>{props.title}</Typography>
                    <Typography variant="subtitle1" sx={{ ml: 0.5 }}>{props.subtitle}</Typography>
                    <Box sx={{ mt: 2, mb: 4, ml: 1 }}>
                        {props.aspects.map((value) => { return <Typography key={value} variant="body2">&#x2022; {value}</Typography> })}
                    </Box>
                    <Link href={props.buttonContained.href}><Button variant="contained" sx={{ px: 3, py: 1, mb: 2 }}>{props.buttonContained.name}</Button></Link>
                    <Link href={props.buttonOutlined.href}><Button variant="outlined" sx={{ px: 3, py: 1 }}>{props.buttonOutlined.name}</Button></Link>
                </Box>
                <Box sx={{ width: '50%', display: 'flex', height: {md: '60%', xs: '30%'}, position: 'relative' }}>
                    <Image src={props.imageSrc} layout="fill" objectFit="contain" alt={props.imageAlt} />
                </Box>
            </Box>
        </Fade>
    )
}


export default function Hero() {
    const [slide, setSlide] = React.useState(0)
    const [progress, setProgress] = React.useState(0)
    React.useEffect(()=> {
        const timer = setInterval(()=> {
            setProgress((progress)=> {
                if (progress === 100) {
                    setSlide((last)=> {return last + 1 > 2 ? 0: last + 1})
                    return 0;
                }
                return Math.min(progress + 1, 100)
            })
        }, 150)
        return ()=> {
            clearInterval(timer)
        }
    }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', backgroundColor: '#FFFFFF', alignItems: 'center' }}>

            <HeroSlide
                index={0} currentSlide={slide}
                title={"Développement Web"} subtitle="Prenez votre place en ligne et générer plus de revenus avec un site Web optimizé pour votre PME."
                imageSrc={WebsiteCreationSvg} imageAlt="Développement Web"
                aspects={['Touchez un marché incontournable', "Générez plus de prospects avec des clients acheteurs", "Prenez de force votre place parmi la compétition"]}
                buttonContained={{ name: 'En savoir plus', href: '/#advantages' }}
                buttonOutlined={{ name: 'Voir tous les services', href: '/#services' }}
            />

            <HeroSlide
                index={1} currentSlide={slide}
                title={"Publicité numérique"} subtitle="Ciblez les clients potentiels directement pour croître votre PME maintenant."
                imageSrc={AdvertisementSvg} imageAlt="Publicité numérique"
                aspects={['Utilisez les algorithmes des réseaux sociaux pour trouver vos clients', "Livrez l'information plus efficacement aux clients", "Transformer vos prospects en ventes"]}
                buttonContained={{ name: 'En savoir plus', href: '/#advantages' }}
                buttonOutlined={{ name: 'Voir tous les services', href: '/#services' }}
            />

            <HeroSlide
                index={2} currentSlide={slide}
                title={"Hébergement Web"} subtitle="Gestion totale et continu de l'installation et de la maintenance."
                imageSrc={HostingSvg} imageAlt="Hébergement Web"
                aspects={["Évitez les embûches techniques de l'installation et de la maintenance", "Détenez un site êxtrêmement fiable et rapide", "Payez uniquement selon vos besoins"]}
                buttonContained={{ name: 'En savoir plus', href: '/#advantages' }}
                buttonOutlined={{ name: 'Voir tous les services', href: '/#services' }}
            />

            <Box sx={{ position: 'absolute', left: '50%', top: '92vh', transform: 'translateX(-50%)', display: 'flex', '.MuiSvgIcon-root': { fontSize: 12, color: 'grey.400' } }}>
                <IconButton onClick={() => { if (slide !== 0) {setSlide(0); setProgress(0)} }}>{slide === 0 ? <Circle /> : <CircleOutlined />}</IconButton>
                <IconButton onClick={() => { if (slide !== 1) {setSlide(1); setProgress(0)} }}>{slide === 1 ? <Circle /> : <CircleOutlined />}</IconButton>
                <IconButton onClick={() => { if (slide !== 2) {setSlide(2); setProgress(0)} }}>{slide === 2 ? <Circle /> : <CircleOutlined />}</IconButton>
            </Box>
            <LinearProgress variant="determinate" value={progress} sx={{position: 'absolute', top: '99.5vh', left: 0, width: '100vw'}} />
        </Box>
    )
}