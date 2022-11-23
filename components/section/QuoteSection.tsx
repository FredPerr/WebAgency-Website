import { Check, Error, ForwardToInbox, HelpCenter, Info } from "@mui/icons-material"
import { Box, Button, Typography, useTheme, TextField, FormControl, FormGroup, FormControlLabel, Checkbox, Backdrop } from "@mui/material"
import SectionTitle from "../common/SectionTitle"
import React from "react"
import Link from "next/link"


export default function QuoteSection() {
    const theme = useTheme()
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [company, setCompany] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [allInOneCheck, setAllInOneCheck] = React.useState(false)
    const [webCheck, setWebCheck] = React.useState(false)
    const [adsCheck, setAdsCheck] = React.useState(false)
    const [hostCheck, setHostCheck] = React.useState(false)


    const [submitted, setSubmitted] = React.useState(false)
    const [error, setError] = React.useState(false)
    const handleSubmit = () => {

        if (
            name == '' ||
            email == '' ||
            phone == '' ||
            company == '' ||
            description == ''
        ) {
            setError(true)
            return
        }

        setCompany('')
        setName('')
        setEmail('')
        setPhone('')
        setDescription('')
        setAllInOneCheck(false)
        setWebCheck(false)
        setAdsCheck(false)
        setHostCheck(false)

        setSubmitted(true)
    }


    return (
        <>

            <Box id="quote" component="section" sx={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', px: { md: 10, xs: 2 }, pb: 8 }}>
                <SectionTitle title="Demander ma soumission gratuite" subtitle="Décrivez brièvement votre projet et nous vous contacterons pour éclaircir certains points avec vous" />
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: { md: 'space-between' } }}>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h3" sx={{ textAlign: 'center', mb: 6 }}>Formulaire de soumission</Typography>
                        <Box component="form">
                            <FormControl sx={{
                                display: 'grid', gridTemplateColumns: '45% 45%', gridTemplateRows: 'auto auto', gap: '1em', '& .MuiInputBase-root': { color: '#000' }, '& .MuiOutlinedInput-root': {
                                    '& fieldset, &:hover fieldset': {
                                        borderColor: 'primary.light',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'primary.main',
                                        borderWidth: '1px'
                                    },
                                },
                            }}>
                                <TextField id="name" onChange={(e)=> {setName(e.target.value)}} placeholder="Nom complet" sx={{ borderColor: 'primary.light' }} />
                                <TextField id="email" onChange={(e)=> {setEmail(e.target.value)}} placeholder="Address courriel" />
                                <TextField id="phone" onChange={(e)=> {setPhone(e.target.value)}} placeholder="# téléphone" />
                                <TextField id="company" onChange={(e)=> {setCompany(e.target.value)}} placeholder="Nom de l'entreprise" />
                            </FormControl>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle2" sx={{ my: 2 }}>Veuillez cocher les services qui vous intéressent</Typography>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="La solution complète (3 en 1)" />
                                <FormControlLabel control={<Checkbox />} label="Création d'un nouveau site Web" />
                                <FormControlLabel control={<Checkbox />} label="Publicité numérique" />
                                <FormControlLabel control={<Checkbox />} label="Gestion de l'hébergement Web" />
                                <FormControlLabel control={<Checkbox />} label="*Je ne sais pas" />
                            </FormGroup>
                            <Typography variant="subtitle2" sx={{ my: 1 }}>*Nous éclaircirons votre choix une fois la demande soumission reçue.</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: { md: '40%', xs: '100%' }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <FormGroup sx={{ width: '100%', mt: 9 }}>
                            <TextField onChange={(e)=> setDescription(e.target.value)} multiline rows={6} label="Brève description de mon modèle d'affaire" sx={{ width: '100%', '& fieldset, &:hover fieldset': { borderColor: 'primary.light' }, '&.Mui-focused fieldset': { borderWidth: '1px', borderColor: 'primary.main' } }} />
                        </FormGroup>
                        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', boxShadow: theme.shadows[1], my: 2, borderRadius: '2px' }}>
                            <Info sx={{ color: '#FF0000', fontSize: 15, mr: 2, fontWeight: 500 }} />
                            <Typography paragraph variant="body2">Les informations que vous soummettez dans ce formulaire restent confidentielles et ne sont pas sauvegardées sur nos serveurs. Nous ne divulgons aucune information sans l&#39;accord d&#39;une entreprise faisant affaire avec nous.</Typography>
                        </Box>
                        <Button onClick={handleSubmit} sx={{ mb: 2 }}><ForwardToInbox />Soumettre ces informations</Button>
                        <Link href="/#contact">
                            <Button variant="outlined"><HelpCenter />J&#39;aimerais discuter avant</Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <Backdrop open={submitted} sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', bgcolor: 'white', borderRadius: 2, p: 5 }}>
                    <Check sx={{ color: 'success.main', fontSize: 50, mb: 2 }} />
                    <Typography variant="h3" sx={{ color: 'grey.500', mb: 2 }}>Votre demande de soumission a été envoyé avec succès!</Typography>
                    <Button variant="outlined" color="success" sx={{ color: 'success.main' }} onClick={() => {setSubmitted(false)}}>Retour</Button>
                </Box>
            </Backdrop>
            <Backdrop open={error} sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', bgcolor: 'white', borderRadius: 2, p: 5 }}>
                    <Error sx={{ color: 'error.main', fontSize: 50, mb: 2 }} />
                    <Typography variant="h3" sx={{ color: 'grey.500', mb: 2 }}>Veuillez remplir toutes les cases.</Typography>
                    <Button variant="outlined" color="error" sx={{ color: 'error.main' }} onClick={() => setError(false)}>Retour</Button>
                </Box>
            </Backdrop>
        </>
    )
}