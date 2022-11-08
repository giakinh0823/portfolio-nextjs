import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Collapse,
  Container,
  IconButton,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { isMobile } from "react-device-detect";
import { useAppSelector } from "../../app/hooks";
import { selectMode } from "../../redux/mode/modeSlice";
import { useIntersection } from "../../utils/useIntersection";

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
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
              animation: "fadeIn 2s ease-in-out",
            }
          : {}
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
    ""
  ),
  createData(
    "Backend",
    "Spring Boot",
    ""
  ),
  createData(
    "Javascript",
    "Reactjs & Nextjs",
    ""
  ),
];

const experiences = [
  createData(
    "Frontend Developer",
    "ReactJs & Nextjs",
    ""
  ),
  createData(
    "Backend Developer",
    "Spring Boot",
    ""
  ),
  createData(
    "Microservice",
    "Spring Boot",
    ""
  ),
];

const educations = [
  createData(
    "FPT University",
    "Bachelor of Information Technology",
    ""
  ),
];
