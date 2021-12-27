import * as React from "react";
import avatar from '../assets/image/avatar.png';
import Seo from "../components/common/seo/Seo";
import AboutSection from "../components/home/About";
import DeverloperSection from "../components/home/Developer";
import HeroSection from "../components/home/Hero";
import SkillSection from "../components/home/Skill";
import { MainLayout } from "../components/layout";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
    return () => {
      setIsOpen(true);
    }
  }, []);

  return (
    <>
      <Seo
        title="Hà Gia Kính - Developer"
        metaTitle="Hà Gia Kính - Developer"
        metaDescription="Hà Gia Kính - Developer. Tôi là một kỹ sư phần mềm chuyên ngành, người đam mê phát triển lấy con người làm trung tâm cũng như ra quyết định chiến lược. Tôi là một nhà phát triển full-stack với niềm đam mê xây dựng giao diện người dùng đẹp, trực quan và hiệu quả."
        shareImage={avatar.src}
      />
      {/* {isOpen && (
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
      )} */}
      <HeroSection />
      <AboutSection />
      <DeverloperSection />
      <SkillSection />
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
