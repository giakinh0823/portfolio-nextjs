import * as React from "react";
import { Box, Typography } from "@mui/material";

export interface IListCVBarProps {
  listCV: any;
}

export default function ListCVBar({ listCV }: IListCVBarProps) {
  return (
    <Box pt={4}>
      {listCV.map((item: any, index: number) => {
        return (
          <Box key={index} sx={{padding: "10px 0" }}>
            <Box>
              <Typography
                variant="h6"
                color="primary"
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {item.header}
              </Typography>
              {item.contents.map((content: any, index: number) => {
                return (
                  <Box key={index} sx={{padding: "10px 0" }}>
                    {typeof content === "string" ? (
                      <Box>
                        <Typography variant="body1" color="textPrimary" fontWeight="500">
                          {content}
                        </Typography>
                      </Box>
                    ) : (
                      <Box>
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          sx={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                          }}
                        >
                          {content.header}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" fontWeight="500" sx={{wordWrap: "break-word"}}>
                          {content.content}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
