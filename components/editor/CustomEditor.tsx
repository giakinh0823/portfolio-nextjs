import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Backdrop, Checkbox, CircularProgress,
  Container, Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle, FormControlLabel,
  FormGroup,
  Stack, TextField, Typography
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import * as React from "react";
import { createReactEditorJS } from "react-editor-js";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import { createPostBySlug, getAllTopic } from "../../api-client/strapiApi";
import { tools_editor_js } from "../../constants/editor-js-tools";
import { uploadImage } from "../../utils/uploadImage";
import ButtonPrimary from "../common/button/ButtonPrimary";


const ReactEditorJS = createReactEditorJS();

const CustomEditor = () => {
  const editorJS = React.useRef<any>(null);
  const { mutate } = useSWRConfig();
  const [data, setData] = React.useState<any>({});
  const [isContent, setIsContent] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  // const categorys = useCategorys();
  const [image, setImage] = React.useState<any>();
  const [preview, setPreview] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const toastId = React.useRef<any>(null);
  const imageRef = React.useRef<any>(null);

  const [categorys, setCategorys] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      try {
        const topics = await getAllTopic();
        setCategorys(topics?.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInitialize = React.useCallback((instance) => {
    editorJS.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorJS.current.save();
    setData(savedData);
    if (savedData.blocks.length > 0) {
      setIsContent(true);
    } else {
      setIsContent(false);
    }
  }, []);

  const notiLoading = () => (toastId.current = toast.loading("🦄 Uploading!"));

  const notiSucces = () =>
    toast.update(toastId.current, {
      render: "🦄 Success",
      type: toast.TYPE.SUCCESS,
      autoClose: 5000,
      isLoading: false,
    });

  const notiError = () =>
    toast.update(toastId.current, {
      render: "🦄 Error",
      type: toast.TYPE.ERROR,
      autoClose: 5000,
      isLoading: false,
    });

  const handlePublic = (from: any) => {
    (async () => {
      try {
        if (image) {
          setLoading(true);
          notiLoading();
          const url = await uploadImage(image);
          const blog = {
            title: from.title,
            author: from.fullname,
            topics: from.topics,
            description: from.description,
            image: url,
            content: JSON.stringify(data),
          };
          // await mutate(`blogs`, () => blogApi.createBlog(blog));
          await mutate(`blogs`, () => createPostBySlug(blog));
          editorJS.current.clear();
          reset();
          handleClose();
          notiSucces();
          imageRef.current.value = "";
          setImage(null);
          setPreview(null);
          setLoading(false);
          setIsContent(false);
          setOpen(false);
          mutate(null, false);
        } else {
          toast.error("🦄 Please choose image!");
        }
      } catch (e) {
        notiError();
      }
    })();
  };

  const onSubmit = (data: any) => {
    handlePublic(data);
  };

  React.useEffect(() => {
    return () => {
      URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleChangeImage = (event: any) => {
    const image = event.target.files[0];
    const preview = URL.createObjectURL(image);
    setImage(image);
    setPreview(preview);
  };

  return (
    <Box component="section" pt={{ xs: 8, md: 5 }} pb={{ xs: 6, md: 20 }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 100000 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container>
        <Stack sx={{ minHeight: "70vh" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3">Tại bài viết mới</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              mt={2}
              sx={{ opacity: 0.7, fontWeight: "400" }}
            >
              Hãy chia sẽ những kiến thức của bạn tại đây
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }} mt={8}>
            <ReactEditorJS
              onInitialize={handleInitialize}
              tools={tools_editor_js}
              defaultValue={data?.blocks}
              onChange={handleSave}
              autofocus={true}
              focusOnLoad={true}
            />
          </Box>
        </Stack>
        {isContent && (
          <Stack direction="row" justifyContent="center">
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <ButtonPrimary onClick={handleClickOpen}>
                <Typography>Public</Typography>
              </ButtonPrimary>
            </Box>
          </Stack>
        )}
      </Container>
      <Dialog
        open={open}
        disableEscapeKeyDown={true}
        sx={{ top: "30px", overflowY: "auto" }}
        scroll="paper"
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your name here. Thank you for contributing a part to
            the site.
          </DialogContentText>
          <Box mt={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mb={5}>
                <Box mb={2}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    {...register("title", { required: true })}
                  />
                </Box>
                <Box mb={5}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Your name"
                    type="text"
                    fullWidth
                    variant="standard"
                    {...register("fullname", { required: true })}
                  />
                </Box>
                <Box mb={3}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Description"
                    type="text"
                    multiline
                    rows={4}
                    fullWidth
                    variant="standard"
                    {...register("description", { required: true })}
                  />
                </Box>
                <Box mb={2} mt={4}>
                  <input
                    style={{ display: "none" }}
                    accept="image/*"
                    type="file"
                    id="image"
                    onChange={handleChangeImage}
                    ref={imageRef}
                  />

                  <Box
                    component="label"
                    htmlFor="image"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <CloudUploadIcon
                      sx={{ cursor: "pointer", color: "#7451cb" }}
                    />{" "}
                    <Box
                      component="span"
                      ml={1}
                      sx={{ fontWeight: "bold", cursor: "pointer" }}
                    >
                      Upload Image
                    </Box>
                  </Box>
                  <Stack direction="row" justifyContent="center">
                    <Box
                      sx={{
                        height: "fit-content",
                        width: "fit-content",
                      }}
                      mt={3}
                    >
                      {image && (
                        <Image
                          src={preview}
                          alt="Image blog"
                          width="500%"
                          height="400%"
                          objectFit="contain"
                        />
                      )}
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Box>
                    <Typography>Category</Typography>
                  </Box>
                  <FormGroup sx={{ flexDirection: "row" }}>
                    {categorys && (
                      <>
                        {categorys?.map((category: any) => (
                          <>
                            {category?.name && (
                              <FormControlLabel
                                key={category?.id}
                                control={
                                  <Checkbox
                                    color="primary"
                                    value={category?.id}
                                    {...register("topics[]", {
                                      required: true,
                                    })}
                                  />
                                }
                                label={category?.name}
                              />
                            )}
                          </>
                        ))}
                      </>
                    )}
                  </FormGroup>
                </Box>
              </Box>
              <Stack direction="row" mt={3} justifyContent="flex-end">
                <Box mr={1}>
                  <ButtonPrimary
                    onClick={handleClose}
                    color="error.main"
                    darkColor="#e90d37"
                    lightColor="#ff2f57"
                    boxShadow="rgb(255 23 68 / 30%) 0px 12px 14px 0px"
                  >
                    Cancel
                  </ButtonPrimary>
                </Box>
                <Box>
                  <ButtonPrimary type="submit" color="primary.main">
                    Public
                  </ButtonPrimary>
                </Box>
              </Stack>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CustomEditor;
