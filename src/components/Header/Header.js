import { Row, Text, Card } from "@nextui-org/react";

const Header = ({ title }) => {
  return (
    <Row xs={12} id={`${title}`}>
      <Text
        h2
        transform={"capitalize"}
        weight={"hairline"}
        className="title text-left"
        css={{
          color: "$titleColor",
          pb: "1vh",
          fontSize: "$title",
        }}
      >
        {title}
        <Card.Divider
          css={{
            backgroundColor: "$lineColor",
            height: "0.35vh",
            width: " min(7.7rem, 3.6ch)",
          }}
        />
      </Text>
    </Row>
  );
};

export default Header;
