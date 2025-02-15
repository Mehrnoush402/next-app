import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuiLink,
  TextField,
  Button,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function RegisterPage() {
  return (
    <Card sx={{ width: 500 }}>
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">ثبت نام</Typography>
          <MuiLink component={Link} href="auth/login">
            قبلا ثبت نام کرده اید؟
          </MuiLink>
        </Stack>
        <Stack gap={3}>
          <Stack
            mt={2}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap={1}
          >
            <TextField fullWidth label="نام" variant="outlined" />
            <TextField fullWidth label="نام خانوادگی" variant="outlined" />
          </Stack>
          <TextField fullWidth label="رایانامه" variant="outlined" />
          <TextField fullWidth label="کلمه عبور" variant="outlined" />
          <Typography variant="caption">
            با ثبت نام در سرویس ما شمابا همه قوانین سرویس موافقت خود را اعلام
            .میدارید
          </Typography>
          <Button
            disableElevation
            variant="contained"
            sx={{
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            ثبت نام
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
