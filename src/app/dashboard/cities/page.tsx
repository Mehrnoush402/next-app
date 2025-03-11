import { getCities } from "@/app/server-api/cities";
import {
  TableHead,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box,
  Skeleton,
} from "@mui/material";
import React, { Suspense } from "react";
import CityTable from "./CityTable";

export default async function CitiesPage() {
  getCities();
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>شناسه</TableCell>
              <TableCell>کد شهر</TableCell>
              <TableCell>نام فارسی</TableCell>
              <TableCell>شناسه کد</TableCell>
              <TableCell>تاریخ ساخت</TableCell>
              <TableCell>آخرین بروزرسانی</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Suspense
              fallback={
                <TableRow>
                  <TableCell sx={{minHeight:10}}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </TableCell>
                  <TableCell>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </TableCell>
                </TableRow>
              }
            >
              <CityTable />
            </Suspense>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
