import { Center, Flex, Grid } from "@chakra-ui/react";

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
}) {
  return (
    <Flex
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
      <Grid mx="auto" templateColumns="repeat(12, 65px)" gap={30}>
        {children}
      </Grid>
    </Flex>
  );
}
