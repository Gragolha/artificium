import { Center, Flex, Grid, SimpleGrid } from "@chakra-ui/react";

export default function MyGrid({
  mt,
  children,
  bgColor,
  h,
  borderBottom,
  fixed,
  zIndex,
  backdropFilter,
  backdropBlur,
  boxShadow,
  minH,
  overX,
  mb,
}) {
  return (
    <Flex
      mb={mb}
      overflowX={overX}
      minH={minH}
      boxShadow={boxShadow}
      backdropFilter={backdropFilter}
      backdropBlur={backdropBlur}
      zIndex={zIndex}
      position={fixed ? "fixed" : ""}
      bgColor={bgColor || "#151515"}
      w="100%"
      h={h}
      borderBottom={borderBottom}
      mt={mt}
      fontFamily="Inter"
    >
      <SimpleGrid
        w="1110px"
        mx="auto"
        columns="12"
        gap={30}
        autoRows="max-content"
      >
        {children}
      </SimpleGrid>
    </Flex>
  );
}
