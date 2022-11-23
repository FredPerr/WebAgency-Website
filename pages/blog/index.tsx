import DefaultLayout from "layouts/default"
import { type NextPageWithLayout } from "layouts"
import { Box, Button, Typography, useTheme } from "@mui/material"
import Image from "next/image"
import BlogSvg from "public/images/blog/blog.svg?url"
import WebCreationArticleSvg from "public/images/blog/web-creation-article.svg?url"
import AdvertisementArticleSvg from "public/images/blog/advertisement.svg?url"
import HostingArticleSvg from "public/images/blog/hosting-article.svg?url"
import Link from "next/link"
import SectionTitle from "@/components/common/SectionTitle"
import { AutoStories, VideoLibrary } from "@mui/icons-material"


interface IPostThumbnailProps {
    title: string,
    subtitle: string,
    minReading: number,
    videoFrench?: boolean,
    videoEnglish?: boolean,
    thumnailImg: string,
    thumnailAlt: string
}


function PostThumbnail(props: IPostThumbnailProps) {
    const theme = useTheme()
    return (
        <Link href="/blog/web-creation-service">
            <Box sx={{ display: 'flex', p: 5, cursor: 'pointer', height: { md: 250, xs: 'auto' }, borderRadius: 1.5, my: 2, width: '100%', bgcolor: 'white', boxShadow: theme.shadows[1], '& .MuiSvgIcon-root': { fontSize: 12.5, color: 'grey.500', mr: 1 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography variant="h3" sx={{ color: 'primary.main', mb: .5, fontSize: { xs: 16 } }}>{props.title}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', '& .MuiTypography-root': { fontSize: 12.5, fontWeight: 500, color: 'grey.500' } }}>
                        {(props.videoFrench || props.videoEnglish) &&
                            <>
                                <VideoLibrary sx={{ ml: .5 }} /><Typography>Vidéo en {props.videoFrench && "français"}{(props.videoEnglish && props.videoFrench) && " ou "}{props.videoEnglish && "anglais"}</Typography>
                            </>
                        }
                        <AutoStories sx={{ ml: 2.5 }} /><Typography> {props.minReading} min de lecture</Typography>
                    </Box>
                    <Typography sx={{ mt: 3, fontSize: { xs: 12 } }}>{props.subtitle}</Typography>
                </Box>
                <Box sx={{ ml: 3, width: '50%', height: '100%', position: 'relative' }}>
                    <Image src={props.thumnailImg} layout="fill" objectFit="contain" alt={props.thumnailAlt} />
                </Box>
            </Box>
        </Link>
    )
}


const Blog: NextPageWithLayout = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' }, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Box sx={{ width: { xs: '100%', md: '45%' } }}>
                    <Box sx={{ pl: 10, 'h1': { overflowX: 'visible', whiteSpace: 'nowrap', fontSize: 50, color: 'primary.main', fontWeight: 700, mb: 2 }, 'h6': { color: 'text.main', fontWeight: 500, fontSize: 15, mb: 2 } }}>
                        <Typography variant="h1" sx={{ textTransform: 'uppercase', fontSize: { md: '35px !important', xs: '20px !important' } }}>Articles, Questions et Réponses</Typography>
                        <Typography variant="subtitle1" sx={{ ml: 0.5 }}>Trouvez les renseignements qu&#39;il vous manque ici</Typography>
                        <Box sx={{ '& .MuiBox-root': { display: 'flex', alignItems: 'center' }, mt: 2, mb: 4, ml: 1, color: 'primary.light', '.MuiTypography-root': { cursor: 'pointer', textDecoration: 'underline', color: 'primary.light', ml: 1 } }}>
                            <Link href="/blog/web-creation-service">
                                <Box>&#x2022; <Typography variant="body2"> Fonctionnement de notre service de création Web</Typography></Box>
                            </Link>
                            <Link href="/blog/avertisement-service">
                                <Box>&#x2022; <Typography variant="body2"> Fonctionnement de notre service de publicité numérique</Typography></Box>
                            </Link>
                            <Link href="/blog/hosting-service">
                                <Box>&#x2022; <Typography variant="body2"> Fonctionnement de notre service de gestion de l&#39;hébergement</Typography></Box>
                            </Link>
                        </Box>
                        <Link href="/blog#articles"><Button variant="contained" sx={{ px: 3, py: 1, mb: 2 }}>Voir tous les articles</Button></Link>
                        <Link href="/#contact"><Button variant="outlined" sx={{ px: 3, py: 1 }}>Contactez-nous</Button></Link>
                    </Box>
                </Box>
                <Box sx={{ width: { md: '45%', xs: '50%' }, height: '50%', position: 'relative' }}>
                    <Image src={BlogSvg} layout="fill" objectFit="contain" alt="Articles du blog" />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center' }}>
                <Box id="articles">
                    <SectionTitle title="Tous nos articles" subtitle="pour comprendre notre solution Web" />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '80%', mx: 'auto', mb: 10 }}>
                        <PostThumbnail videoFrench thumnailAlt="Création Web article" thumnailImg={WebCreationArticleSvg} minReading={5} title="Fonctionnement de notre service de création Web" subtitle="Quels sont les coûts? Quels applications/automatisation sont possibles? Combien de temps avant d'avoir un produit fini? Est-ce que l'interface d'utilisateur peut être préfaite et seulement demander de l'implémenter, ..." />
                        <PostThumbnail videoFrench thumnailAlt="Publicité numérique article" thumnailImg={AdvertisementArticleSvg} minReading={7} title="Fonctionnement de notre service de publicité numérique" subtitle="Quels sont les coûts? Est-ce qu'un petit budget peu être profitable avec de la publicité? Combien de temps avant d'avoir des résultats? Quels réseaux sociaux conviennent pour mon entreprise, ..." />
                        <PostThumbnail videoFrench videoEnglish thumnailAlt="Hébergement Web article" thumnailImg={HostingArticleSvg} minReading={7} title="Fonctionnement de notre service de gestion de l'hébergement" subtitle="Quels sont les coûts? Quel est le niveau de sécurité et de fiabilité? Combien de clients mon site peut-il supporter? Quels sont les éléments techniques de l'hébergement, ..." />
                    </Box>
                </Box>
            </Box>
        </>
    )
}



Blog.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default Blog
