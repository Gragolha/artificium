import { Box, Button, Center, Flex, Icon, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";

export default function CardArt({
  name,
  children,
  rare,
  colorRare,
  artifactImg,
}) {
  return (
    <Flex
      flexDirection="column"
      rounded={8}
      bgColor="#2c2c2c"
      h="390px"
      fontFamily="Inter"
    >
      <Flex
        roundedTop={8}
        flexDirection="column"
        bgGradient={`linear(to-bl, ${colorRare} -800%, transparent)`}
      >
        <Flex mt="15px" mr="15px" ml="auto" fontSize={8} color={colorRare}>
          {rare}
          <Icon
            viewBox="0 0 200 200"
            boxSize="3"
            color={colorRare}
            ml="5px"
            my="auto"
          >
            <path
              fill="currentColor"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
        </Flex>

        <Center>
          <Image src={artifactImg} width="190" height="190" />
        </Center>
      </Flex>

      <Flex
        h="100%"
        flexDirection="column"
        borderTop="1px solid #424242"
        w="100%"
        roundedBottom={8}
        px="20px"
        py="15px"
      >
        <Box fontSize={16} fontWeight="bold" color="white">
          {name}
        </Box>

        <Box color="#c5c5c5" fontSize={12} mt="8px" h="55px" overflow="hidden">
          {children}
        </Box>
        <Flex mt="auto" gap="10px" flexDirection="column" cursor="default">
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
              <Image src="/iconbag.svg" width="15" height="100" />
            </Tooltip>
            <Box
              ml="3px"
              fontSize={12}
              color="#7FF149"
              my="auto"
              fontWeight="b"
            >
              +4Kg
            </Box>
            <Flex ml="10px">
              <Tooltip
                label="radiação"
                rounded={4}
                fontSize={12}
                fontWeight="thin"
                bgColor="#646464"
                placement="top-start"
                openDelay="500"
              >
                <Image src="/iconred.svg" width="15" height="100" />
              </Tooltip>
              <Box
                ml="3px"
                fontSize={12}
                color="#C84848"
                my="auto"
                fontWeight="bold"
              >
                -2
              </Box>
            </Flex>
          </Flex>

          <Flex>
            <Tooltip
              label="Rublos"
              rounded={4}
              fontSize={12}
              fontWeight="thin"
              bgColor="#646464"
              placement="top-start"
              openDelay="500"
            >
              <Image src="rub.svg" width="15" height="15" />
            </Tooltip>
            <Box
              ml="3px"
              fontSize={12}
              color="#D2AC4A"
              my="auto"
              fontWeight="bold"
            >
              5000
            </Box>
            <Button
              fontSize={12}
              ml="auto"
              gap="5px"
              bgColor="#3f3f3f"
              color="white"
              h="21px"
              _hover={{
                bgColor: "#4F4F4F",
                transform: "scale(1.05)",
                boxShadow: "0px 4px 9px rgba(0,0,0,0.1)",
              }}
            >
              Ver mais
              <Icon as={ArrowRight} weight="bold" fontSize="auto" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
