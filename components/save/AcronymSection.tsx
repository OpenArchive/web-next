import { FC, PropsWithChildren } from "react";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalCarousel } from "components/common/HorizontalCarousel";

export const AcronymSection: FC<PropsWithChildren> = ({ children }) => {
  const { lightGrey } = colors;

  return (
    <PageSection backgroundColor={lightGrey} sx={{ pb: 0 }}>
      <HorizontalCarousel
        visibleCount={1}
        autoplay
        paddingBottom={23}
        transition="fade"
      >
        {children}
      </HorizontalCarousel>
    </PageSection>
  );
};
