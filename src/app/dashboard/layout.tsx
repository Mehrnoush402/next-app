import DrawerHeader from "@/components/dashboard-layout/components/DrawerHeader";
import DashboardHeader from "@/components/dashboard-layout/DashboardHeader";
import MiniDrawer from "@/components/dashboard-layout/MiniDrawer";
import { Box } from "@mui/material";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardHeader />
      {/* <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar> */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <MiniDrawer />
      </Box>
    </Box>
  );
}
