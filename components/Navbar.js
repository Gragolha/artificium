import {
  Flex,
  GridItem,
  Input,
  Icon,
  Menu,
  MenuList,
  MenuButton,
  Box,
  UnorderedList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  ListItem,
} from "@chakra-ui/react";
import MyGrid from "./Grid";
import Image from "next/image";
import { Chat } from "phosphor-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <MyGrid
      boxShadow="0px  4px 90px rgba(0,0,0,0.5)"
      h="60px"
      bgColor="rgba(217,217,217,.01)"
      fixed
      backdropBlur="40px"
      backdropFilter="auto"
    >
      <GridItem colStart={1} colSpan={3}>
        <Link href="/.">
          <Flex my="auto">
            <Image src="logo.svg" width="200" height="200" />
          </Flex>
        </Link>
      </GridItem>

      <GridItem my="auto" colStart={5} colSpan={4}>
        <Input
          _placeholder={{ color: "rgba(255,255,255,.1)" }}
          fontSize={12}
          placeholder="Pesquisar"
          bgColor="rgba(0,0,0,0.05)"
          rounded={8}
          borderColor="rgba(255,255,255,.1)"
          size="sm"
          focusBorderColor="#fcba03"
        />
      </GridItem>

      <GridItem my="auto" ml="-90%" colStart={10} color="white">
        <Link href="/.">Artefatos</Link>
      </GridItem>

      <GridItem my="auto" ml="-30%" color="white" colEnd={12}>
        <Link href="/.">Localidades</Link>
      </GridItem>

      <GridItem my="auto" colEnd={13}>
        <Flex w="100%" flexDirection="row-reverse" ml="-25%">
          <Menu placement="bottom-end">
            <MenuButton>
              <Icon as={Chat} color="white" fontSize={32} />
            </MenuButton>
            <Box>
              <MenuList
                mt="3px"
                blur="lg"
                minH="220px"
                minW="170px"
                boxShadow="0px 4px 40px rgba(0,0,0,0.3)"
                bgColor="rgba(41,41,41,0.3)"
                color="white"
                border="none"
              >
                <MenuGroup
                  fontSize={20}
                  textAlign="center"
                  title="Notificações"
                >
                  <MenuDivider />
                  <UnorderedList px="20px">
                    <ListItem>
                      <MenuItem bgColor="transparent">Updates</MenuItem>
                    </ListItem>
                  </UnorderedList>
                </MenuGroup>
              </MenuList>
            </Box>
          </Menu>
        </Flex>
      </GridItem>
    </MyGrid>
  );
}
