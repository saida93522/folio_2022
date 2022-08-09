import { Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="px-12 flex sm:justify-between sm:items-center sm:flex ">
        <Text size={"0.7rem"} color={"#697177"} weight="thin">
          &copy; 2022 Saida Hussen. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
