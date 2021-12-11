import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Container, Stack, Tab, Tabs, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import * as React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectMode } from "../../redux/mode/modeSlice";
import { useIntersection } from "../../utils/useIntersection";
import { isMobile } from "react-device-detect";

interface LinkTabProps {
  label?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="span"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
      sx={{ fontWeight: "bold", fontSize: "16px", textTransform: "none" }}
    />
  );
}

export interface SkillProps {}

const SkillSection = (props: SkillProps) => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const inViewport = useIntersection(ref, 0.1); //Kích hoạt ngay khi phần tử hiển thị

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      component="section"
      pt={{ xs: 4, md: 15 }}
      pb={{ xs: 7, md: 9 }}
      ref={ref}
      sx={
        inViewport && !isMobile
          ? {
              "@keyframes fadeIn": {
                from: { opacity: 0, transform: "translateY(100px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
              animation: "fadeIn 2s ease-in-out",
            }
          : { transform: "translateY(100px)" }
      }
    >
      <Container>
        <Stack alignItems="center">
          <Box fontSize={{ xs: "h3", md: "h4" }}>
            <Typography
              component="h2"
              variant="h3"
              color="primary"
              textAlign="center"
              fontWeight="600"
            >
              Work hard.
            </Typography>
            <Typography
              component="h2"
              variant="h3"
              textAlign="center"
              fontWeight="600"
            >
              Play hard
            </Typography>
          </Box>
          <Stack alignItems="center" mt={4} mb={3}>
            <Tabs value={value} onChange={handleChange}>
              <LinkTab label="My Skills" />
              <LinkTab label="Experience" />
              <LinkTab label="Education" />
            </Tabs>
          </Stack>

          <Box sx={{ width: "100%", marginTop: "30px" }}>
            {value === 0 && (
              <CollapsibleTable
                rows={skills}
                title="Technology"
                value="Framework"
              />
            )}
            {value === 1 && (
              <CollapsibleTable
                rows={experiences}
                title="Company"
                value="Position"
              />
            )}
            {value === 2 && (
              <CollapsibleTable
                rows={educations}
                title="School"
                value="Learning"
              />
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default React.memo(SkillSection);

function createData(tech: string, framework: string, content: string) {
  return {
    tech,
    framework,
    content,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const mode = useAppSelector(selectMode);

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "&:hover": {
            backgroundColor: mode == "dark" ? "#222" : "#f5f7fe",
            cursor: "pointer",
          },
          "& > *": {
            borderBottom: "unset",
            paddingTop: "20px",
            paddingBottom: "20px",
          },
        }}
      >
        <TableCell
          component="th"
          scope="row"
          sx={{ border: "none", fontWeight: "bold", fontSize: "1.1rem" }}
        >
          {row.tech}
        </TableCell>
        <TableCell align="right" sx={{ border: "none", fontSize: "1.1rem" }}>
          {row.framework}
        </TableCell>
        <TableCell sx={{ border: "none" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            color="primary"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2} sx={{ padding: "0", border: "none" }}>
          <Collapse in={open} timeout="auto">
            <Box sx={{ padding: "20px 0 20px 30px", fontSize: "1rem" }}>
              {row.content}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

interface CollapsibleTableProps {
  rows: ReturnType<typeof createData>[];
  title?: string;
  value?: string;
}

function CollapsibleTable({ rows, title, value }: CollapsibleTableProps) {
  return (
    <TableContainer>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                paddingBottom: "20px",
                border: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {title}
            </TableCell>
            <TableCell
              align="right"
              sx={{
                paddingBottom: "20px",
                border: "none",
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {value}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const skills = [
  createData(
    "Programming Languages",
    "Java",
    "I am extremely proficient in using this language for study and tutoring."
  ),
  createData(
    "Crawl data",
    "Python",
    "I can code Django backend with python, crawl data with selenium"
  ),
  createData(
    "Javascript",
    "Nodejs",
    "I have worked on a few small projects, such as product management, product deletion level 1, level 2, etc. Working with Mongodb to manage the database"
  ),
  createData(
    "UX/UI",
    "Reactjs",
    "Then I do quite a few projects on it. I use redux, redux-toolkit, redux saga to manage states and fetch api actions. I use axios to fetch api. Also I use react-hook-form, react-router-dom,… and many other tools. I can use both Typescript and Javascript to code Reactjs. Manage and limit unnecessary re-rendering of components with memo and useCallback. Proficiently use both antd, and mui in coding the interface for Reactjs. Proficient in style scss module in Reactjs."
  ),
  createData(
    "SEO",
    "Nextjs",
    "I understand and apply the basics and fetch api for production. Understand SEO in Nextjs. "
  ),
  createData(
    "Mobile",
    "React Native",
    "Since I have a strong understanding of React, working with React Native is very easy. I use expo to code React Native. Master and understand the knowledge in React Native."
  ),
];

const experiences = [
  createData(
    "Frontend Developer",
    "Nextjs",
    "I joined the frontend code project with Nextjs for the delivery startup S-ONE. I use TypeScript to code Nextjs. Use GitLab to manage and work with the team. I use Antd to design the website"
  ),
  createData(
    "Full-Stack Developer",
    "Django - React",
    "I participated in a project to code on products to buy, sell, and trade Facebook services. I do backend with Django and frontend with Reactjs, I use Django Rest Framework to make web API. For the frontend I use redux, and the redux toolkit to manage the state for the site. I use Material-ui to design the website. I use many other tools like react-route-dom, Axios, Chartjs, react-hook-form,…"
  ),
  createData(
    "Full-Stack Developer",
    "Django - React",
    "I take full responsibility for the Hara startup project to participate in the FPT Edu Biz contest. Project for startups about crowdfunding. I work in the field of getting data, design, code backend, frontend. I use selenium tool to perform data retrieval to perform product testing. Use the Strapi API to make payments. Use channels, websocket to code messaging and notification functions for the website. Using selenium to get data. Use reactjs as frontend"
  ),
  createData(
    "Full-Stack Developer",
    "Django - Selenium",
    "I work here as a product developer and creator for Scholar to participate in the FAIC 2021 conference. Here I undertake and implement the project myself. With experience through self-study and inquiry. Using selenium tool to get data from google site. I use JavaScript, the Chartjs library to display word cloud, help users understand the authors. Using NLTK library to analyze natural language to display word cloud. Using Docker to build the environment. Use Celery to manage tasks, schedule time to crawl data from Google Scholar to update articles by authors."
  ),
];

const educations = [
  createData(
    "FPT University",
    "Bachelor of Information Technology",
    "Here I learned a lot of things. School work helps me learn languages like Java, C, Java web, Web design, .. and computer knowledge. It has helped me solve many problems before. In addition to the knowledge of programming, I also learned about skills in the working environment and a lot of interesting things here"
  ),
];
