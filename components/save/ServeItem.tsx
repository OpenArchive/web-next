import { FC, PropsWithChildren } from "react";
import { Grid, Box } from "@mui/material";
import { colors, typography, breakpoints } from "styles/theme";

export const ServeItem: FC<PropsWithChildren> = ({ children }) => {
  const rest = children as any[];
  const { outlinedButton, bodyExtraLarge } = typography;
  const { turquoise } = colors;
  const { ps, tl } = breakpoints;

  return (
    <Grid
      item
      container
      justifyContent="space-around"
      className="serveItem"
      sx={{
        width: "50%",
        [ps]: { width: "100%" },
        [tl]: { width: "50%" },
      }}
    >
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
            "& p": { ...bodyExtraLarge },
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
