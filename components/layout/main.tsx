import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import Script from "next/script";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LayoutProps } from "../../models";
import { colorAction, selectColor } from "../../redux/color/colorSlice";
import { Footer, Header } from "../common";

export function MainLayout({ children }: LayoutProps) {
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    dispatch(colorAction.getColor());
  }, [dispatch]);

  React.useEffect(() => {
    ref.current?.setAttribute("theme_color", color);
    ref.current?.setAttribute(
      "fb-iframe-plugin-query",
      `app_id=&attribution=biz_inbox&container_width=0&current_url=http%3A%2F%2Flocalhost%3A3000%2F&locale=vi_VN&log_id=3456d385-5f9b-4616-9c0e-e273a22ea5bb&page_id=475299556244389&request_time=1640383243934&sdk=joey&theme_color=%23${color.replace(
        "#",
        ""
      )}&title=&url=http%3A%2F%2Flocalhost%3A3000%2F`
    );
    console.log(ref.current);
  }, [color]);

  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat" ref={ref}></div>
        <Script id="my-script" strategy="lazyOnload">
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

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `}
        </Script>
      </Box>

      <Footer />
    </Stack>
  );
}
