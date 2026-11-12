"use client";

import { Chip as MuiChip, type ChipProps as MuiChipProps } from "@mui/material";

interface CustomChipProps extends Omit<MuiChipProps, "variant"> {
  variant?: "filled" | "outlined";
}

export default function Chip({
  variant = "outlined",
  size = "small",
  ...props
}: CustomChipProps) {
  return (
    <MuiChip
      variant={variant}
      size={size}
      sx={{
        // borderRadius: "8px",
        // fontWeight: 600,
        fontSize: "0.75rem",
        // height: "28px",
        // "& .MuiChip-label": {
        //   px: 1.5,
        // },
        ...(variant === "outlined" && {
          // border: "1px solid",
          borderColor: "#171717",
          // color: "#171717",
          // backgroundColor: "transparent",
        }),
        ...(variant === "filled" && {
          backgroundColor: "#171717",
          color: "#ffffff",
        }),
      }}
      {...props}
    />
  );
}
