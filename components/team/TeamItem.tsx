import { FC, PropsWithChildren } from "react";
import { colors } from "styles/theme";
import { PersonItem } from "components/team/PersonItem";
import { loadImage } from "lib/frontendHelpers";

type TeamItemProps = PropsWithChildren<{
  expand?: boolean;
}>;

export const TeamItem: FC<TeamItemProps> = ({ expand = false, children }) => {
  const { white } = colors;
  const [first, name, jobTitle, ...bio] = children as any[];
  const image = loadImage(first);

  return (
    <PersonItem
      name={name}
      jobTitle={jobTitle}
      bio={bio}
      image={image}
      backgroundColor={white}
      expand={expand}
    />
  );
};
