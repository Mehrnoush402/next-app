import LoginForm from "@/components/forms/LoginForm";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";
import React from 'react'

export default function LoginPage() {
  return (
    <Card sx={{ width: 500 }} elevation={8}>
      <CardContent sx={{ padding: 4 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">ورود</Typography>
          <MuiLink component={Link} href="register">
          ساخت اکانت؟
          </MuiLink>
        </Stack>
        <LoginForm/>
      </CardContent>
    </Card>
  );
}
