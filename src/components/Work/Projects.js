import { Row, Text, Link, Col } from "@nextui-org/react";
import SubHeader from "../Header/SubHeader";
import { CgArrowTopRight } from "@react-icons/all-files/cg/CgArrowTopRight";

export const Projects = ({ item }) => {
  return (
    <Col>
      <Row wrap={"wrap"} justify="flex-start" align="flex-end">
        <Link
          className="align-baseline"
          href={item.live}
          target="_blank"
          rel="noopener"
          css={{ color: "$titleColor", fontSize: "$subtitle" }}
        >
          <SubHeader subTitle={item.title} />
          <span className="align-baseline">
            <CgArrowTopRight className="fs_sm " />
          </span>
        </Link>
      </Row>
      <Col>
        <Text className="fs_ssm w-5/6 md:w-3/5" css={{ fontSize: "$fs_sm" }}>
          {item.text}
        </Text>
      </Col>
    </Col>
  );
};

export default Projects;
