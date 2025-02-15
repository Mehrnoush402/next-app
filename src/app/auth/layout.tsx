import { Box } from "@mui/material";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"100svh"}}>{children}</Box>
  );
}