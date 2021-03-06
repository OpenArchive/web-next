import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints, loader } from "styles/theme";

type PersonItemProps = {
  name: string;
  jobTitle?: string;
  bio: any;
  image: StaticImageData;
  backgroundColor: string;
};

export const PersonItem: FC<PersonItemProps> = ({
  name,
  jobTitle = "",
  bio,
  image,
  backgroundColor,
}) => {
  const { turquoise } = colors;
  const { bodyLarge } = typography;
  const { ps, tl } = breakpoints;

  return (
    <Grid item>
      <Box sx={{ backgroundColor, p: 6, pb: 0 }}>
        <Grid
          item
          container
          flexWrap="nowrap"
          spacing={4}
          sx={{
            flexDirection: "row",
            [ps]: { flexDirection: "column" },
            [tl]: { flexDirection: "row" },
          }}
        >
          <Grid
            item
            container
            direction="row"
            sx={{ width: "50%" }}
            flexWrap="nowrap"
            spacing={4}
          >
            <Grid item>
              <Box sx={{ mt: -10, width: 120 }}>
                <Image src={image} alt="" loader={loader} />
              </Box>
            </Grid>
            <Grid item container direction="column">
              {name}
              <Box sx={{ mt: 2, "> p": { color: turquoise } }}>{jobTitle}</Box>
            </Grid>
          </Grid>
          <Grid item container direction="column" sx={{ width: "50%" }}>
            <Grid item>
              <Box component="p" sx={{ ...bodyLarge, pb: 3 }}>
                {bio}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
