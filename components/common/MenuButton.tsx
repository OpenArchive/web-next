import { FC, PropsWithChildren, useRef } from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import { Box, Button, Grid } from "@mui/material";
import PopupState, { bindHover, bindPopover } from "material-ui-popup-state";
import HoverPopover from "material-ui-popup-state/HoverPopover";
import { colors, typography, loader } from "styles/theme";
import downArrow from "public/images/down-arrow.svg";

type MenuButtonProps = PropsWithChildren<{
  title: string;
  href: string;
}>;

export const MenuButton: FC<MenuButtonProps> = ({
  title,
  href = "",
  children,
}) => {
  const ref = useRef(null);
  const { black, turquoise } = colors;
  const { body } = typography;
  const isBrowser = typeof window !== "undefined";

  return isBrowser ? (
    <PopupState variant="popover" popupId={title}>
      {(popupState) => (
        <Box
          sx={{
            height: "100%",
            a: { textDecoration: "none" },
            "a:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Link href={href}>
            <Button
              ref={ref}
              sx={{
                ...body,
                height: "100%",
                textAlign: "center",
                fontWeight: 700,
                textTransform: "none",
                color: black,
                whiteSpace: "nowrap",
                cursor: "pointer",
                border: 0,
                borderTop: `6px solid transparent`,
                borderRadius: 0,
                "&:hover": {
                  color: turquoise,
                  borderTop: `6px solid ${turquoise}`,
                  backgroundColor: "transparent",
                  img: {
                    filter:
                      "brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(4262%) hue-rotate(155deg) brightness(99%) contrast(101%)",
                  },
                },
              }}
              {...bindHover(popupState)}
            >
              <Grid container direction="row" wrap="nowrap">
                <Grid item>{title}</Grid>
                {children && (
                  <Grid item>
                    <Box sx={{ ml: "6px", mr: "-6px", mt: "-3px", width: 20 }}>
                      <Image src={downArrow} alt="" loader={loader} />
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Button>
          </Link>
          {children && (
            <HoverPopover
              elevation={0}
              {...bindPopover(popupState)}
              anchorEl={ref.current}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                  backgroundColor: `${turquoise}df`,
                  minWidth: 584,
                  mt: -1,
                  a: { textDecoration: "none" },
                },
              }}
            >
              <Box sx={{ pt: 1 }}>{children}</Box>
            </HoverPopover>
          )}
        </Box>
      )}
    </PopupState>
  ) : null;
};
