import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "../../assets/image/avatar.png";
import background from "../../assets/image/background.png";
import ListCVBar from "./ListCVBar";
import ListCVMain from "./ListCVMain";

export interface IMyCvProps {}

const MyCv = (props: IMyCvProps) => {
  return (
    <Box component="section" pt={{ xs: 0, md: 6 }} pb={{ xs: 4, md: 4 }}>
      <Container
        sx={{
          width: "100%",
          minHeight: "100vh",
          borderRadius: "30px",
          padding: "50px 30px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  borderRadius: "50%",
                  width: {
                    xs: "60%",
                    md: "90%",
                  },
                  height: {
                    xs: "60%",
                    md: "90%",
                  },
                  overflow: "hidden",
                  borderWidth: "6px",
                  borderStyle: "solid",
                  borderColor: "primary.main",
                  alignSelf: "center",
                }}
              >
                <div style={{ transform: "scale(1.3)" }}>
                  <Image src={avatar} alt="avatar" width={500} height={460} />
                </div>
              </Box>
              <Box
                pt={{ xs: 4, md: 6 }}
                display={{ xs: "block", md: "none" }}
                sx={{ width: "100%" }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  color="textPrimary"
                  sx={{
                    textTransform: "uppercase",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                  textAlign="center"
                >
                  Kinh Ha Gia
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  color="textPrimary"
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    opacity: 0.8,
                  }}
                  textAlign="center"
                >
                  Full Stack Developer
                </Typography>
              </Box>
              <Box pl={{ xs: 0, md: 4 }}>
                <ListCVBar listCV={listBar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <Box pt={{ xs: 0, md: 6 }} display={{ xs: "none", md: "block" }}>
                <Typography
                  variant="h1"
                  component="h1"
                  color="textPrimary"
                  sx={{
                    textTransform: "uppercase",
                    maxWidth: "400px",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                >
                  Kinh Ha Gia
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  color="textPrimary"
                  sx={{
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                    opacity: 0.8,
                  }}
                >
                  Full Stack Developer
                </Typography>
              </Box>
              <Box pt={4}>
                <ListCVMain listCV={listSkill} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MyCv;

const listBar = [
  {
    header: "About me",
    contents: [
      `I am a software engineer major who's passionate about people-centered development as well as strategic decision-making.`,
    ],
  },
  {
    header: "Skills & Qualities",
    contents: [
      `Programming experience C, Java, Python, Javascript, Typescript`,
      `Experience in web interface programming includes HTML, CSS. JS, SASS, SCSS, Reatcjs, Nextjs, React Native, Antd,  Material-ui, Redux, Redux Saga, React Query, Axios, React-hook-form, useSWR,...`,
      `Backend programming experience includes Django, Java Servlet, Nodejs Express, Django Rest  Framework, Redis, Channels, Celery, Websocket,...`,
      `Experience in making tools with Selenium`,
      'Experience with tools such as Git, Gitlab, Azure, Docker, Docker compose, Nginx, Firebase,...',
      'Experience with database such as SQL Server, MongoDB, Postgresql, Sqlite3,...',
    ],
  },
  {
    header: "Reach me at",
    contents: [
      {
        header: "Phone number:",
        content: `0972 141 556`,
      },
      {
        header: "Email:",
        content: `giakinh2000@gmail.com`,
      },
      {
        header: "Github:",
        content: `https://github.com/giakinh0823`,
      },
      {
        header: "Linkedin:",
        content: `https://www.linkedin.com/in/giakinh0823/`,
      },
      {
        header: "Website:",
        content: `https://www.hagiakinh.me/`,
      },
    ],
  },
  {
    header: "Language",
    contents: [`English`, `Vietnamese`, `Japanese`],
  },
];

const listSkill = [
  {
    header: "Education",
    contents: [
      {
        header: "FPT University",
        time: "2019 - present",
        content: {
          description: `Here I learned a lot of things. School work helps me learn languages like Java, C, Java web, Web design, .. and computer knowledge. It has helped me solve many problems before. In addition to the knowledge of programming, I also learned about skills in the working environment and a lot of interesting things here.`,
        },
      },
    ],
  },
  {
    header: "Experience",
    contents: [
      {
        header: "Frontend Developer",
        time: "10/2021 - 11/2021",
        content: {
          description:
            "I joined the frontend code project with Nextjs for the delivery startup S-ONE.",
          list: [
            "I use TypeScript to code Nextjs",
            "Use GitLab to manage and work with the team.",
            "I use Antd to design the website.",
          ],
        },
      },
      {
        header: "Full-Stack Developer",
        time: "05/2021 - 09/2021",
        content: {
          description:
            "I participated in a project to code on products to buy, sell, and trade Facebook services. I do backend with Django and frontend with Reactjs.",
          list: [
            "I use Django Rest Framework to make web API.",
            "For the frontend I use redux, and the redux toolkit to manage the state for the site.",
            "I use Material-ui to design the website",
            "I use many other tools like react-route-dom, Axios, Chartjs, react-hookform,…",
          ],
        },
      },
      {
        header: "Full-Stack Developer",
        time: "02/2021 - 04/2021",
        content: {
          description:
            "I take full responsibility for the Hara startup project to participate in the FPT Edu Bizcontest. Project for startups about crowdfunding. I work in the field of getting data, design, code backend, frontend.",
          list: [
            "I use selenium tool to perform data retrieval to perform product testing.",
            "Use the Stripe API to make payments.",
            "Use channels, websocket to code messaging and notification functions for the website",
            "Using selenium to get data",
            "Use reactjs as frontend",
          ],
        },
      },
      {
        header: "Full-Stack Developer",
        time: "12/2020 – 03/2021",
        content: {
          description:
            "I work here as a product developer and creator for Scholar to participate in the FAIC 2021 conference. Here I undertake and implement the project myself. With experience through self-study and inquiry.",
          list: [
            "Using selenium tool to get data from google site.",
            "I use JavaScript, the Chartjs library to display word cloud, help users understand the authors",
            "Using NLTK library to analyze natural language to display word cloud",
            "Using Docker to build the environment",
            "Use Celery to manage tasks, schedule time to crawl data from Google Scholar to update articles by authors.",
          ],
        },
      },
    ],
  },
  {
    header: "Skills - Qualities",
    contents: [
      {
        content: {
          description: "",
          list: [
            "Java: I have experience in Java Core, doing Java Web with Servlet, Making Selenium tools with Java.",
            "Python: I have experience in web programming Django with Python, Tools with Selenium.",
            "Django: I do web with Django and Django Rest Framework. Experience working with Channels, Websocket, JWT, Celery and Celery Beat in Django.",
            "Reactjs/ Nextjs: I have experience working with Reactjs through many personal and client projects. I write Reactjs and Nextjs with TypeScript. Experience with several libraries such as Redux, Redux Toolkit, Redux Saga, React Query, Axios, React-Hook-Form, Mui-v5, Antd, Swiper, React-router-dom, Chartjs, Swr..",
            "React Native: I've been working on React-native for a while through a few small personal projects.",
            "Database: I have experience working with several databases such as SQL Server, MongoDB, Postgresql, Sqlite3, .. Fluently use SQL Server to query data.",
            "HTML/CSS/SCSS: I'm good at cutting hmtl/css. Experienced in working with SCSS. Proficient in using a few libraries such as Tailwind Css, Bootstrap, ..",
          ],
        },
      },
    ],
  },
];
