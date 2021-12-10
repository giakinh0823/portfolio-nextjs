import { NextPageWithLayout } from "@/models/index";
import * as React from 'react';
import Seo from "../components/common/seo/Seo";
import AboutSection from "../components/home/About";
import DeverloperSection from "../components/home/Developer";
import HeroSection from "../components/home/Hero";
import SkillSection from "../components/home/Skill";
import { MainLayout } from "../components/layout";

const Home: NextPageWithLayout = () => {

  return (
    <>
      <Seo
        title="Hà Gia Kính"
        metaTitle="Hà Gia Kính - Trang chủ"
        metaDescription="Ha Gia Kinh a full-stack developer with a passion for building beautiful,intuitive, and performant user interfaces."
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
