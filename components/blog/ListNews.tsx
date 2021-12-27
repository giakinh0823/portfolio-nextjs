import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Chip,
  Container,
  Grid,
  IconButton,
  InputBase,
  Link as MuiLink,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectMode } from "../../redux/mode/modeSlice";
import { useIntersection } from "../../utils";

export interface IListNewProps {
  blogs: any;
  topics: any;
  onChange?: any;
  isLoadingTopics?: boolean;
  isLoadingBlogs?: boolean;
  onSearch?: any;
  loadMore?: any;
  loading?: boolean;
  loadingTopics?: boolean;
}

const ListNew = ({
  blogs,
  topics,
  onChange,
  isLoadingTopics,
  isLoadingBlogs,
  onSearch,
  loadMore,
  loading,
  loadingTopics,
}: IListNewProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inViewport = useIntersection(ref, 0.9);
  const mode = useAppSelector(selectMode);
  const [isActive, setIsActive] = React.useState<number>(-1);
  const [search, setSearch] = React.useState<string>("");

  React.useEffect(() => {
    onChange(isActive);
  }, [isActive, onChange]);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = (e: any) => {
    if (search) {
      onSearch(search);
    }
  };

  React.useEffect(() => {
    if (inViewport && !loading && !isLoadingBlogs) {
      loadMore();
    }
  }, [inViewport, loadMore, loading, isLoadingBlogs]);

  return (
    <Box component="section" pt={{ xs: 8, md: 8 }} pb={{ xs: 8, md: 15 }}>
      <Container>
        <Box
          mb={16}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box mb={2}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Our Blog
            </Typography>
          </Box>
          <Box maxWidth="500px">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="700"
              textAlign="center"
            >
              Inside and advice from our expert team
            </Typography>
          </Box>
        </Box>
        <Box mb={15}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              {blogs && blogs.length > 0 ? (
                <Box
                  sx={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  {blogs[0].image ? (
                    <Image
                      src={blogs && blogs[0].image.url}
                      width={600}
                      height={400}
                      alt={blogs[0].title}
                    />
                  ) : (
                    <Skeleton
                      height="350px"
                      variant="rectangular"
                      sx={{ borderRadius: "30px", padding: 0 }}
                    />
                  )}
                </Box>
              ) : (
                <Skeleton
                  height="350px"
                  variant="rectangular"
                  sx={{ borderRadius: "30px", padding: 0 }}
                />
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {blogs && blogs.length > 0 ? (
                <Box>
                  <Box>
                    {blogs && (
                      <Link href={`/blog/${blogs[0].slug}`} passHref>
                        <MuiLink>
                          <Typography
                            variant="h4"
                            component="h2"
                            gutterBottom
                            sx={{
                              cursor: "pointer",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: "vertical",
                              fontWeight: "bold",
                            }}
                          >
                            {blogs[0].title}
                          </Typography>
                        </MuiLink>
                      </Link>
                    )}
                  </Box>
                  <Box mb={3}>
                    {blogs && (
                      <Typography
                        variant="body2"
                        component="p"
                        sx={{
                          fontSize: "18px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          fontWeight: "bold",
                          opacity: 0.6,
                        }}
                      >
                        {`${blogs[0].author.last_name} ${blogs[0].author.first_name}`}
                      </Typography>
                    )}
                  </Box>
                  <Box mb={4}>
                    {blogs && (
                      <Typography
                        gutterBottom
                        sx={{
                          fontSize: "18px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {blogs[0].description}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    {blogs && (
                      <Typography
                        variant="body2"
                        component="p"
                        sx={{
                          fontSize: "18px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                          fontWeight: "bold",
                          opacity: 0.6,
                        }}
                      >
                        {new Date(blogs[0].created_at).toLocaleDateString()}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ) : (
                <Box>
                  <Skeleton sx={{ width: "100%", height: "40px" }} />
                  <Skeleton sx={{ width: "100%", height: "40px" }} />
                  <Skeleton sx={{ width: "95%", height: "40px" }} />
                  <Skeleton
                    animation="wave"
                    sx={{ width: "30%", marginBottom: "40px" }}
                  />
                  <Skeleton animation="wave" sx={{ width: "100%" }} />
                  <Skeleton animation="wave" sx={{ width: "100%" }} />
                  <Skeleton animation="wave" sx={{ width: "100%" }} />
                  <Skeleton
                    animation={false}
                    sx={{ width: "99%", marginBottom: "40px" }}
                  />
                  <Skeleton animation="wave" sx={{ width: "30%" }} />
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
        <Box mb={10}>
          <Stack alignItems="center">
            <Typography
              mb={2}
              variant="h4"
              component="h2"
              fontWeight="900"
              sx={{ color: "primary.main" }}
            >
              Dirodi Entertaining
            </Typography>
            <Typography variant="h3" component="h2" fontWeight="900">
              Blogs
            </Typography>
          </Stack>
          <Box sx={{ maxWidth: "500px", margin: "60px auto 0 auto" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                marginBottom: "20px",
              }}
            >
              <InputBase
                placeholder="Search…"
                onChange={handleSearch}
                inputProps={{ "aria-label": "search" }}
                sx={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "30px",
                  padding: "0 30px",
                  fontSize: "18px",
                  color: "primary.main",
                  outline: "none",
                  border: "none",
                  fontWeight: "bold",
                }}
              />
              <IconButton
                type="submit"
                aria-label="search"
                sx={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  bottom: "0",
                  margin: "auto",
                  padding: "0",
                  color: "primary.main",
                  height: "50px",
                  width: "50px",
                }}
                onClick={handleSearchClick}
              >
                <SearchIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box mb={10}>
          {topics && (
            <Box>
              <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ flexWrap: "wrap" }}
              >
                <Box sx={{ padding: "10px 0" }}>
                  <Chip
                    label={"Tất cả"}
                    variant="outlined"
                    sx={{
                      padding: "24px 12px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      color:
                        isActive == -1
                          ? "primary.main"
                          : mode == "dark"
                          ? "#fff"
                          : "#000",
                      borderColor:
                        isActive == -1 ? "primary.main" : "transparent",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        borderColor: "primary.main",
                      },
                    }}
                    onClick={() => {
                      setIsActive(-1);
                    }}
                  />
                </Box>
                {!isLoadingTopics &&
                  topics &&
                  topics.length > 0 &&
                  topics?.map((topic: any, index: number) => (
                    <Box key={index} sx={{ padding: "10px 0" }}>
                      <Chip
                        label={topic?.name}
                        variant="outlined"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color:
                            isActive == topic?.id
                              ? "primary.main"
                              : mode == "dark"
                              ? "#fff"
                              : "#000",
                          padding: "24px 12px",
                          borderColor:
                            isActive == topic?.id
                              ? "primary.main"
                              : "transparent",
                          cursor: "pointer",
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            borderColor: "primary.main",
                          },
                        }}
                        onClick={() => {
                          setIsActive(topic?.id);
                        }}
                      />
                    </Box>
                  ))}
              </Stack>
            </Box>
          )}
          <Stack
            direction="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ flexWrap: "wrap" }}
          >
            {(isLoadingTopics || !topics) &&
              [1, 2, 3, 4, 5, 6].map((item: any, index: number) => (
                <Box key={index} sx={{ padding: "10px 0" }}>
                  <Skeleton
                    height="50px"
                    width="120px"
                    variant="rectangular"
                    sx={{ borderRadius: "30px", padding: 0 }}
                  />
                </Box>
              ))}
          </Stack>
        </Box>
        <Grid container spacing={6}>
          {!isLoadingBlogs &&
            !loadingTopics &&
            blogs &&
            blogs.length > 0 &&
            blogs?.map((blog: any, index: number) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box key={blog.id}>
                  <Box
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "40px",
                      overflow: "hidden",
                    }}
                    mb={1}
                  >
                    {blog?.image ? (
                      <Image
                        src={blog.image.url}
                        alt={blog.title}
                        width={500}
                        height={350}
                      />
                    ) : (
                      <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={240}
                        sx={{ borderRadius: "30px" }}
                      />
                    )}
                  </Box>
                  <Link href={`/blog/${blog?.slug}`} passHref>
                    <MuiLink>
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          cursor: "pointer",
                          fontWeight: "500",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 1,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {blog.title}
                      </Typography>
                    </MuiLink>
                  </Link>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      fontSize: "15px!important",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: "vertical",
                      cursor: "pointer",
                      marginBottom: "20px",
                      padding: 0,
                      fontWeight: "600",
                      opacity: 0.6,
                    }}
                    mb={1}
                  >
                    {`${blog.author.last_name} ${blog.author.first_name}`} -{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      fontWeight: "500",
                    }}
                  >
                    {blog.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          {(isLoadingBlogs || loading) &&
            [1, 2, 3]?.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box>
                  <Box>
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={240}
                      sx={{ borderRadius: "30px" }}
                    />
                    <Skeleton sx={{ marginTop: "10px" }} />
                    <Skeleton
                      animation="wave"
                      sx={{ width: "60%", marginBottom: "20px" }}
                    />
                    <Skeleton animation="wave" sx={{ width: "100%" }} />
                    <Skeleton animation={false} sx={{ width: "100%" }} />
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
        <div className="load-more" ref={ref}></div>
      </Container>
    </Box>
  );
};

export default React.memo(ListNew);
