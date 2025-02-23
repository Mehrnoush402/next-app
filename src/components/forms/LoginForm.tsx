"use client";
import { login } from "@/actions/login";
import { Box, Button, Stack, TextField } from "@mui/material";

import React, { useActionState } from "react";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action}>
      <Stack gap={3}>
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
          ورود
        </Button>
      </Stack>
    </form>
  );
}
