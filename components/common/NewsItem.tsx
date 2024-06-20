import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { typography, colors, breakpoints } from "styles/theme";

type NewsItemProps = PropsWithChildren<{
  title: string;
  description: string;
  category: string;
  date: string;
  path: string;
  image: string;
}>;

export const NewsItem: FC<NewsItemProps> = ({
  title,
  description,
  category,
  date,
  path,
  image,
}) => {
  const { h5, bodyLarge } = typography;
  const { white, turquoise, darkGrey } = colors;
  const { ps, tl } = breakpoints;
  const loadedImage = require(`public/images/${image}`).default;

  return (
    <Grid item sx={{ width: "100%", "> a": { textDecoration: "none" } }}>
      <Link href={path}>
        <Box
          sx={{
            height: "600px",
            [ps]: { height: "auto" },
            [tl]: { height: "600px" },
            overflow: "hidden",
            cursor: "pointer",
            ":hover": {
              ".teaserImage": {
                background: `linear-gradient(to top, ${turquoise}bb, ${turquoise}bb), url(${loadedImage.src}) center / cover`,
              },
            },
          }}
        >
          <Grid
            item
            container
            flexWrap="nowrap"
            spacing={0}
            sx={{
              flexDirection: "row",
              [ps]: { flexDirection: "column" },
              [tl]: { flexDirection: "row" },
            }}
          >
            <Grid item>
              <Box
                className="teaserImage"
                sx={{
                  minHeight: 200,
                  width: 400,
                  [ps]: { width: "100%", height: "300px" },
                  [tl]: { width: 400, height: "600px" },
                  p: 2,
                  backgroundImage: `url(${loadedImage.src})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              wrap="nowrap"
              sx={{
                mt: 0,
                p: 4,
                backgroundColor: white,
              }}
            >
              <Grid item>
                <Box
                  sx={{
                    ...bodyLarge,
                    color: darkGrey,
                  }}
                >
                  {date}
                </Box>
                <Box
                  sx={{
                    ...bodyLarge,
                    fontStyle: "italic",
                    color: turquoise,
                    mt: 2,
                  }}
                >
                  {category}
                </Box>
              </Grid>
              <Grid item>
                <Box
                  component="h5"
                  sx={h5}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </Grid>
              <Grid item>
                <Box component="p" sx={bodyLarge}>
                  {description}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};
