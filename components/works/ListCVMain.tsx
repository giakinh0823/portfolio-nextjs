import { Box, Typography } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export interface IListCVMainProps {
  listCV: any;
}

export default function ListCVMain({ listCV }: IListCVMainProps) {
  return (
    <Box>
      {listCV.map((item: any, index: number) => (
        <Box key={index}>
          <Box>
            <Box
              sx={{
                width: "100%",
                borderBottomWidth: "3px",
                borderBottomStyle: "solid",
                borderBottomColor: "primary.main",
                marginBottom: "10px",
              }}
            >
              <Typography
                variant="subtitle1"
                color="textPrimary"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateX(15px) scale(1.04)",
                    cursor: "pointer"
                  }
                }}
              >
                {item.header}
              </Typography>
            </Box>
            <Box>
              {item.contents.map((content: any, index: number) => (
                <Box key={index}>
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="textPrimary"
                      sx={{
                        fontWeight: "bold",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateX(15px) scale(1.04)",
                          cursor: "pointer"
                        }
                      }}
                    >
                      {content.header}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="textPrimary"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {content.time}
                    </Typography>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        color="textPrimary"
                        sx={{
                          fontWeight: "500",
                        }}
                      >
                        {content?.content?.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="ul" margin="0">
                    {content.content.list?.map((item: any, index: number) => (
                      <Box
                        component="li"
                        key={index}
                        sx={{ marginBottom: "5px" }}
                      >
                        {typeof item === "string" ? <Box>
                          <Typography
                            variant="subtitle2"
                            color="textPrimary"
                            sx={{
                              fontWeight: "500",
                            }}
                          >
                            {item}
                          </Typography>
                        </Box> :
                          <Box sx={{
                            "&:hover": {
                              textDecoration: "underline",
                              cursor: "pointer"
                            }
                          }}>
                            <Link href={item.link}>
                              <Typography
                                variant="subtitle2"
                                color="textPrimary"
                                sx={{
                                  fontWeight: "500",
                                }}
                              >
                                {item.title}
                              </Typography>
                            </Link>
                          </Box>}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
