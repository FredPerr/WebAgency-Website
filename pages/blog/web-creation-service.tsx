import ArticleLayout from "@/layouts/article"
import { NextPageWithLayout } from "@/layouts/index"
import { Typography } from "@mui/material"


const WebCreationArticle: NextPageWithLayout = () => {
    return (
        <>
            <Typography>Esse dolore fugiat tempor Lorem minim ea deserunt aliqua laboris irure sit eu quis. Fugiat incididunt ipsum nostrud cupidatat pariatur ex exercitation culpa. Fugiat dolore exercitation ut dolor enim adipisicing cillum. Sit officia non dolor consectetur. Commodo exercitation consectetur esse eu aute fugiat est. Duis amet dolor mollit culpa reprehenderit. Quis qui laboris consequat aliqua nostrud excepteur nostrud aute nisi incididunt cupidatat. Eiusmod minim tempor ea officia quis. Minim esse elit et ut reprehenderit commodo aute quis ea eu irure. Consequat magna commodo aliqua adipisicing incididunt nulla proident.

                Nisi laborum reprehenderit laborum pariatur est. Commodo pariatur eu reprehenderit proident cillum enim qui non. Eu reprehenderit dolor et Lorem qui eiusmod culpa exercitation Lorem sint proident sunt amet aliqua.

                Proident culpa amet deserunt eiusmod cupidatat proident in consequat. Magna id ullamco ipsum laboris dolore nisi sunt irure proident sit dolor. Cupidatat aute officia nostrud esse quis. Nostrud ad officia non excepteur consequat dolor fugiat voluptate tempor deserunt qui cupidatat do.

                Ex laboris elit est ea sint labore veniam nisi amet. Quis et pariatur do culpa sit cillum voluptate quis dolor aliqua elit magna nisi. Cillum dolore sunt sunt occaecat laborum deserunt laboris voluptate mollit voluptate deserunt. Mollit magna duis dolor ut occaecat minim mollit mollit ad nulla quis aliqua. Cupidatat proident adipisicing aliquip magna ad et veniam eiusmod nulla et.

                Sit dolore ipsum eiusmod quis fugiat. Eu sint pariatur consequat officia culpa exercitation. Commodo velit proident aliquip consequat dolore aliqua mollit cupidatat fugiat incididunt anim. Deserunt occaecat adipisicing veniam nostrud minim velit ea fugiat.

                Aute non ullamco eu occaecat eu et ullamco excepteur cillum in nisi exercitation. Aliquip quis do adipisicing esse et irure mollit. Esse sunt magna cillum amet sint ea Lorem anim est. Est enim occaecat ex cillum laboris culpa est. Consectetur ipsum elit aliquip esse.

                Fugiat mollit culpa sint deserunt adipisicing in id non do magna minim ex veniam ad. Aliqua sunt cupidatat eiusmod officia. Veniam velit occaecat officia pariatur minim sint nisi minim irure laborum sunt nostrud. Cupidatat in commodo sit Lorem do voluptate aliqua culpa cupidatat proident.

                Deserunt labore sunt pariatur velit duis pariatur proident dolore deserunt qui. Lorem irure ex excepteur do ut est culpa minim consectetur do. Esse irure dolor fugiat cupidatat fugiat culpa nulla non aliqua sit adipisicing id. Nisi consectetur dolor laborum sint. Amet labore nisi ad excepteur ex adipisicing excepteur incididunt ad officia.</Typography>
        </>
    )
}


WebCreationArticle.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <ArticleLayout
            name="Fonctionnement de notre service de création Web"
            subtitle="Quels sont les coûts? Quels applications/automatisations sont possibles? Combien de temps avant d'avoir un produit fini? Est-ce que l'interface d'utilisateur peut être préfaite et seulement demander de l'implémenter, ..."
            readTime={5}
            videoUrlFrench="https://www.youtube.com/embed/xcJtL7QggTI"

        >
            {page}
        </ArticleLayout>
    )
}

export default WebCreationArticle
