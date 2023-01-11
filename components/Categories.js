import {
  Box,
  Flex,
  Center,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Categ() {
  return (
    <Flex
      flexDirection="column"
      rounded={8}
      h="480px"
      bgColor="#2c2c2c"
      mt="90px"
      boxShadow="0px 40px 40px -15px rgba(0,0,0,0.2)"
    >
      <Center color="#d2d2d2" fontWeight="bold" fontSize={20} mt="15px">
        CATEGORIAS
      </Center>
      <Divider mt="15px" borderColor="#424242" />

      <Box p="20px" color="#d2d2d2" fontWeight="regular" fontSize={20}>
        Raridade
      </Box>
      <UnorderedList px="20px" fontWeight="regular" fontSize={12}>
        <ListItem color="#d2d2d2" _hover={{ textDecoration: "underline" }}>
          <Link href="/.">Comum</Link>
        </ListItem>
        <ListItem color="#7FF149" _hover={{ textDecoration: "underline" }}>
          <Link href="/.">Incomum</Link>
        </ListItem>
        <ListItem color="#4978F1" _hover={{ textDecoration: "underline" }}>
          <Link href="/.">Raro</Link>
        </ListItem>
        <ListItem color="#A749F1" _hover={{ textDecoration: "underline" }}>
          <Link href="/.">Raro+</Link>
        </ListItem>
        <ListItem color="#F1AE49" _hover={{ textDecoration: "underline" }}>
          <Link href="/.">Ultra raro</Link>
        </ListItem>
      </UnorderedList>

      <Divider mt="15px" borderColor="#424242" />

      <Box p="20px" color="#d2d2d2" fontWeight="regular" fontSize={20}>
        Localidades
      </Box>
      <UnorderedList
        px="20px"
        color="#d2d2d2"
        fontWeight="regular"
        fontSize={12}
      >
        <ListItem _hover={{ textDecorationLine: "underline" }}>
          <Link href="/.">Agropom</Link>
        </ListItem>
        <ListItem _hover={{ textDecorationLine: "underline" }}>
          <Link href="/.">Army Warehouses</Link>
        </ListItem>
        <ListItem _hover={{ textDecorationLine: "underline" }}>
          <Link href="/.">Brain Schorcher</Link>
        </ListItem>
        <ListItem _hover={{ textDecorationLine: "underline" }}>
          <Link href="/.">Cordon</Link>
        </ListItem>
        <ListItem _hover={{ textDecorationLine: "underline" }}>
          <Link href="/.">Carbage</Link>
        </ListItem>
        <ListItem _hover={{ textDecorationLine: "underline" }}>
          <Link href="/.">CNPP</Link>
        </ListItem>
        <ListItem _hover={{ textDecorationLine: "underline" }}>
          <Link href="/.">Dark Valley</Link>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
}
