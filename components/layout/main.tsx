import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LayoutProps } from "../../models";
import { Footer, Header } from "../common";
import Script from "next/script";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { colorAction, selectColor } from "../../redux/color/colorSlice";

export function MainLayout({ children }: LayoutProps) {

  const color = useAppSelector(selectColor)
  const dispatch = useAppDispatch();

  const [selectedValue, setSelectedValue] = React.useState(color);

  React.useEffect(() => {
    dispatch(colorAction.getColor());
  }, [dispatch])

  React.useEffect(() => {
    setSelectedValue(color);
  },[color])

  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        <Script id="my-script" strategy="lazyOnload">
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "475299556244389");
            chatbox.setAttribute("attribution", "biz_inbox");
            chatbox.setAttribute("theme_color", ${selectedValue});

            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
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
