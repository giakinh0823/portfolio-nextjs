import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LayoutProps } from "../../models";
import { colorAction, selectColor } from "../../redux/color/colorSlice";
import ChatbotMessage from "../chatbot/ChatbotMessage";
import Footer from "../common/footer/index";
import Header from "../common/header/index";
import GooeyLoading from "../common/Loading/GooeyLoading";
import SmartToyIcon from '@mui/icons-material/SmartToy';


// const HeaderDynamic = dynamic(() => import("../common/header"));
// const FooterDynamic = dynamic(() => import("../common/footer"));

declare const window: any;

export function MainLayout({ children }: LayoutProps) {
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();
  const ref = React.useRef<HTMLDivElement>(null);
  const [loading, setLoading] = React.useState(false);
  const [loadPage, setLoadingPage] = React.useState(true);
  const router = useRouter();

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

  React.useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  React.useEffect(() => {
    setLoadingPage(false);
  }, []);

  return (
    <>
      {!loadPage ? (
        <Stack minHeight="100vh">
          <Header />

          <Box component="main" flexGrow={1}>
            {loading ? (
              <Box
                sx={{
                  width: "100%",
                  height: "80vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GooeyLoading/>
              </Box>
            ) : (
              children
            )}

            <div id="fb-root"></div>
            <div
              id="fb-customer-chat"
              className="fb-customerchat"
              ref={ref}
            ></div>

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
            <ChatbotMessage/>
          </Box>
          <Footer />
        </Stack>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GooeyLoading/>
        </Box>
      )}
    </>
  );
}
