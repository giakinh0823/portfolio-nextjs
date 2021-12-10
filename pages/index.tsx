import { NextPageWithLayout } from '@/models/index'
import { MainLayout } from '../components/layout';
import HeroSection from '../components/home/Hero';
import AboutSection from '../components/home/About';
import DeverloperSection from '../components/home/Developer';
import SkillSection from '../components/home/Skill';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <DeverloperSection/>
      <SkillSection/>
    </>
  )
}

Home.Layout = MainLayout

export default Home
