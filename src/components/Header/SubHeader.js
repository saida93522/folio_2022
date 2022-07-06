import { Text, Card } from "@nextui-org/react";
const SubHeader = ({ subTitle }) => {
  return (
    <Text
      h3
      className="pb-5 subtitle"
      css={{ fontSize: "$fs_md" }}
      weight={"semibold"}
      transform={"capitalize"}
    >
      {subTitle}
      <Card.Divider css={{ backgroundColor: "$lineColor", opacity: 0.3 }} />
    </Text>
  );
};

export default SubHeader;
