import "./Feed.css";
import "../SideBar.css";
import {
  EditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import FileDownloadSharpIcon from '@mui/icons-material/FileDownloadSharp';
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,

} from "@mui/material";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../state";
import FlexBetween from "../../../components/FlexBetween";
import WidgetWrapper from "../../../components//WidgetWrapper";
import UserImage from "../../../components/UserImage";

const Feed = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;


  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }
   
const response = await fetch("http://localhost:3001/posts", {
  method: "POST",
  headers: { Authorization: `Bearer ${token}` },
  body: formData,
});

if (response.status === 409) {
  const data = await response.json();
  alert(`Conflict error: ${data.message}`); // Handle conflict errors here
} else if (!response.ok) {
  alert('Error: The post could not be created.');
} else {
  const posts = await response.json();
  dispatch(setPosts({ posts }));
  setImage(null);
  setPost("");
}}

  return (
    <WidgetWrapper>
    <FlexBetween gap="1.5rem">
      <UserImage image={picturePath} />
      <InputBase
        placeholder="Compartilhe algo legal..."
        onChange={(e) => setPost(e.target.value)}
        value={post}
        sx={{
          width: "100%",
          backgroundColor: palette.neutral.light,
          borderRadius: "2rem",
          padding: "1rem 2rem",
        }}
      />
    </FlexBetween>
    {isImage && (
      <Box
        border={`1px solid ${medium}`}
        borderRadius="5px"
        mt="1rem"
        p="1rem"
      >
        <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
        >
          {({ getRootProps, getInputProps }) => (
            <FlexBetween>
              <Box
                {...getRootProps()}
                border={`2px dashed ${palette.primary.main}`}
                p="1rem"
                width="100%"
                sx={{ "&:hover": { cursor: "pointer" } }}
              >
                <input {...getInputProps()} />
                {!image ? (
                  <p>Adicionar Imagem</p>
                ) : (
                  <FlexBetween>
                    <Typography>{image.name}</Typography>
                    <EditOutlined />
                  </FlexBetween>
                )}
              </Box>
              {image && (
                <IconButton
                  onClick={() => setImage(null)}
                  sx={{ width: "15%" }}
                >
                  <DeleteOutlined />
                </IconButton>
              )}
            </FlexBetween>
          )}
        </Dropzone>
      </Box>
    )}
    <Divider sx={{ margin: "1.25rem 0" }} />
    <FlexBetween>
      <FlexBetween gap="0.15rem" onClick={() => setIsImage(!isImage)}>
        <FileDownloadSharpIcon sx={{ color: mediumMain }} />
        <Typography
          color={mediumMain}
          sx={{ "&:hover": { cursor: "pointer", color: medium } }}
        >
          Imagem
        </Typography>
      </FlexBetween>
      <Button
        disabled={!post}
        onClick={handlePost}
        sx={{
          color: palette.background.alt,
          backgroundColor: palette.primary.main,
          borderRadius: "3rem",
        }}
      >
        POSTAR
      </Button>
    </FlexBetween>
  </WidgetWrapper>
);
};

export default Feed;
