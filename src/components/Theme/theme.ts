
import { colors, createTheme, Theme } from "@mui/material";
 const theme: Theme = createTheme({
   direction: "rtl",
   typography: {
     fontFamily:"vazirmatn",
   },
   palette: {
     background: {
       default: colors.grey[200],
     },
   },
 });
 export default theme
