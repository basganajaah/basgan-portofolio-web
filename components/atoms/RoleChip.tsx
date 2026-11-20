import { Chip as MuiChip, type ChipProps as MuiChipProps } from "@mui/material";

interface CustomChipProps extends Omit<MuiChipProps, "variant"> {
  variant?: "filled" | "outlined";
}

export default function Chip({
  variant = "filled",
  size = "small",
  sx,
  ...props
}: CustomChipProps) {
  return (
    <MuiChip
      variant={variant}
      size={size}
      sx={[
        {
          fontSize: { xs: "0.65rem", md: "0.75rem" },
          border: "none",
          color: "background.paper",
          fontWeight: 500,
        },
        variant === "outlined"
          ? {
              bgcolor: "transparent",
            }
          : {
              bgcolor: "primary.main",
            },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
}
