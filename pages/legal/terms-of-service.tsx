import PresentationLayout from "@/layouts/presentation"
import { Typography } from "@mui/material"
import { NextPageWithLayout } from "layouts"

const TermsOfService: NextPageWithLayout = () => {
    return (
        <>
            <Typography variant="body2">Esse anim tempor deserunt quis magna tempor amet laborum anim officia exercitation qui. Aliquip adipisicing id cillum id proident laboris et. Tempor reprehenderit elit veniam ipsum exercitation occaecat. Ex duis adipisicing non nisi id. Anim proident eiusmod id amet nulla quis laborum nulla consequat cillum ut reprehenderit. Veniam anim minim ullamco Lorem qui aliqua non laborum elit.
                Magna id adipisicing ex pariatur est. Quis reprehenderit aliquip eu magna tempor officia commodo consectetur aliqua in non exercitation. Enim mollit nisi irure dolor consectetur ut nulla labore aliqua ut dolor quis. Ut adipisicing esse do exercitation et. Veniam laborum est velit deserunt adipisicing qui.
                Ut commodo velit pariatur sunt ullamco elit magna veniam minim sint culpa id consectetur officia. Exercitation laborum enim quis cillum nulla duis anim aliqua consectetur proident ullamco. Officia aliqua sunt adipisicing eu culpa anim.
                Fugiat ad labore pariatur ullamco deserunt ipsum exercitation id aute labore excepteur magna ipsum. Irure fugiat laborum et nulla Lorem minim ex veniam. Reprehenderit dolore mollit dolore do sunt labore duis proident adipisicing laborum aute laborum. Non minim minim consectetur amet velit exercitation ex enim reprehenderit esse aliquip. Cillum qui fugiat culpa veniam et laborum mollit. Irure amet laborum reprehenderit magna eiusmod consectetur enim officia est dolor.</Typography>
        </>
    )
}

TermsOfService.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <PresentationLayout name="Termes d'utilisation">
            {page}
        </PresentationLayout>
    )
}

export default TermsOfService