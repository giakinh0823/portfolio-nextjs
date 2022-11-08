import * as React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import avatar from "../../assets/image/avatarcv.jpg";
import background from "../../assets/image/background.png";
import ListCVBar from "./ListCVBar";
import ListCVMain from "./ListCVMain";

export interface IMyCvProps { }

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
                <div style={{ transform: "scale(1.1)" }}>
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
      {
        title: "Java",
        skills: [
          "Java core: Java Core and Object- Oriented Programming (OOP), Junit, Multithreading and Concurrency, Exception Handling, JDBC",
          "Java Web: JSTL, JSP, Tiles, Servlet",
          "Framework: Spring MVC, JPA, Hibernate, Thymeleaf",
          "Build Tool: Maven",
        ]
      },
      {
        title: "Python",
        skills: [
          "Web: Django, Django Rest Framework, Channels, JWT, Celery and Celery Beat",
          "Tool: Selenium",
        ]
      },
      {
        title: "C#",
        skills: [
          ".NET Core: LINQ, Degrade, Event, Multithreading",
          "Framework: Entity Framework Core",
          "WinForms",
        ]
      },
      {
        title: "Front-end",
        skills: [
          "Basic: HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Jquery, Ajax",
          "Library: Reactjs, Redux, Redux Toolkit, Redux Saga, Axios, React Hook Form, Antd, Mui-v5, Tailwindcss, React Query",
          "Framework: Nextjs, useSWR",
          "Build tool: npm, yarn",
        ]
      },
      {
        title: "Database",
        skills: [
          "SQL: MSSQL, MySQL, PostgreSQL, Sqlite3",
          "NoSQL: MongoDB, Redis",
          "Understanding the basic query: select, update, delete, joins, procedure, trigger, events",
        ]
      },
      {
        title: "Message Queue",
        skills: [
          "Redis, Kafka, RabbitMQ",
        ]
      },
      {
        title: "Server",
        skills: [
          "Apache Tomcat, Glassfish Server, Heroku, AWS, Azure, Orcale, Nginx",
        ]
      },
      {
        title: "CI/CD",
        skills: [
          "Docker, Docker-compose",
        ]
      },
      {
        title: "VCS",
        skills: [
          "Git, Gitlab, GitHub",
        ]
      },
      {
        title: "Tools",
        skills: [
          "Dev tools: Visual Studio Code, Visual Studio, Eclipse, NetBeans, IntelliJ, PyCharm",
          "Postman, Jenkin, Rancher",
        ]
      },
      {
        title: "OS",
        skills: [
          "Linux (Ubuntu)",
        ]
      },
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
    contents: [`English`, `Vietnamese`],
  },
];

const listSkill = [
  {
    header: "OBJECTIVE",
    contents: [
      {
        content: {
          description: `I am a software engineer starting with Back-end Developer. With an advantage I can do both Front-end and Back-end. I want to work in a professional technology environment and always do my best for the company the products I participate in. From there I can develop myself better. It's not just that I must be, but I like to do it simply that I have a strong passion for my industry.`,
        },
      },
    ],
  },
  {
    header: "Education",
    contents: [
      {
        header: "FPT University",
        time: "Software Engineering (2019 – Present)",
        content: {
          list: [
            "70% Scholarship for 4 years at FPT University ($8700)",
            "GPA: 8.4",
          ],
        },
      },
    ],
  },
  {
    header: "Experience",
    contents: [
      {
        header: "Giaohangtietkiem - GHTKPay",
        time: "08/2022 - Present",
        content: {
          description:
            "Linking service, activating e-wallet deposit and withdrawal, bank reconciliation. Bank account creation service.",
          list: [
            "Spring Framework, Java, Apache Kafka, Spring Boot",
            "Microservice, Spring Cloud",
            "Docker, Redis, MySQL",
          ],
        },
      },
      {
        header: "Team project (University)",
        time: "05/2022 - 08/2022",
        content: {
          description:
            "I do a final project about an application development project. Online learning project. Manage courses, quizzes, questions, lessons including videos, documents.",
          list: [
            "Java Servlet to code the Back-end and Tiles for template layout.",
            "Use SQL Server to store data.",
            "Front-end uses Tailwincss, Flowbite and Jquery, Swiper.",
            "AWS to host the website and SQL Server.",
            "Gitlab manager source and work with the team.",
            "Team size: 5",
            "Source code: https://gitlab.com/kinhhghe153111/summer2022-se1617-g3",
          ],
        },
      },
      {
        header: "Personal project (University)",
        time: "01/2022 - 03/2022",
        content: {
          description:
            "I do a term-end project in the subject of Java Web. Project on task management, events, timetable with calendar.",
          list: [
            "Java Servlet to code the Back-end.",
            "Use SQL Server to store data.",
            "Front-end uses Tailwincss, Flowbite and Jquery, Fullcalendar.",
            "Oracle to host the website.",
            "Team size: 1",
            "Source code: https://github.com/giakinh0823/assignment_calendar",
          ],
        },
      },
      {
        header: "Portfolio project",
        time: "11/2021 - 01/2022",
        content: {
          description:
            "I work on portfolio and blog projects.",
          list: [
            "Python Django to code the Back-end and bot chat.",
            "Django Rest Framework to code the APIs.",
            "Nextjs written in TypeScript for Front-end.",
            "On the admin side use Reactjs and TypeScript.",
            "Vercel to host the Front-end and Heroku to host the Back-end.",
            "Team size: 1",
            "Demo: hagiakinh.me",
            "Source code: https://github.com/giakinh0823/portfolio-nextjs",
          ],
        },
      },
      {
        header: "Freelance (Front-end Developer)",
        time: "10/2021 - 11/2021",
        content: {
          description:
            "I joined the Front-end code project with Nextjs for the delivery startup S-ONE.",
          list: [
            "Use TypeScript to code Nextjs.",
            "Use Axios call APIs from server.",
            "GitLab to manage and work with the team.",
            "Antd to design the website.",
            "Team size: 3",
            "Demo: https://s-one.vn/",
          ],
        },
      },
      {
        header: "Freelance (Full-Stack Developer)",
        time: "05/2021 - 09/2021",
        content: {
          description:
            "I participated in a project to code on products to buy, sell, and trade Facebook services. I do Back-end with Django and Front-end with Reactjs.",
          list: [
            "Django Rest Framework to make web APIs.",
            "For the Front-end, use redux, and the redux toolkit to manage the state for the site.",
            "Use Axios to call APIs from server.",
            "Use Mui-v5 for UI website.",
            "Using Docker to build the environment.",
            "Team size: 1",
          ],
        },
      },
      {
        header: "FPT AI Conference 2021 (FAIC 2021)",
        time: "12/2020 - 03/2021",
        content: {
          description:
            "I work here as a product developer and creator for Scholar to participate in the FAIC 2021 conference. Here I undertake and implement the project myself. With experience through self-study and inquiry.",
          list: [
            "Using selenium tool to crawl data from google site.",
            "Use JavaScript, the Chartjs library to display word cloud.",
            "Using NLTK library to analyze natural language to display word cloud.",
            "Using Docker to build the environment.",
            "Use Celery to manage tasks, schedule time to crawl data from Google Scholar to update articles by authors.",
            "Team size: 3",
            "Source code: https://github.com/giakinh0823/fpt_google_scholar",
          ],
        },
      },
    ],
  },
  {
    header: "CERTIFICATIONS",
    contents: [
      {
        content: {
          description: "",
          list: [
            {
              title: "Coursera: Software Development Lifecycle (March 2022)",
              link: "https://www.coursera.org/account/accomplishments/specialization/certificate/36DPVVMUGBHW",
            },
            {
              title: "Coursera: CertNexus Certified Ethical Emerging Technologist (June 2022)",
              link: "https://www.coursera.org/account/accomplishments/specialization/certificate/UQQWV67GP8YD",
            },
            {
              title: "Coursera: Web Design for Everybody: Basics of Web Development & Coding (October 2021)",
              link: "https://www.coursera.org/account/accomplishments/specialization/certificate/2QWZX4L8TSPS",
            },
            {
              title: "Coursera: Computer Communications (June 2021)",
              link: "https://www.coursera.org/account/accomplishments/specialization/certificate/FC9PQCJBU9SD",
            },
            {
              title: "Coursera: Academic Skills for University Success (April 2021)",
              link: "https://www.coursera.org/account/accomplishments/specialization/certificate/AW8GJ5NQCTXA",
            }
          ],
        },
      },
    ],
  },
  {
    header: "HONORS & AWARDS",
    contents: [
      {
        content: {
          list: [
            "70% scholarship for 4 years studying at FPT University ($8700) (2019)",
            "The second prize for the provincial excellent student in computer science (2019)",
            "Second prize in Quang Binh University's Youth Informatics (2018)",
            "Third prize for students with excellent computer skills at the provincial level (2017)",
            "Prize to encourage excellent students to exceed the provincial computer level (2016)",
            "Third prize for students with excellent computer skills at provincial level (2016)",
          ],
        },
      },
    ],
  },
  {
    header: "ACTIVITIES",
    contents: [
      {
        header: "Mentor recruits club members JS Club",
        time: "Mentor - (04-2022 - 05-2022)",
        content: {
          description: "Activities to recruit professional members of the JS Club.",
        },
      },
      {
        header: "FPT AI Conference 2021 (FAIC 2021)",
        time: "Author and Presenter- (08-2021)",
        content: {
          description: `Author article and presenter about "A Google-based Scholar Information System for FPT Education"`,
        },
      },
      {
        header: "Lecturer JavaScript Class of JS Club",
        time: "Lecturer - (03-2021 - 04-2021)",
        content: {
          description: `Teaching Java core to club members.`,
        },
      },
      {
        header: "Japanese Software Engineer Club",
        time: "Author and Presenter- (08-2021)",
        content: {
          description: `JS Club is a Japanese Software Engineer Club - a club about Japanese and Programming.`,
        },
      },
    ],
  },
];
