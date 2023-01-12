import { Box, Button, Flex } from "@chakra-ui/react";

export default function Introduction({ mt }) {
  return (
    <Flex flexDirection="column" fontFamily="inter" mt={mt}>
      <Box fontSize={48} fontWeight="extrabold" color="white">
        NIGHT STAR
      </Box>
      <Box fontSize={12} color="#c5c5c5">
        Este maravilhoso artefato é formado pela anomalia Springboard. O uso do
        artefato exige a neutralização da radiação mortal. Caro e raro, este
        artefato é extremamente interessante para expedições científicas e
        outras atividades de pesquisa na Zona
      </Box>
      <Button
        _hover={{ transform: "scale(1.03)", bgColor: "#484848" }}
        color="white"
        mt="20px"
        w="255px"
        rounded={90}
        bgColor="#2c2c2c"
      >
        Mais Informações
      </Button>
    </Flex>
  );
}
