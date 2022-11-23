import { BorderColor, Dns, DocumentScanner, EmojiEvents, Explore, Https, Info, MobileFriendly, MyLocation, Palette, PlaylistAddCheck, QuestionAnswer, Savings, Security, Speed, Translate } from "@mui/icons-material"
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
        <Box sx={{ display: 'flex', p: '10px 10px', background: '#FFFFFF', boxShadow: theme.shadows[1], alignItems: 'center', borderRadius: '3px', ...props.sx }}>
            {props.icon}
            <Box sx={{ display: 'flex', flexDirection: 'column', ml: '12px' }}>
                <Typography variant="h6" sx={{fontSize: {xs: 13, md: 15, xl: 16}}}>{props.titleIcon}{props.title}</Typography>
                <Typography paragraph sx={{ fontSize: {xs: 10, md: 12, xl: 15}, color: 'grey.500', fontWeight: 500 }}>{props.text}</Typography>
            </Box>
        </Box>
    )
}



export default function WebsiteCreationSection() {
    const theme = useTheme()
    return (
        <Box id="web-creation" component="section" sx={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', px: {md: 10, xs: 2} }}>
            <SectionTitle title="Création d'un site Web" subtitle="complet et personalisé pour vos besoins" />
            <Box sx={{ display: 'flex', flexDirection: {md: 'row', xs: 'column-reverse'} }}>
                <Box sx={{ width: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: {md: '1fr 1fr', xs: '1fr'}, gridTemplateRows: {md: 'repeat(6, auto)', xs: 'repeat(10, auto)'}, gap: '1em 1.5em', '& .MuiSvgIcon-root': { fontSize: 23 } }}>
                        <Typography variant="h3" sx={{ gridColumnStart: 1, gridColumnEnd: {md: 3, xs: 2}, textAlign: 'center' }}>Nous offrons tous les standards fiables et modernes de l&#39;industrie</Typography>
                        <FeatureCard icon={<Palette sx={{ color: '#41A4FF' }} />} title="Interface d'utilisateur intuitive" text="Une interface intuitive et professionnelle optimize la rétention et votre taux de conversion en ventes." />
                        <FeatureCard icon={<EmojiEvents sx={{ color: '#FFE768' }} />} title="Optimisations SEO" text="Soyez dans les premiers rangs des sites proposés sur Google. C'est un immense avantage qui rapporte gros." />
                        <FeatureCard icon={<MobileFriendly sx={{ color: '#455580' }} />} title="Adapté pour mobile" text="Environ 60% des recherches sont faites à partir d'un appareil mobile. Votre site doit être adapté à tous les écrans." />
                        <FeatureCard icon={<Translate sx={{ color: '#6A89DB' }} />} title="Traduction anglaise et française optionelle" text="Rejoignez et attirez un plus grand bassins de clients. Les clients sont davantage réceptif à leur langue maternelle." />
                        <FeatureCard icon={<Security sx={{ color: '#DE2222' }} />} title="Sécurités contre les cyberattaques" text="Les entreprises qui ont beaucoup de traffic sur le Web ne peuvent se permettre de perdre un service temporairement." />
                        <FeatureCard icon={<Https sx={{ color: '#F69158' }} />} title="Certification SSL (https)" text="Les utilisateurs sont craintifs des sites non-certifiés, ce qui nuit à la possibilité de vente." />
                        <FeatureCard icon={<Dns sx={{ color: '#CF5EA2' }} />} title="Gestion du Nom de Domaine (DNS)" text="Les noms de domaine sont les portes d'entrée de votre site Web. Bien les choisirs et bien les configurer est primordial." />
                        <FeatureCard icon={<BorderColor sx={{ color: '#FF0000' }} />} titleIcon={<Info sx={{ fontSize: '10px !important', mr: 1, color: '#FF0000' }} />} title="Fonctionalités personnalisées" text="Nous créons des fonctionalité personnalisée qui remplissent vos critères, quels qu'ils soient." />
                        <Box sx={{ gridColumnStart: 1, gridColumnEnd: {md: 3, xs: 2} , display: 'flex', alignItems: 'center', background: 'white', boxShadow: theme.shadows[1], p: '12px 20px' }}>
                            <Info sx={{ color: '#FF0000', fontSize: '14px !important', mr: 2 }} />
                            <Typography paragraph sx={{ fontSize: {xs: 10, md: 12, xl: 15}, fontWeight: 500, width: '91%', mr: 1, color: 'grey.500' }}>Nous offrons également la création de sites Web plus complexes nécéssitant des bases de données et/ou des fonctionalités particulières. Faites-nous-en part dans votre demande de soumission!</Typography>
                            <Link href="/blog/web-creation-service">
                                <Button variant="outlined">En savoir plus</Button>
                            </Link>
                        </Box>
                    </Box>
                    <Link href="/#quote"><Button sx={{ mx: 'auto', mt: 3, mb: 2 }}><DocumentScanner />Obtenir ma soumission gratuite</Button></Link>
                    <Link href="/#contact"><Button variant="outlined" sx={{ mx: 'auto', mb: 6 }}><QuestionAnswer />Discuter de mon projet</Button></Link>
                </Box>
                <Box sx={{ display: 'flex', width: {xs: '90%', md: '40%'}, height: {md: '80vh', xs: '40vh'}, position: 'relative', ml: 3 }}>
                    <Image src={"/images/home/website-creation-example.png"} layout="fill" objectFit="contain" alt="Création Web" />
                </Box>
            </Box>
        </Box>
    )
}