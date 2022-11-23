import { Divider, Typography } from "@mui/material"
import { Box } from "@mui/system"

export default function SectionTitle(props: {title: string, subtitle: string}){
    return (
        <Box sx={{py: 7}}>
            <Typography variant="h2">{props.title}</Typography>
            <Divider/>
            <Typography sx={{fontSize: {md: 14, xs: 13, xl: 20}, color: 'grey.800', textAlign: 'center'}}>{props.subtitle}</Typography>
        </Box>
    )
}
