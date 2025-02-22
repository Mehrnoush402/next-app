"use client";
import { register } from "@/actions/register";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
 
} from "@mui/material";

import React, { useActionState } from "react";

export default function RegisterForm() {
  const [state, action, pending] = useActionState(register, undefined);
  return (
    <form action={action}>
      <Stack gap={3}>
        <Stack
          mt={2}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={1}
        >
          <TextField
            error={!!state?.errors?.firstName}
            helperText={state?.errors?.firstName}
            name="firstName"
            fullWidth
            label="نام"
            variant="outlined"
            size="small"
          />
          <TextField
            error={!!state?.errors?.lastName}
            helperText={state?.errors?.lastName}
            name="lastName"
            fullWidth
            label="نام خانوادگی"
            variant="outlined"
            size="small"
          />
        </Stack>
        <TextField
          error={!!state?.errors?.email}
          helperText={state?.errors?.email}
          name="email"
          fullWidth
          label="رایانامه"
          variant="outlined"
          size="small"
        />
        <TextField
          error={!!state?.errors?.password}
          helperText={state?.errors?.password?.map((err: string) => (
            <Box component="span" display="block" key={err}>
              {err}
            </Box>
          ))}
          name="password"
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
          disabled={pending}
          type="submit"
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
  );
}
