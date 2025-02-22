import RegisterForm from "@/components/forms/RegisterForm";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

import React from "react";

export default function RegisterPage() {
  

  return (
    <Card sx={{ width: 500 }} elevation={8}>
      <CardContent sx={{ padding: 4 }}>
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
        <RegisterForm />
      </CardContent>
    </Card>
  );
}
