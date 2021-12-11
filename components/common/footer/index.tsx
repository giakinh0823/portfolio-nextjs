import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import * as React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectMode } from "../../../redux/mode/modeSlice";
import { useIntersection } from "../../../utils/useIntersection";
import { isMobile } from "react-device-detect";

export const Footer = React.memo(function Footer() {
  const mode = useAppSelector(selectMode);
  const ref = React.useRef(null);
  const inViewport = useIntersection(ref, 0.1);

  return (
    <Box
      component="footer"
      pt={12}
      pb={8}
      textAlign="center"
      ref={ref}
      sx={{ backgroundColor: mode == "dark" ? "#121212" : "#f5f7fe" }}
    >
      <Container
        sx={
          inViewport && !isMobile
            ? {
                "@keyframes fadeIn": {
                  from: { opacity: 0, transform: "translateY(100px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
                animation: "fadeIn 2s linear",
              }
            : {
                transform: "translateY(100px)",
              }
        }
      >
        <Stack justifyContent="center" alignItems="center">
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "350px" },
              borderRadius: "100%",
              overflow: "hidden",
              width: "300px",
              height: "300px",
            }}
          >
            {/* <Image src={footerImage} alt="Footer Gia Kinh" /> */}
            <video
              autoPlay
              loop
              width="300px"
              height="300px"
              style={{ transform: "scale(1.4)" }}
            >
              <source src={"/video/footer.mp4"} type="video/mp4" />
            </video>
          </Box>
          <Box>
            <Typography
              component="h1"
              variant="h3"
              sx={{ maxWidth: "400px" }}
              mt={2}
            >
              Have a great idea?
            </Typography>
          </Box>
          <Box mt={3}>
            <Box component="span">
              <Link href="https://www.linkedin.com/in/giakinh0823/" passHref>
                <MuiLink target="blank">
                  <LinkedInIcon sx={{ fontSize: "2.2rem" }} />
                </MuiLink>
              </Link>
            </Box>
            <Box component="span" ml={2}>
              <Link href="https://github.com/giakinh0823" passHref>
                <MuiLink target="blank">
                  <GitHubIcon sx={{ fontSize: "2.2rem" }} />
                </MuiLink>
              </Link>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
});
