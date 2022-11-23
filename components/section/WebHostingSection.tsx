import { BorderColor, CloudDownload, CloudSync, Dns, DocumentScanner, EmojiEvents, Engineering, Explore, HelpCenter, Https, Info, MobileFriendly, Palette, QuestionAnswer, Security, Speed, Translate, TrendingUp } from "@mui/icons-material"
import { Box, Button, type SxProps, Typography, useTheme } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import SectionTitle from "../common/SectionTitle"


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
        <Box sx={{ display: 'flex', p: {md: '10px 10px', xs: '5px'}, background: '#FFFFFF', boxShadow: theme.shadows[1], alignItems: 'center', borderRadius: '3px', ...props.sx }}>
            {props.icon}
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: '12px' }}>
                <Typography variant="h6">{props.titleIcon}{props.title}</Typography>
                <Typography variant="body2" paragraph sx={{ fontSize: 11, color: 'grey.500', fontWeight: 500 }}>{props.text}</Typography>
            </Box>
        </Box>
    )
}



export default function WebHostingSection() {
    const theme = useTheme()
    return (
        <Box id="hosting" component="section" sx={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', px: {md: 10, xs: 2} }}>
            <SectionTitle title="Gestion de l'hébergement Web" subtitle="pour évitez les nombreux embûches techniques et les dépenses inutiles" />
            <Box sx={{ display: 'flex', flexDirection: {xs: 'column-reverse', md: 'row'} }}>
                <Box sx={{ width: {md: '50%', xs: '100%'}, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gridTemplateRows: 'repeat(6, auto)', gap: '1em 1.5em', '& .MuiSvgIcon-root': { fontSize: 23 } }}>
                        <Typography variant="h3" sx={{ textAlign: 'center' }}>Toutes les caractéristiques clés de l&#39;hébergement Web</Typography>
                        <FeatureCard icon={<Speed sx={{ color: '#EE3E3E' }} />} title="Chargement ultra-rapide des pages et des données" text="Nos sites Web utilisent des technologies modernes, qui ont fait leurs preuves sur le marché, permettent de créer des sites Web ultra-rapides." />
                        <FeatureCard icon={<CloudSync sx={{ color: '#5AC1ED' }} />} title="+99.99% du temps minimalement en fonction" text="Lorsqu'un site Web est mal hébergé, il peut tomber hors ligne relativement longtemp, affectant directement l'image et les revenus de l'entreprise concernée." />
                        <FeatureCard icon={<Engineering sx={{ color: '#FF8F27' }} />} title="Maintenance et support continu" text="La plupart des sites Web finissent par rencontrer des problème avec les serveurs physiques. Lorsque ces embûches arrivent, il est primordial de les régler très rapidement." />
                        <FeatureCard icon={<TrendingUp sx={{ color: '#49BE20' }} />} title="Structure adaptative à la croissance rapide" text="Lorsqu'un site Web devient surchargé parce que beacoup de clients l'utilisent, il devient nécéssaire de croître la structure d'hébergement de son site Web et ses composantes." />
                        <FeatureCard icon={<CloudDownload sx={{ color: '#B020C8' }} />} title="Sauvegardes régulières" text="La plupart des sites Web finissent par rencontrer des problème avec les serveurs physiques. Lorsque ces embûches arrivent, il est primordial de les régler très rapidement." />
                    </Box>
                    <Link href="/#quote">
                        <Button sx={{ mx: 'auto', mt: 3, mb: 2 }}><DocumentScanner />Obtenir ma soumission gratuite</Button>
                    </Link>
                    <Link href="/blog/hosting-service">
                        <Button variant="outlined" sx={{ mx: 'auto', mb: 6 }}><HelpCenter />En savoir plus</Button>
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'start', flexGrow: 1, width: {md: '50%', xs: '100%'}, position: 'relative', ml: 3 }}>
                    <Image src={"/images/home/server-front.jpg"} width={800 / 3} height={800 / 3} objectFit="contain" alt="server front" />
                    <Image src={"/images/home/server-back.jpg"} width={800 / 3} height={800 / 3} objectFit="contain" alt="server back" />
                </Box>
            </Box>
        </Box>
    )
}