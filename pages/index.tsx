import DefaultLayout from "layouts/default"
import { type NextPageWithLayout } from "layouts"
import Hero from "components/hero"
import { Box } from "@mui/material"
import AdvantagesSection from "components/section/AdvantagesSection"
import WebsiteCreationSection from "components/section/WebsiteCreationSection"
import AdvertisementSection from "components/section/AdvertisementSection"
import WebHostingSection from "components/section/WebHostingSection"
import ContactSection from "components/section/ContactSection"
import QuoteSection from "@/components/section/QuoteSection"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';



const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center' }}>
        <AdvantagesSection />
        <WebsiteCreationSection/>
        <AdvertisementSection/>
        <WebHostingSection/>
        <ContactSection/>
        <QuoteSection/>
      </Box>
    </>
  )
}



Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}



export async function getServerSideProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common',])),
    },
  };
}

export default Home
