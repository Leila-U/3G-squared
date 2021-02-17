import { lazy } from "react";

import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import TeamContent from "../../content/TeamContent.json";
import MissionContent from "../../content/MissionContent.json";
import VideoContent from "../../content/VideoContent.json";
import ContactContent from "../../content/ContactContent.json";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="team at work_solid I.svg"
        id="intro"
      />
      {/* Inspired by UN */}
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      {/* Our Team*/}
      <ContentBlock
        type="left"
        title={TeamContent.title}
        section={TeamContent.section}
        icon="team_solid III.svg"
        id="about"
      />
      {/* Mission Statement */}
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
    {/* Video */}
      <ContentBlock
        type="video"
        title={VideoContent.title}
        content={VideoContent.text}
        icon="process_outline III.svg"
        id="video"
      />
      {/*
      {/* Contact Form
      <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
