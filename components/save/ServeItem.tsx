import { FC, PropsWithChildren } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography } from "styles/theme";

export const ServeItem: FC<PropsWithChildren> = ({ children }) => {
  const rest = children as any[];
  const { outlinedButton, bodyLarge } = typography;
  const { turquoise } = colors;

  return (
    <Grid item container justifyContent="space-around" className="serveItem">
      <Grid
        item
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            a: outlinedButton,
            ul: { p: 0, pl: 3 },
            "& p": { ...bodyLarge, fontSize: "26px !important" },
            li: { pb: 3 },
            "li::marker": {
              color: turquoise,
              content: "'• '",
              fontSize: "30px",
              lineHeight: "0px",
              m: 0,
              p: 0,
            },
          }}
        >
          {rest}
        </Box>
      </Grid>
    </Grid>
  );
};
