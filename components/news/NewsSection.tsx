import { FC, useState } from "react";
import { Box, Grid } from "@mui/material";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { FilledButton } from "components/common/FilledButton";
import { NewsItem } from "components/common/NewsItem";

type NewsSectionProps = {
  pages: any[];
};

export const NewsSection: FC<NewsSectionProps> = ({ pages }) => {
  const [filter, setFilter] = useState(null);
  const { lightGrey, white, black, turquoise } = colors;
  /* eslint-disable no-param-reassign */
  const allCategories = pages.reduce((prev, current) => {
    prev[current.category] = prev[current.category] ?? 0 + 1;
    return prev;
  }, {});
  /* eslint-enable no-param-reassign */
  const categories = Object.keys(allCategories).sort();
  const filteredPages = pages.filter(
    (page) => !filter || page.category === filter,
  );

  return (
    <PageSection backgroundColor={lightGrey}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Box sx={{ pb: 6 }}>
            <Grid container direction="row" justifyContent="center" spacing={3}>
              {categories.map((category) => (
                <Grid item key={category}>
                  <FilledButton
                    backgroundColor={filter === category ? turquoise : white}
                    textColor={black}
                    onClick={() =>
                      setFilter(filter === category ? null : category)
                    }
                  >
                    {category}
                  </FilledButton>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        {filteredPages.map((page: any) => (
          <NewsItem key={page.path} {...page} />
        ))}
      </Grid>
    </PageSection>
  );
};
