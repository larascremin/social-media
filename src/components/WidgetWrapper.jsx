import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "24px 24px 12px 24px",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "30px",
  marginTop: "50px",
  marginLeft: "440px",
  marginRight: "140px",
}));

export default WidgetWrapper;
