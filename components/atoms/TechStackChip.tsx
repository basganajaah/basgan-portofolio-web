import { Chip } from "@mui/material";

interface TechStackChipProps {
  label: string;
}

export default function TechStackChip({ label }: TechStackChipProps) {
  return (
    <Chip
      label={label}
      size="small"
      variant="outlined"
      sx={{
      //   height: 28,
      //   borderRadius: "6px",
        fontSize: "0.75rem",
      //   fontWeight: 500,
      //   border: "2px solid",
        borderColor: "#171717",
      //   color: "#171717",
      //   backgroundColor: "transparent",
      }}
    />
  );
}
