import { FC, PropsWithChildren } from "react";
import Image from "next/legacy/image";
import { Box, Button, Grid } from "@mui/material";
import { A11y, Autoplay, Keyboard, EffectFade } from "swiper";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/* eslint-enable import/no-unresolved */
import { colors, loader, breakpoints as bp } from "styles/theme";
import back from "public/images/back.svg";
import forward from "public/images/forward.svg";

const SlideNavigation = () => {
  const swiper = useSwiper();
  const { mediumGrey } = colors;
  const buttonSize = 60;

  return (
    <Box
      sx={{
        width: "100%",
        zIndex: 1000,
        mt: 3,
      }}
    >
      <Grid container direction="row" spacing={3} alignItems="center">
        <Grid item>
          <Button onClick={() => swiper.slidePrev()}>
            <Image
              src={back}
              alt="Previous slide"
              loader={loader}
              width={buttonSize}
              height={buttonSize}
            />
          </Button>
          <Button onClick={() => swiper.slideNext()}>
            <Image
              src={forward}
              alt="Next slide"
              loader={loader}
              width={buttonSize}
              height={buttonSize}
            />
          </Button>
        </Grid>
        <Grid item flexGrow={1}>
          <Box
            sx={{
              height: "1px",
              width: "100%",
              backgroundColor: mediumGrey,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
type HorizontalCarouselProps = PropsWithChildren<{
  breakpoints?: any;
  columnOnMobile?: boolean;
  visibleCount?: number;
  spaceBetween?: number;
  paddingBottom?: number;
  autoplay?: boolean;
  transition?: any;
}>;

// const { mediumGrey } = colors;t

export const HorizontalCarousel: FC<HorizontalCarouselProps> = ({
  breakpoints = {},
  columnOnMobile = false,
  visibleCount = 2.5,
  spaceBetween = 40,
  paddingBottom = 90,
  autoplay = false,
  transition = "slide",
  children,
}) => {
  const { ps, ts } = bp;

  return (
    <Box>
      <Box
        sx={{
          display: "block",
          [ps]: { display: columnOnMobile ? "none" : "block" },
          [ts]: { display: "block" },
        }}
      >
        <Swiper
          modules={[A11y, Autoplay, Keyboard, EffectFade]}
          autoplay={
            autoplay ? { delay: 4000, disableOnInteraction: true } : false
          }
          spaceBetween={spaceBetween}
          slidesPerView={visibleCount}
          breakpoints={breakpoints}
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          keyboard
          effect={transition}
          fadeEffect={{
            crossFade: true,
          }}
          style={{ paddingBottom, height: "auto" }}
        >
          {(children as any).map((child: any, index: number) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              {child}
            </SwiperSlide>
          ))}
          <SlideNavigation />
        </Swiper>
      </Box>
      <Box
        sx={{
          display: "none",
          [ps]: { display: columnOnMobile ? "block" : "none" },
          [ts]: { display: "none" },
        }}
      >
        <Grid container direction="column">
          {(children as any).map((child: any, index: number) => (
            <Grid item key={index}>
              {child}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
