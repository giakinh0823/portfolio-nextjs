import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  Container,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import * as React from "react";
import { createReactEditorJS } from "react-editor-js";
import { useForm } from "react-hook-form";
import { useSWRConfig } from "swr";
import { blogApi } from "../../api-client/blogApi";
import { EDITOR_JS_TOOLS } from "../../constants/editor-js-tools";
import ButtonPrimary from "../common/button/ButtonPrimary";
import { useCategorys } from "../swr/useCategory";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CustomEditor = () => {
  const { mutate } = useSWRConfig();
  const ReactEditorJS = createReactEditorJS();
  const [data, setData] = React.useState<any>({});
  const [isContent, setIsContent] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const categorys = useCategorys();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editorJS = React.useRef<any>(null);

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

  const handlePublic = (data: any) => {
    const blog = {
      author: data.name,
      categorys: data.categorys,
      ...data,
    };
    (async () => {
      try {
        await mutate(`blogs`, () => blogApi.createBlog(blog));
        editorJS.current.clear();
      } catch (e) {
        console.log(e);
      }
    })();
    handleClose();
  };

  const onSubmit = (data: any) => {
    handlePublic(data);
  };

  return (
    <Box component="section" pt={{ xs: 8, md: 5 }} pb={{ xs: 6, md: 20 }}>
      <Container>
        <Stack sx={{ minHeight: "70vh" }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3">New Post</Typography>
          </Box>
          <Box sx={{ width: "100%" }} mt={8}>
            <ReactEditorJS
              onInitialize={handleInitialize}
              tools={EDITOR_JS_TOOLS}
              defaultValue={data?.blocks}
              onChange={handleSave}
              autofocus={true}
              focusOnLoad={true}
            />
          </Box>
        </Stack>
        {isContent && (
          <Stack direction="row" justifyContent="flex-end">
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
        sx={{ height: "fit-content", top: "30px" }}
      >
        <DialogTitle>Author</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your name here. Thank you for contributing a part to
            the site.
          </DialogContentText>
          <Box mt={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mb={5}>
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
                <Box>
                  <Box>
                    <Typography>Category</Typography>
                  </Box>
                  <FormGroup sx={{flexDirection: "row"}}>
                    {categorys && (
                      <>
                        {categorys?.categorys?.data.map((category: any) => (
                          <>
                            {category?.name && (
                              <FormControlLabel
                                key={category?.id}
                                control={<Checkbox color="primary" value={category?.id}  {...register("categorys[]", {required: true})}/>}
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
