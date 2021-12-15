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
                color="#7451cb"
                title="Android Developer"
                subtitle="React Native Developer"
                video={mode == "dark" ? "/video/dev.mp4" : undefined}
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
                color="#ffab66"
                title="Web Developer"
                subtitle="Fullstack Developer"
                video={mode == "dark" ? undefined : "/video/dev.mp4"}
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
                color="#8cd3ff"
                title="Backend Developer"
                subtitle="Java Developer"
                video={mode == "dark" ? undefined : "/video/hero2.mp4"}
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
                color="#7451cb"
                title="Tool Developer"
                subtitle="Python Developer"
                video={mode == "dark" ? "/video/hero2.mp4" : undefined}
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
  video?: string;
}

const DeveloperItem = React.memo(function DeveloperItem({
  color,
  title,
  subtitle,
  video,
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
      <Stack>
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
      </Stack>
      {video && (
        <Box
          sx={{
            width: {
              xs: "120px",
              md: "150px",
            },
            height: {
              xs: "120px",
              md: "150px",
            },
            position: "absolute",
            top: {
              xs: "70%",
              md: "50%",
            },
            right: "40px",
            borderRadius: "50%",
            overflow: "hidden",
            transform: "translateY(-50%)",
            transition: "all 0.8s linear",
          }}
        >
          <video
            autoPlay
            loop
            width="100%"
            height="100%"
            style={{ transform: "scale(1.4)" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </Box>
      )}
    </Box>
  );
});

export default React.memo(DeverloperSection);
