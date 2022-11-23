import { AutoStories, VideoLibrary } from "@mui/icons-material"
import { Box, Button, Divider, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material"
import Footer from "components/footer"
import Navbar from "components/navbar"
import Link from "next/link"
import React from "react"
import Layout from "."


type DefaultLayoutProps = {
    children: React.ReactNode,
    name: string,
    subtitle: string,
    videoUrlFrench?: string,
    videoUrlEnglish?: string,
    readTime: number
}

export default function ArticleLayout(props: DefaultLayoutProps) {
    const [lang, setLang] = React.useState('fr')
    return (
        <Layout>
            <Navbar />
            <Box sx={{ width: '90%', mx: 'auto', mt: 8, p: 8 }}>
                <Typography sx={{ fontSize: 30, color: 'primary.main', fontWeight: 600 }}>{props.name}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', '& .MuiTypography-root': { fontSize: 12.5, fontWeight: 500, color: 'grey.500' }, '& .MuiSvgIcon-root': { fontSize: 14, color: 'grey.500', mr: 1 } }}>
                    {(props.videoUrlFrench || props.videoUrlEnglish) &&
                        <>
                            <VideoLibrary sx={{ ml: .5 }} /><Typography>Vidéo en {props.videoUrlFrench && "français"}{(props.videoUrlEnglish && props.videoUrlFrench) && " ou "}{props.videoUrlEnglish && "anglais"}</Typography>
                        </>
                    }
                    <AutoStories sx={{ ml: 2.5 }} /><Typography> {props.readTime} min de lecture</Typography>
                </Box>
                <Typography sx={{ mt: 3 }}>{props.subtitle}</Typography>
                {(props.videoUrlEnglish || props.videoUrlFrench) &&
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{
                            mt: 3, display: 'flex', flexDirection: 'column', '& .MuiToggleButton-root': {
                                fontSize: 12, py: 0.5
                            }
                        }}>
                            <iframe
                                allowFullScreen
                                src={lang === 'fr' ? props.videoUrlFrench : props.videoUrlEnglish}
                                width={1000}
                                height={500}
                                allowTransparency
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                            <ToggleButtonGroup
                                value={lang}
                                exclusive
                                aria-label="video-lang"
                                sx={{ mt: 2, mx: 'auto' }}
                            >
                                <ToggleButton onClick={() => { setLang('fr') }} disabled={!props.videoUrlFrench} value="fr" aria-label="Français">
                                    Français
                                </ToggleButton>
                                <ToggleButton onClick={() => { setLang('en') }} disabled={!props.videoUrlEnglish} value="en" aria-label="English">
                                    English
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Box>
                }
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