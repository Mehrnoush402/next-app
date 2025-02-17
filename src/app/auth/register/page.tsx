import { register } from "@/actions/register";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuiLink,
  TextField,
  Button,
} from "@mui/material";
import Link from "next/link";
import React, { useActionState } from "react";

export default function RegisterPage() {
  const [state, action, pending] = useActionState(register, undefined);
  return (
    <Card sx={{ width: 500 }} elevation={8}>
      <CardContent sx={{ padding: 4 }}>
        <form action={action}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5">ثبت نام</Typography>
            <MuiLink component={Link} href="login">
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
              <TextField
                fullWidth
                label="نام"
                variant="outlined"
                size="small"
              />
              <TextField
                fullWidth
                label="نام خانوادگی"
                variant="outlined"
                size="small"
              />
            </Stack>
            <TextField
              fullWidth
              label="رایانامه"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="کلمه عبور"
              variant="outlined"
              size="small"
            />
            <Typography variant="caption">
              با ثبت نام در سرویس ما شمابا همه قوانین سرویس موافقت خود را اعلام
              میدارید.
            </Typography>
            <Button
              disableElevation
              variant="contained"
              sx={{
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            >
              ثبت نام
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}
