import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints, loader } from "styles/theme";
import { loadImage, getURL } from "lib/frontendHelpers";
import rightArrow from "public/images/right-arrow.svg";

export const MoreItem: FC<PropsWithChildren> = ({ children }) => {
  const { white, turquoise } = colors;
  const { ps, tl } = breakpoints;
  const [first, title, last] = children as any[];
  const image = loadImage(first);
  const url = getURL(last);

  return (
    <Grid
      item
      sx={{
        width: "33%",
        cursor: "pointer",
        [ps]: { width: "100%" },
        [tl]: { width: "33%" },
        "&:hover": {
          "& h5": {
            color: turquoise,
          },
          "& img": {
            filter:
              "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
          },
        },
      }}
    >
      <Link href={url}>
        <Grid container direction="column" sx={{ backgroundColor: white }}>
          <Grid item container direction="row" justifyContent="space-between">
            <Grid item>
              <Box sx={{ width: "100%", backgroundColor: white, p: 3 }}>
                {title}
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ px: 3, py: 5 }}>
                <Image
                  src={rightArrow}
                  alt=""
                  loader={loader}
                  width={20}
                  height={20}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Box
              sx={{
                height: "300px",
                width: "100%",
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                p: 3,
              }}
            />
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
};
