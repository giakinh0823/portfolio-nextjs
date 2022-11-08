import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { isMobile } from "react-device-detect";
import { useAppSelector } from "../../app/hooks";
import { selectMode } from "../../redux/mode/modeSlice";
import { useIntersection } from "../../utils/useIntersection";

export interface DeverloperProps {}

const DeverloperSection = (props: DeverloperProps) => {
  const mode = useAppSelector(selectMode);
  const ref = React.useRef(null);
  const inViewport = useIntersection(ref, 0.1);

  return (
    <Box
      component="section"
      pt={{ xs: 6, md: 20 }}
      pb={{ xs: 7, md: 9 }}
      ref={ref}
    >
      <Container>
        <Typography
          display={{ xs: "block", md: "none" }}
          variant="h2"
          component="h2"
          fontWeight="900"
          textAlign="center"
          mb={6}
        >
          Developer
        </Typography>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={mode == "dark" ? 8 : 4}
            sx={{ transition: "all 0.8s ease-in-out" }}
          >
            <Box
              component="div"
              sx={
                inViewport && !isMobile
                  ? {
                      "@keyframes fadeFromLeft": {
                        from: { opacity: 0, transform: "translateX(-100px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                      },
                      animation: "fadeFromLeft 0.5s ease-in-out",
                    }
                  : {}
              }
            >
              <DeveloperItem
                color="secondary.main"
                title="Java Developer"
                subtitle="Java Developer"
                description=""
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={mode == "dark" ? 4 : 8}
            sx={{ transition: "all 0.8s ease-in-out" }}
          >
            <Box
              component="div"
              sx={
                inViewport && !isMobile
                  ? {
                      "@keyframes fadeFromRight": {
                        from: { opacity: 0, transform: "translateX(100px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                      },
                      animation: "fadeFromRight 0.5s ease-in-out",
                    }
                  : {}
              }
            >
              <DeveloperItem
                color="primary.main"
                title="Backend Developer"
                subtitle="Spring Boot"
                description=""
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={mode == "dark" ? 4 : 8}
            sx={{ transition: "all 0.8s ease-in-out" }}
          >
            <Box
              component="div"
              sx={
                inViewport && !isMobile
                  ? {
                      "@keyframes fadeFromLeft": {
                        from: { opacity: 0, transform: "translateX(-100px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                      },
                      animation: "fadeFromLeft 0.5s ease-in-out",
                    }
                  : {}
              }
            >
              <DeveloperItem
                color="primary.main"
                title="Front Developer"
                subtitle="Reactjs & Nextjs"
                description=""
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={mode == "dark" ? 8 : 4}
            sx={{ transition: "all 0.8s ease-in-out" }}
          >
            <Box
              component="div"
              sx={
                inViewport && !isMobile
                  ? {
                      "@keyframes fadeFromRight": {
                        from: { opacity: 0, transform: "translateX(100px)" },
                        to: { opacity: 1, transform: "translateY(0)" },
                      },
                      animation: "fadeFromRight 0.5s ease-in-out",
                    }
                  : {}
              }
            >
              <DeveloperItem
                color="secondary.main"
                title="C#"
                subtitle=".NET Core"
                description=""
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

interface DeveloperItemProps {
  color: string;
  title: string;
  subtitle: string;
  description?: string;
}

const DeveloperItem = React.memo(function DeveloperItem({
  color,
  title,
  subtitle,
  description,
}: DeveloperItemProps) {
  return (
    <Box
      sx={{
        height: "250px",
        backgroundColor: color,
        borderRadius: "20px",
        padding: "20px",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <Typography variant="body1" color="#efefefd9">
          {title}
        </Typography>
        <Typography
          component="h3"
          variant="h4"
          fontWeight="bold"
          color="white"
          mt={1}
        >
          {subtitle}
        </Typography>
        <Typography
          sx={{
            color: "white",
            mt: 2,
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Box>
  );
});

export default React.memo(DeverloperSection);
