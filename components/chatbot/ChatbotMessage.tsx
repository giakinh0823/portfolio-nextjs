import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { Box, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import * as React from "react";
import { useForm } from "react-hook-form";
import chatbotApi from "../../api-client/chatbotApi";
import catImage from "../../assets/image/cat.webp";
import CrcularProgress from "../common/progress/CrcularProgress";

export interface IChatbotMessageProps {}

const ChatbotMessage = (props: IChatbotMessageProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [isJoin, setIsJoin] = React.useState(false);
  const [chatbotId, setChatbotId] = React.useState<any>();
  const [message, setMessage] = React.useState<any[]>([]);
  const messageBoxRef = React.useRef<any>();
  const [client, setClient] = React.useState<any>();
  const [chatbox, setChatbot] = React.useState<any>();
  const messageEndRef = React.useRef<any>();
  const [loading, setLoading] = React.useState<boolean>(true);

  const groupsSocket = React.useMemo(
    () =>
      // new WebSocket(`ws://127.0.0.1:8000/ws/groups/giakinh0823/`),
      new WebSocket(`wss://hagiakinh-api.herokuapp.com/ws/groups/giakinh0823/`),
    []
  );

  React.useEffect(() => {
    groupsSocket.onmessage = (e) => {
      const data = JSON.parse(e.data);
    };

    groupsSocket.onclose = function (e) {
      console.error("Out chatbot");
    };
  }, [groupsSocket]);

  const handleJoin = React.useCallback(() => {
    (async () => {
      const data = await chatbotApi.join({});
      localStorage.setItem("chatbot_id", data?.chatbot_id);
      localStorage.setItem("user_id", data?.user_id);
      setChatbotId(data?.chatbot_id);
      setClient(data?.user_id);
      setIsJoin(true);
      groupsSocket.send(
        JSON.stringify({
          is_update: "True",
          group_id: data?.chatbot_id,
        })
      );
    })();
  }, [groupsSocket]);

  const chatSocket = React.useMemo(
    () =>
      chatbotId
        ? // new WebSocket(
          //   `ws://127.0.0.1:8000/ws/chat/${
          //     chatbotId ? chatbotId : "new-chatbot"
          //   }/`
          // )
          new WebSocket(
            `wss://hagiakinh-api.herokuapp.com/ws/chat/${
              chatbotId ? chatbotId : "new-chatbot"
            }/`
          )
        : undefined,

    [chatbotId]
  );

  React.useEffect(() => {
    if (chatSocket != undefined) {
      chatSocket.onmessage = function (e) {
        const data = JSON.parse(e.data);
        const newMessage = [...message, data];
        setMessage(newMessage);
        messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
      };

      chatSocket.onclose = function (e) {
        console.error("Out chatbot");
      };

      chatSocket.onopen = function (e) {
        (async () => {
          try {
            const user_id = await localStorage.getItem("user_id");
            const chatbot_id = await localStorage.getItem("chatbot_id");
            if (user_id && chatbot_id) {
              setChatbotId(chatbot_id);
              setClient(user_id);
              const response = await chatbotApi.getById(chatbot_id, {
                user_id: user_id,
              });
              setChatbot(response);
              if (response) {
                setIsJoin(Boolean(response?.id));
                setMessage(response?.messages);
              }
            }
            messageBoxRef.current.scrollTop =
              messageBoxRef.current.scrollHeight;
          } catch (error) {}
        })();
      };
    }
  }, [chatbotId, chatSocket, message]);

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const user_id = await localStorage.getItem("user_id");
        const chatbot_id = await localStorage.getItem("chatbot_id");
        if (user_id && chatbot_id) {
          setChatbotId(chatbot_id);
          setClient(user_id);
          const response = await chatbotApi.getById(chatbot_id, {
            user_id: user_id,
          });
          setChatbot(response);
          if (response) {
            setIsJoin(Boolean(response?.id));
            setMessage(response?.messages);
          }
          setLoading(false);
        }
        messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [isJoin, chatSocket, chatbotId]);

  const onSubmit = (data: any) => {
    if (chatSocket) {
      chatSocket?.send(
        JSON.stringify({
          user: {
            id: client,
          },
          message: data.message,
          type_message: "string",
        })
      );
    }
    reset();
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: "16777271",
          backgroundColor: "primary.main",
          borderRadius: "50%",
          width: "61px",
          height: "61px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{ width: "61px", height: "61px" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <SmartToyIcon sx={{ color: "white" }} />
        </IconButton>
        <Box
          sx={{
            width: "357px",
            backgroundColor: "white",
            boxShadow: "0 4px 12px 0 rgb(0 0 0 / 15%)",
            display: isOpen ? "flex" : "none",
            flexDirection: "column",
            height: "560px",
            justifyContent: "flex-end",
            right: "0",
            maxHeight: "708px",
            overflow: "hidden",
            position: "absolute",
            top: "-570px",
            borderRadius: "20px",
            zIndex: "16777271",
            "@keyframes slideIn": {
              from: {
                transform: "translateX(100%)",
              },
              to: {
                transform: "translateY(0)",
              },
            },
            animation: "slideIn 0.3s ease-in-out",
          }}
        >
          {isJoin ? (
            <>
              <Box
                sx={{
                  height: "10%",
                  boxShadow: "0 1px 0 rgb(0 0 0 / 10%)",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 10px",
                }}
              >
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={catImage}
                    alt="chatbot"
                    width={200}
                    height={200}
                  />
                </Box>
                <Box>
                  <Typography variant="body1" ml={1} fontWeight="bold">
                    hagiakinh.me
                  </Typography>
                </Box>
                <Box ml="auto">
                  <IconButton color="primary" onClick={() => setIsOpen(false)}>
                    <CloseOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box
                component="div"
                sx={{
                  height: "80%",
                  overflow: "auto",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px 12px 0 12px",
                }}
                ref={messageBoxRef}
              >
                {!loading ? (
                  <>
                    <Box sx={{ marginTop: "auto" }}></Box>
                    {message.map((item: any, index: number) => (
                      <Box
                        key={index}
                        sx={{
                          maxWidth: "75%",
                          backgroundColor: "primary.main",
                          color: "white",
                          padding: "10px 12px",
                          borderRadius: "14px",
                          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
                          marginLeft:
                            client == item.user.id ? "auto" : undefined,
                          marginRight:
                            client == item.user.id ? undefined : "auto",
                          marginBottom: "10px",
                        }}
                      >
                        <Typography variant="body1">{item.message}</Typography>
                      </Box>
                    ))}
                    <div ref={messageEndRef}></div>
                  </>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <CrcularProgress />
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  height: "10%",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  borderTop: "1px solid #ebedf0",
                  padding: "0 40px 0 0",
                }}
              >
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  autoComplete="off"
                  style={{ width: "100%" }}
                >
                  <TextField
                    id="message"
                    variant="outlined"
                    label="Message"
                    autoComplete="off"
                    size="small"
                    fullWidth
                    {...register("message")}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "20px",
                      },
                      "& label.Mui-focused": {
                        color: "transparent",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                  />
                  <IconButton
                    color="primary"
                    type="submit"
                    sx={{
                      width: "40px",
                      height: "40px",
                      position: "absolute",
                      top: "50%",
                      right: 0,
                      transform: "translateY(-50%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}
                  >
                    <SendOutlinedIcon />
                  </IconButton>
                </form>
              </Box>
            </>
          ) : (
            <>
              {" "}
              <Box
                sx={{
                  height: "10%",
                  boxShadow: "0 1px 0 rgb(0 0 0 / 10%)",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 10px",
                }}
              >
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={catImage}
                    alt="chatbot"
                    width={200}
                    height={200}
                  />
                </Box>
                <Box>
                  <Typography variant="body1" ml={1} fontWeight="bold">
                    hagiakinh.me
                  </Typography>
                </Box>
                <Box ml="auto">
                  <IconButton color="primary">
                    <CloseOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={() => handleJoin()}>
                  <MapsUgcOutlinedIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default React.memo(ChatbotMessage);
