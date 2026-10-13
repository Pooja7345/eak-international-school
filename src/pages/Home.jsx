import Hero from '../components/home/Hero'
import StatsStrip from '../components/home/StatsStrip'
import WhyChooseUs from '../components/home/WhyChooseUs'
import AboutPreview from '../components/home/AboutPreview'
import AcademicsPreview from '../components/home/AcademicsPreview'
import FacilitiesPreview from '../components/home/FacilitiesPreview'
import Achievements from '../components/home/Achievements'
import PrincipalMessage from '../components/home/PrincipalMessage'
import NewsNotices from '../components/home/NewsNotices'
import UpcomingEvents from '../components/home/UpcomingEvents'
import Testimonials from '../components/home/Testimonials'
import AdmissionsCTA from '../components/home/AdmissionsCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <WhyChooseUs />
      <AboutPreview />
      <AcademicsPreview />
      <FacilitiesPreview />
      <Achievements />
      <PrincipalMessage />
      <NewsNotices />
      <UpcomingEvents />
      <Testimonials />
      <AdmissionsCTA />
    </>
  )
}