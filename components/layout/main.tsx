import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Script from "next/script";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LayoutProps } from "../../models";
import { colorAction, selectColor } from "../../redux/color/colorSlice";
import { Footer, Header } from "../common";

declare const window: any;

export function MainLayout({ children }: LayoutProps) {
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    dispatch(colorAction.getColor());
  }, [dispatch]);

  React.useEffect(() => {
    (function (d, s, id) {
      var js: any,
        fjs: any = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  React.useEffect(() => {
    ref.current?.setAttribute("theme_color", color);
    window?.FB?.XFBML.parse();
  }, [color]);

  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat" ref={ref}></div>

        <Script id="facebook-plugin">
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "475299556244389");
            chatbox.setAttribute("attribution", "biz_inbox");

            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                autoLogAppEvents : true,
                version          : 'v12.0'
              });
            };
    
          `}
        </Script>
      </Box>

      <Footer />
    </Stack>
  );
}
