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
      alignContent="center"
    >
      <SimpleGrid
        w={[100, 200, 1110]}
        mx="auto"
        columns={[4, 9, 12]}
        gap={30}
        autoRows="max-content"
      >
        {children}
      </SimpleGrid>
    </Flex>
  );
}
