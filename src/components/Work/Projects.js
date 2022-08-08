import { Row, Text, Link } from "@nextui-org/react";
import SubHeader from "../Header/SubHeader";
import { CgArrowTopRight } from "@react-icons/all-files/cg/CgArrowTopRight";

export const Projects = ({ item }) => {
  return (
    <>
      <Row wrap={"wrap"} justify="flex-start" align="flex-end">
        <Link
          className="align-baseline"
          href={item.live}
          target="_blank"
          rel="noopener"
          css={{ color: "$titleColor", fontSize: "$fs_md" }}
        >
          <SubHeader subTitle={item.title} />
          <span className="align-baseline">
            <CgArrowTopRight className="fs_sm " />
          </span>
        </Link>
      </Row>

      <Text className="fs_sm w-5/6 md:w-3/5 pb-3" css={{ fontSize: "$fs_sm" }}>
        {item.text}
      </Text>
    </>
  );
};

export default Projects;
