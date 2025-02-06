"use client"

import React, { PropsWithChildren } from 'react'
import {ThemeProvider as MuiProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from '@emotion/react';
import theme from './theme';

export default function ThemeProvider({children}:PropsWithChildren) {
   
        

    const cacheRtl = createCache({
      key: "muirtl",
      stylisPlugins: [prefixer, rtlPlugin],
    });

  return (
    <CacheProvider value={cacheRtl}>
        <MuiProvider theme={theme}>
            {children}
        </MuiProvider>
    </CacheProvider>
  )
}
