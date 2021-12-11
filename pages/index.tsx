import * as React from 'react';
import Seo from "../components/common/seo/Seo";
import AboutSection from "../components/home/About";
import DeverloperSection from "../components/home/Developer";
import HeroSection from "../components/home/Hero";
import SkillSection from "../components/home/Skill";
import { MainLayout } from "../components/layout";
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {

  return (
    <>
      <Seo
        title="Hà Gia Kính"
        metaTitle="Hà Gia Kính - Trang chủ"
        metaDescription="Ha Gia Kinh a full-stack developer with a passion for building beautiful,intuitive, and performant user interfaces."
        metaKeywords="Ha Gia Kinh, Ha Gia Kinh Blog, Ha Gia Kinh Blog Home, Ha Gia Kinh Blog Home Page, Ha Gia Kinh Blog Home Page Home, Ha Gia Kinh Blog Home Page Home Page"
      />
      <HeroSection />
      <AboutSection />
      <DeverloperSection />
      <SkillSection/>
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
