import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import avatar from "../../assets/image/avatar.png";
import background from "../../assets/image/background.png";
import ListCVBar from "./ListCVBar";
import Typography from "@mui/material/Typography";
import ListCVMain from "./ListCVMain";

export interface IMyCvProps {}

const MyCv = (props: IMyCvProps) => {
  return (
    <Box component="section" pt={{ xs: 6, md: 6 }} pb={{ sx: 8, md: 10 }}>
      <Container
        sx={{
          width: "100%",
          minHeight: "100vh",
          borderRadius: "30px",
          padding: "50px 30px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={4}>
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
                  width: "70%",
                  height: "70%",
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
                pl={{ xs: 0, md: 4 }}
              >
                <ListCVBar listCV={listBar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box>
              <Box>
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
                    maxWidth: "400px",
                    opacity: 0.8,
                  }}
                >
                  Full Stack Developer
                </Typography>
              </Box>
              <Box pt={3}>
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
      `Experience in web interface programming includes HTML, CSS. JS, SASS, SCSS, Reatcjs, Nextjs, React Native, Antd, Material-ui,...`,
      `Backend programming experience includes Django, Servlet, Django Rest Framework,`,
      `Experience in making tools with selenium`,
      `Experience with tools such as Git, Gitlab, Nodejs, SQLserver, Azure, Docker, Nginx,`,
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
            "Use the Strapi API to make payments.",
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
          description: `In addition to the experience and working with the above real projects. I also learn and practice regularly about Python, Selenium, Nodejs, Java, Django, Reactjs, Nextjs, React Native. Especially in the past time I have focused on React.`,
          list: [
            "Java: I am extremely proficient in using this language for study and tutoring.",
            "Python: I can code Django backend with python, crawl data with selenium",
            "Nodejs I have worked on a few small projects, such as product management, product deletion level 1, level 2, etc. Working with Mongodb to manage the database.",
            "Reactjs: then I do quite a few projects on it. I use redux, redux-toolkit, redux saga to manage states and fetch api actions. I use axios to fetch api. Also I use react-hook-form, react-router-dom,… and many other tools. I can use both Typescript and Javascript to code Reactjs. Manage and limit unnecessary re-rendering of components with memo and useCallback. Proficiently use both antd, and mui in coding the interface for Reactjs. Proficient in style scss module in Reactjs",
            "Nextjs: I understand and apply the basics and fetch api for production. Understand SEO in Nextjs.",
            "React Native: Since I have a strong understanding of React, working with React Native is very easy. I use expo to code React Native. Master and understand the knowledge in React Native.",
          ],
        },
      },
    ],
  },
];
