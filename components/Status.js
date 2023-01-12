import { Box, Flex, Tooltip, Image } from "@chakra-ui/react";

export default function Status() {
  return (
    <Flex flexDirection="column">
      <Box fontWeight="bold" fontSize={20} color="white">
        Status
      </Box>
      <Box fontSize={12} color="#c5c5c5">
        A Estrela da Noite aumenta a proteção contra balas em 5% e a radiação em
        5%. O efeito da estrela da noite é bastante insignificante, a menos que
        combinado, e pode-se facilmente combinar estrelas da noite e um artefato
        anti-radiação.
      </Box>
      <Flex gap="30px" mt="24px">
        <Flex>
          <Tooltip
            label="peso"
            rounded={4}
            fontSize={12}
            fontWeight="thin"
            bgColor="#646464"
            placement="top-start"
            openDelay="500"
          >
            <Image src="/iconbag.svg" width="25" height="25" />
          </Tooltip>
          <Box
            ml="3px"
            fontSize={12}
            color="#7FF149"
            my="auto"
            fontWeight="medium"
          >
            +4Kg
          </Box>
        </Flex>
        <Flex>
          <Tooltip
            label="peso"
            rounded={4}
            fontSize={12}
            fontWeight="thin"
            bgColor="#646464"
            placement="top-start"
            openDelay="500"
          >
            <Image src="/iconred.svg" width="25" height="25" />
          </Tooltip>
          <Box
            ml="3px"
            fontSize={12}
            color="#C84848"
            my="auto"
            fontWeight="medium"
          >
            -1
          </Box>
        </Flex>
        <Flex>
          <Tooltip
            label="peso"
            rounded={4}
            fontSize={12}
            fontWeight="thin"
            bgColor="#646464"
            placement="top-start"
            openDelay="500"
          >
            <Image src="/rub.svg" width="25" height="25" />
          </Tooltip>
          <Box
            ml="3px"
            fontSize={12}
            color="#D2AC4A"
            my="auto"
            fontWeight="medium"
          >
            5000
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
