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
    "Tôi cực kỳ thành thạo trong việc sử dụng ngôn ngữ này để học tập và dạy kèm và làm việc."
  ),
  createData(
    "Crawl data",
    "Python",
    "Tôi có thể mã chương trình phụ trợ Django bằng python, thu thập dữ liệu bằng selenium, và có thể làm việc với các bảng mở rộng."
  ),
  createData(
    "Javascript",
    "Nodejs",
    "Tôi đã làm việc trên một số dự án nhỏ, chẳng hạn như quản lý sản phẩm, xóa sản phẩm cấp độ 1, cấp độ 2, v.v. Làm việc với Mongodb để quản lý cơ sở dữ liệu."
  ),
  createData(
    "UX/UI",
    "Reactjs",
    "Sau đó, tôi thực hiện khá nhiều dự án về nó. Tôi sử dụng redux, redux-toolkit, redux saga để quản lý các trạng thái và tìm nạp các hành động của api. Tôi sử dụng axios để tìm nạp api. Ngoài ra, tôi sử dụng react-hook-form, react-router-dom,… và nhiều công cụ khác. Tôi có thể sử dụng cả Typecript và Javascript để viết mã Reactjs. Quản lý và hạn chế render các thành phần không cần thiết bằng memo và useCallback. Sử dụng thành thạo cả antd và mui trong việc mã hóa giao diện cho Reactjs. Thành thạo module style scss trong Reactjs."
  ),
  createData(
    "SEO",
    "Nextjs",
    "Tôi hiểu và áp dụng những kiến thức cơ bản cũng như tìm nạp api cho quá trình sản xuất. Hiểu SEO trong Nextjs. ISR, SSR, SSG. Landing Page"
  ),
  createData(
    "Mobile",
    "React Native",
    "Vì tôi hiểu rõ về React nên việc làm việc với React Native rất dễ dàng. Tôi sử dụng expo để viết mã React Native. Nắm vững và hiểu rõ các kiến thức trong React Native."
  ),
];

const experiences = [
  createData(
    "Frontend Developer",
    "Nextjs",
    "Tôi đã tham gia dự án mã giao diện người dùng với Next Js cho công ty khởi nghiệp phân phối S-ONE. Tôi sử dụng TypeScript để viết mã Nextjs. Sử dụng GitHub để quản lý và làm việc với nhóm. Tôi sử dụng Antd để thiết kế trang web"
  ),
  createData(
    "Full-Stack Developer",
    "Django - React",
    "Tôi đã tham gia vào một dự án viết mã trên các sản phẩm để mua, bán và kinh doanh các dịch vụ của Facebook. Tôi làm phần phụ trợ với Django và giao diện người dùng với Reactjs, tôi sử dụng Django Rest Framework để tạo API web. Đối với giao diện người dùng, tôi sử dụng redux và bộ công cụ redux để quản lý trạng thái cho trang web. Tôi sử dụng Material-ui để thiết kế trang web. Tôi sử dụng nhiều công cụ khác như react-route-dom, Axios, Chartjs, react-hook-form,…"
  ),
  createData(
    "Full-Stack Developer",
    "Django - React",
    "Tôi hoàn toàn chịu trách nhiệm về dự án khởi nghiệp Hara tham gia cuộc thi FPT Edu Biz. Dự án dành cho các công ty khởi nghiệp về huy động vốn từ cộng đồng. Tôi làm việc trong lĩnh vực lấy dữ liệu, thiết kế, code backend, frontend. Tôi sử dụng công cụ selen để thực hiện truy xuất dữ liệu nhằm thực hiện kiểm tra sản phẩm. Sử dụng API Stripe để thanh toán. Sử dụng các kênh, websocket để viết mã các chức năng nhắn tin, thông báo cho website. Sử dụng selen để lấy dữ liệu. Sử dụng reactjs làm giao diện người dùng"
  ),
  createData(
    "Full-Stack Developer",
    "Django - Selenium",
    "Tôi làm việc tại đây với tư cách là nhà phát triển sản phẩm và người sáng tạo cho Scholar tham gia hội nghị FAIC 2021. Tại đây tôi tự đảm nhận và thực hiện dự án. Với kinh nghiệm qua quá trình tự học và tìm hiểu. Sử dụng công cụ selen để lấy dữ liệu từ trang web của Google. Tôi sử dụng JavaScript, thư viện Chartjs để hiển thị đám mây từ, giúp người dùng hiểu các tác giả. Sử dụng thư viện NLTK để phân tích ngôn ngữ tự nhiên để hiển thị đám mây từ. Sử dụng Docker để xây dựng môi trường. Sử dụng Celery để quản lý công việc, lên lịch thời gian thu thập dữ liệu từ Google Scholar để cập nhật các bài viết của các tác giả."
  ),
];

const educations = [
  createData(
    "FPT University",
    "Bachelor of Information Technology",
    "Ở đây tôi đã học được rất nhiều điều. Công việc ở trường giúp tôi học các ngôn ngữ như Java, C, Java web, thiết kế Web, .. và kiến thức máy tính. Nó đã giúp tôi giải quyết nhiều vấn đề trước đây. Ngoài kiến thức về lập trình, mình còn được học về các kỹ năng trong môi trường làm việc và rất nhiều điều thú vị tại đây"
  ),
];
