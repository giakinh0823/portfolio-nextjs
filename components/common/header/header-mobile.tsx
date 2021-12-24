import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {
  Container,
  Drawer, IconButton, Link as MuiLink, Stack
} from "@mui/material";
import { Box } from "@mui/system";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectMode } from "../../../redux/mode/modeSlice";
import UseSwitchesCustom from "../SwitchDarkMode";
import { ROUTE_LIST } from "./routes";

export interface HeaderMobileProps {}

export function HeaderMobile(props: HeaderMobileProps) {
  const router = useRouter();
  const mode = useAppSelector(selectMode);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Box display={{ xs: "block", md: "none" }}>
      <Box py={2} sx={{}}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Link href={"/"} passHref>
                <MuiLink>
                  <Stack direction="row" alignItems="center">
                    <Box component="span" sx={{ fontSize: "1.2rem" }}>
                      👋
                    </Box>
                    <Box sx={{ ml: 1, fontWeight: "bold", fontSize: "1.2rem" }}>
                      Kính G.
                    </Box>
                  </Stack>
                </MuiLink>
              </Link>
            </Box>
            <Stack direction="row">
			  <IconButton  onClick={() => setIsOpen(true)}><MenuOutlinedIcon sx={{fontSize: "30px"}}/></IconButton>
              <Stack alignItems="center" ml={2}>
                <UseSwitchesCustom />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ minWidth: "250px", padding: "30px 0" }}>
          <Stack direction="column" alignItems="center">
            {ROUTE_LIST.map((route, index) => (
              <Box key={index} sx={{padding: "15px 0"}}>
                <Link key={route.path} href={route.path} passHref>
                  <MuiLink
                    sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    className={clsx({
                      active: router.pathname === route.path,
                    })}
                  >
                    {route.label}
                  </MuiLink>
                </Link>
              </Box>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}
