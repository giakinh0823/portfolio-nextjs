import { Box, Typography } from "@mui/material";
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
            <Typography
              variant="h5"
              color="textPrimary"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                width: "100%",
                borderBottomWidth: "3px",
                borderBottomStyle: "solid",
                borderBottomColor: "primary.main",
                marginBottom: "10px",
              }}
            >
              {item.header}
            </Typography>
            <Box>
              {item.contents.map((content: any, index: number) => (
                <Box key={index}>
                  <Box>
                    <Typography
                      variant="h6"
                      color="textPrimary"
                      sx={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        transition: "all 0.3s ease-in-out",
                      }}
                    >
                      {content.header}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="textPrimary"
                      sx={{
                        fontWeight: "500",
                      }}
                    >
                      {content.time}
                    </Typography>
                    <Box>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                        sx={{
                          fontWeight: "500",
                        }}
                      >
                        {content?.content?.description}
                      </Typography>
                    </Box>
                  </Box>
                  <Box component="ul">
                    {content.content.list?.map((item: any, index: number) => (
                      <Box
                        component="li"
                        key={index}
                        sx={{ marginBottom: "5px" }}
                      >
                        <Box>
                          <Typography
                            variant="body1"
                            color="textPrimary"
                            sx={{
                              fontWeight: "500",
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
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
