import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Container, Link as MuiLink, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import * as React from "react";

export interface HeroProps {}

export default function HeroSection(props: HeroProps) {
  return (
    <Box component="section" pt={{ xs: 4, md: 20 }} pb={{ xs: 7, md: 15 }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ xs: "center" }}
          justifyContent={{ xs: "center", md: "space-around" }}
        >
          <Stack>
            <Box
              sx={{ maxWidth: { xs: "100%", md: "600px" } }}
              mt={{ xs: 6, md: 0 }}
            >
              <Typography
                component="h1"
                variant="h2"
                sx={{ color: "primary.main" }}
              >
                Hà Gia Kính -
              </Typography>
              <Typography component="h1" variant="h2">
                Developer from Ha Noi Viet Nam
              </Typography>
            </Box>
            <Box mt={3}>
              <Box component="span">
                <Link href="https://www.linkedin.com/in/giakinh0823/" passHref>
                  <MuiLink target="blank">
                    <LinkedInIcon sx={{ fontSize: "3.2rem" }} />
                  </MuiLink>
                </Link>
              </Box>
              <Box component="span" ml={2}>
                <Link href="https://github.com/giakinh0823" passHref>
                  <MuiLink target="blank">
                    <GitHubIcon sx={{ fontSize: "3.2rem" }} />
                  </MuiLink>
                </Link>
              </Box>
            </Box>
          </Stack>
          <Box>
            <Box
              sx={{
                width:"420px",
                borderRadius: "100%",
                overflow: "hidden",
              }}
            >
              <video
                autoPlay
                loop
                width="420px"
                height="420px"
                style={{ transform: "scale(1.5)" }}
              >
                <source src={"/video/hero.mp4"} type="video/mp4" />
              </video>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
