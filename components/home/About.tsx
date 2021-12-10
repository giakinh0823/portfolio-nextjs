import { Container, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";


export interface AboutProps {}

export default function AboutSection(props: AboutProps) {
  return (
    <Box component="section" pt={{ xs: 4, md: 20 }} pb={{ xs: 7, md: 15 }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ xs: "center" }}
          justifyContent={{ xs: "center", md: "space-around" }}
        >
          <Box px={2}>
            <Box
              sx={{
                width:"420px",
                borderRadius: "40px",
                overflow: "hidden",
              }}
            >
              <video
                autoPlay
                loop
                width="420px"
                height="420px"
                style={{ transform: "scale(1.4)" }}
              >
                <source src={"/video/about2.mp4"} type="video/mp4" />
              </video>
            </Box>
          </Box>
          <Box sx={{ maxWidth: { xs: "100%", md: "550px" } }} mb={{xs: 6, md: 0}}>
            <Typography component="h1" variant="h3">
              <Box component="span" sx={{ color: "primary.main" }}>
                Specialist
              </Box>{" "}
              in creative digital products
            </Typography>
            <Typography
              component="p"
              variant="body1"
              mt={2}
              sx={{ fontSize: "1.3rem" }}
              color="#6c6c6c"
            >
              I am a software engineer major who is passionate about people-centered development as well as strategic decision-making.
            </Typography>
            <Typography
              component="p"
              variant="body1"
              mt={2}
              sx={{ fontSize: "1.3rem" }}
              color="#6c6c6c"
            >
              I am a full-stack developer with a passion for building beautiful,intuitive, and performant user interfaces.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
