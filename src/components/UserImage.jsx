import { Box } from "@mui/material";
import defaultImage from "../assets/Designer.jpeg"; 

const UserImage = ({ image, size = "70px" }) => {
  const imageUrl = image ? `http://localhost:3001/assets/${image}` : defaultImage;

  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "60%" }}
        width={size}
        height={size}
        alt="user"
        src={imageUrl} 
      />
    </Box>
  );
};

export default UserImage;
