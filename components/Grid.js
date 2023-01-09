import { Center, Grid } from "@chakra-ui/react";

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
}) {
  return (
    <Center
      boxShadow={boxShadow}
      backdropFilter={backdropFilter}
      backdropBlur={backdropBlur}
      zIndex={zIndex}
      position={fixed ? "fixed" : ""}
      width="100%"
      bgColor={bgColor || "#13171f"}
      h={h}
      borderBottom={borderBottom}
      mt={mt}
    >
      <Grid templateColumns="repeat(12, 64px)" gap={4}>
        {children}
      </Grid>
    </Center>
  );
}
