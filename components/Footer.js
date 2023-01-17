import { Box, Center, Flex, Link, Icon } from "@chakra-ui/react";
import { useInstantLayoutTransition } from "framer-motion";
import Image from "next/image";
import {
  BehanceLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
} from "phosphor-react";

export default function Footer({ mb }) {
  return (
    <Center mb={mb}>
      <Flex
        w="100%"
        h="290px"
        borderTop="1px"
        borderColor="#2B2B2B"
        bgColor="#151515"
        fontSize={12}
        color="#c5c5c5"
        flexDirection="column"
        alignItems="center"
      >
        <Link href="/.">
          <Flex mt="30px">
            <Image src="logo.svg" width="250" height="200" />
          </Flex>
        </Link>
        <Box
          textAlign="center"
          fontWeight="light"
          px={[10, 100, 200, 300, 400, 450]}
          mt="20px"
        >
          Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris que
          eu tomo, mas ninguém vê os tombis que eu levo!Si num tem leite então
          bota uma pinga aí cumpadi!Não sou faixa preta cumpadi, sou preto
          inteiris, inteiris.Tá deprimidis, eu conheço uma cachacis que pode
          alegrar sua vidis.
        </Box>
        <Flex my="auto" gap="50px" fontSize="30px">
          <Link href="/.">
            <Icon as={InstagramLogo} weight="fill" color="#646464" />
          </Link>
          <Link href="/.">
            <Icon as={YoutubeLogo} weight="fill" color="#646464" />
          </Link>
          <Link href="/.">
            <Icon as={FacebookLogo} weight="fill" color="#646464" />
          </Link>
          <Link href="/.">
            <Icon as={GithubLogo} weight="fill" color="#646464" />
          </Link>
          <Link href="/.">
            <Icon as={BehanceLogo} weight="fill" color="#646464" />
          </Link>
        </Flex>
      </Flex>
    </Center>
  );
}
