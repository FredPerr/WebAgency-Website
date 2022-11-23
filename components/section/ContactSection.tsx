import { Check, Email, ForwardToInbox, HelpCenter, OpenInNew } from "@mui/icons-material"
import { Box, Button, Typography, useTheme, TextField, Select, MenuItem, InputLabel, FormControl, Backdrop, Snackbar } from "@mui/material"
import SectionTitle from "../common/SectionTitle"
import React from "react"
import Link from "next/link"


function FeatureCard(props: { title: string, href: string }) {
    const theme = useTheme()
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', px: '7px', background: '#FFFFFF', boxShadow: theme.shadows[1], alignItems: 'center', borderRadius: '3px' }}>
            <Link href={props.href}>
                <Box sx={{ alignItems: 'center', justifyContent: 'left', mr: 'auto', p: 0.7 }}>
                    <OpenInNew />
                    <Typography component="a" variant="h6" sx={{ textAlign: 'left', ml: 1 }}>{props.title}</Typography>
                </Box>
            </Link>
        </Box>
    )
}


export default function ContactSection() {
    const [message, setMessage] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [motive, setMotive] = React.useState('')
    const [showEmail, setShowEmail] = React.useState(false)
    const [copied, setCopied] = React.useState(false)
    const [submitted, setSubmitted] = React.useState(false)
    const theme = useTheme()
    const sendMail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        console.log(message, name, email, phone, motive, submitted)
        console.log(process.env.NEXT_PUBLIC_API_URL)
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ name: name, email: email, phone: phone, motive: motive, message: message })
        }).then((res) => {
            if (res.status === 200) {
                setSubmitted(true)
                setName('')
                setEmail('')
                setPhone('')
                setMotive('')
            }
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <Box id="contact" component="section" sx={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', px: {md: 10, xs: 2}, pb: 8, bgcolor: 'grey.50' }}>
            <SectionTitle title="Communiquez avec nous" subtitle="" />
            <Box sx={{ display: 'flex', justifyContent: {md: 'space-between'}, flexDirection: {xs: 'column-reverse', md: 'row'} }}>
                <Box sx={{ width: {md: '50%', xs: '100%'}, display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: {xs: 8} }}>
                    <Box sx={{ display: 'grid', py: 0.6, gridTemplateColumns: 'auto', gridTemplateRows: 'repeat(4, auto)', gap: '2em 1.5em', '& .MuiSvgIcon-root': { fontSize: 15, color: 'primary.light' } }}>
                        <Typography variant="h3" sx={{ textAlign: 'center' }}>Lisez nos courts articles sur nos services et sur l&#39;industrie du Web du point de vue d&#39;une entreprise</Typography>
                        <FeatureCard title="Comment fonctionne notre service de création de site Web personnalisé?" href="/blog/web-creation-service" />
                        <FeatureCard title="Comment fonctionne notre service de publicité?" href="/blog/advertisement-service" />
                        <FeatureCard title="Comment fonctionne notre service d'hébergement?" href="/blog/hosting-service" />
                        {/* <FeatureCard title="Comment attirer beaucoup de clients même avec de la publicité numérique?" href="#" /> */}
                    </Box>
                    <Button sx={{ mx: 'auto', mt: 3, mb: 2 }}><OpenInNew />Voir tous les articles</Button>
                </Box>
                <Box sx={{ width: {md: '40%', xs: '100%'} }}>
                    <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>Contactez-nous directement...</Typography>
                    <Box component="form">
                        <FormControl sx={{
                            display: 'grid', gridTemplateColumns: '45% 45%', gridTemplateRows: 'auto auto auto', gap: '1em', '& .MuiInputBase-root': { color: '#000' }, '& .MuiOutlinedInput-root': {
                                '& fieldset, &:hover fieldset': {
                                    borderColor: 'primary.light',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'primary.main',
                                    borderWidth: '1px'
                                },
                            },
                        }}>
                            <Box>
                                <InputLabel id="motive">Motif</InputLabel>
                                <Select value={motive} onChange={(e) => setMotive(e.target.value)} id="motive" label="Motif" sx={{ width: '100%' }}>
                                    <MenuItem value={"more-info"}>Information supplémentaire</MenuItem>
                                    <MenuItem value={"demo-request"}>Demande de démo</MenuItem>
                                </Select>
                            </Box>
                            <TextField required value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Nom complet" sx={{ borderColor: 'primary.light' }} />
                            <TextField required value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Address courriel" />
                            <TextField required value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="# téléphone" />
                            <TextField required value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Message" multiline rows={6} sx={{ gridColumnStart: 1, gridColumnEnd: 3 }} />
                        </FormControl>
                    </Box>
                    <Box sx={{ mt: 2, display: 'flex' }}>
                        <Button sx={{ mr: 3 }} onClick={sendMail}><ForwardToInbox sx={{ mr: 1 }} />Envoyer</Button>
                        <Backdrop open={showEmail} onClick={() => setShowEmail(false)} sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                            <Box sx={{ p: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: 'white', boxShadow: theme.shadows[1], borderRadius: 1 }}>
                                <Email sx={{ fontSize: 50, color: 'info.main' }} />
                                <Typography variant="h6" sx={{ coolr: 'grey.500', fontSize: 18 }}>contact@webagency.com</Typography>
                                <Typography variant="body1" sx={{ my: 2 }}>Contactez-nous directement par courriel</Typography>
                                <Button sx={{ mt: 2 }} variant="outlined" color="info" onClick={(e) => { e.preventDefault(); navigator.clipboard.writeText('contact@webagency.com'); setCopied(true) }}>Copier l&#39;addresse</Button>

                            </Box>
                        </Backdrop>
                        <Snackbar open={copied} autoHideDuration={6000} onClose={(e, reason) => { if (reason === 'clickaway') return; setCopied(false) }} message="Addresse copiée dans votre presse-papier" />
                        <Button variant="outlined" onClick={() => setShowEmail(true)}><HelpCenter />Je préfère utiliser mon courriel</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}