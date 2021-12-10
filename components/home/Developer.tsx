import { GifBoxSharp } from "@mui/icons-material";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectMode } from "../../redux/mode/modeSlice";

export interface DeverloperProps {}

export default function DeverloperSection(props: DeverloperProps) {
  const mode = useAppSelector(selectMode);

  return (
    <Box component="section" pt={{ xs: 4, md: 20 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={mode == "dark" ? 8 : 4}
            sx={{ transition: "all 0.8s ease-in-out" }}
          >
            <DeveloperItem
              color="#7451cb"
              title="Android Developer"
              subtitle="React Native Developer"
              video={mode == "dark" ? "/video/dev.mp4" : undefined}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={mode == "dark" ? 4 : 8}
            sx={{ transition: "all 0.8s ease-in-out" }}
          >
            <DeveloperItem
              color="#ffab66"
              title="Web Developer"
              subtitle="Fullstack Developer"
              video={mode == "dark" ? undefined : "/video/dev.mp4"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={mode == "dark" ? 4 : 8}
            sx={{ transition: "all 0.8s ease-in-out" }}
          >
            <DeveloperItem
              color="#8cd3ff"
              title="Backend Developer"
              subtitle="Java Developer"
              video={mode == "dark" ? undefined : "/video/hero2.mp4"}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={mode == "dark" ? 8 : 4}
            sx={{ transition: "all 0.8s ease-in-out" }}
          >
            <DeveloperItem
              color="#7451cb"
              title="Tool Developer"
              subtitle="Python Developer"
              video={mode == "dark" ? "/video/hero2.mp4" : undefined}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

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
              xs: "180px",
              md: "220px",
            },
            height: { 
              xs: "180px",
              md: "220px",
            },
            position: "absolute",
            top: "50%",
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
            width="220px"
            height="220px"
            style={{ transform: "scale(1.4)" }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </Box>
      )}
    </Box>
  );
});
