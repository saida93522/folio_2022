import { Loading, Text } from "@nextui-org/react";

const Preload = () => {
  return (
    <div className="loader-wrapper fixed inset-0 w-screen h-screen">
      <Loading type="points-opacity" className="loader">
        <Text h1 css={{ color: "#dbd8d6", fontSize: "$fs_sm" }}>
          Loading...
        </Text>
      </Loading>
    </div>
  );
};

export default Preload;
