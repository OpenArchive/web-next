import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ContentSection: FC<PropsWithChildren> = ({ children }) => {
  const { white } = colors;
  const { bodyLarge } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
          "& p": bodyLarge,
          li: { ...bodyLarge, mb: 1 },
          mt: -5,
        }}
      >
        {children}
      </Box>
    </PageSection>
  );
};
