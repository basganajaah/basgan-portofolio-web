import { Stack, Typography, Divider, type StackProps } from "@mui/material";
import { useTranslations } from "next-intl";
import { numSection } from "@/lib/utils";

interface TitleSectionProps extends StackProps {
  category: string;
  reverse?: boolean;
}

export default function TitleSection({
  category,
  reverse = false,
  sx,
  ...props
}: TitleSectionProps) {
  const t = useTranslations("Projects");

  const titleNode = (
    <Typography
      sx={{
        fontWeight: 700,
        letterSpacing: "0.14em",
        whiteSpace: "nowrap",
        textTransform: "uppercase",
      }}
    >
      {t(category)}
    </Typography>
  );

  const dividerNode = (
    <Divider
      sx={{
        flex: 1,
        borderBottomWidth: 2,
        borderColor: "#171717",
      }}
    />
  );

  const numberNode = (
    <Typography sx={{ fontWeight: 700 }}>{numSection(category)}</Typography>
  );

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={[
        {
          alignItems: "center",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {!reverse ? (
        <>
          {titleNode}
          {dividerNode}
          {numberNode}
        </>
      ) : (
        <>
          {numberNode}
          {dividerNode}
          {titleNode}
        </>
      )}
    </Stack>
  );
}
