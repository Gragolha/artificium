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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  useDisclosure,
  ModalBody,
  Text,
  ModalFooter,
  Button,
  Divider,
} from "@chakra-ui/react";
import MyGrid from "./Grid";
import Image from "next/image";
import { Chat, ClosedCaptioning, X, XSquare } from "phosphor-react";
import Link from "next/link";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <MyGrid
        zIndex="2"
        boxShadow="0px  4px 90px rgba(0,0,0,0.5)"
        h="60px"
        bgColor="rgba(217,217,217,.01)"
        fixed
        backdropBlur="40px"
        backdropFilter="auto"
      >
        <GridItem colStart={1} colSpan={3}>
          <Link href="/.">
            <Flex mt="10px">
              <Image src="logo.svg" width="200" height="200" />
            </Flex>
          </Link>
        </GridItem>
        {/* MaxH = limita o tamanho maximo, MinH = obriga a ser o tamanho minimo delimitado */}

        <GridItem my="auto" colStart={5} colSpan={4}>
          <Input
            _placeholder={{ color: "rgba(255,255,255,.15)" }}
            _hover={{
              bgColor: "rgba(0,0,0,0.2)",
              borderColor: "rgba(252, 186, 3, 0.5)",
            }}
            fontSize={12}
            placeholder="Pesquisar"
            bgColor="rgba(0,0,0,0.05)"
            color="white"
            rounded={8}
            borderColor="rgba(255,255,255,.15)"
            size="sm"
            focusBorderColor="#fcba03"
          />
        </GridItem>

        <GridItem
          fontWeight="thin"
          my="auto"
          ml="-90%"
          colStart={10}
          color="white"
        >
          <Link href="/.">Artefatos</Link>
        </GridItem>

        <GridItem
          fontWeight="thin"
          my="auto"
          ml="-40%"
          color="white"
          colEnd={12}
        >
          <Link href="/.">Localidades</Link>
        </GridItem>

        <GridItem my="auto" colEnd={13}>
          <Flex w="100%" flexDirection="row-reverse" ml="-25%">
            <Menu placement="bottom-end">
              <MenuButton>
                <Icon as={Chat} color="white" fontSize={32} />
              </MenuButton>
              <Flex>
                <MenuList
                  mt="3px"
                  blur="lg"
                  minH="220px"
                  minW="170px"
                  boxShadow="0px 4px 40px rgba(0,0,0,0.3)"
                  bgColor="#181818"
                  color="white"
                  border="none"
                >
                  <MenuGroup
                    fontSize={20}
                    textAlign="center"
                    title="Notificações"
                  >
                    <MenuDivider opacity="10%" />
                    <UnorderedList px="20px">
                      <ListItem>
                        <MenuItem
                          onClick={onOpen}
                          rounded={8}
                          _hover={{ bgColor: "rgba(217,217,217,.05)" }}
                          bgColor="transparent"
                        >
                          Updates
                        </MenuItem>
                      </ListItem>
                    </UnorderedList>
                  </MenuGroup>
                </MenuList>
              </Flex>
            </Menu>
          </Flex>
        </GridItem>
      </MyGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent
          bgColor="rgba(255,255,255,0.02)"
          backdropFilter="auto"
          backdropBlur="60px"
          backdropSaturate="150%"
          boxShadow="0px 20px 90px rgba(0,0,0,0.4)"
        >
          <ModalHeader color="#FFF" fontSize={24} textAlign="center">
            Updates
            <Icon
              viewBox="0 0 200 200"
              boxSize="4"
              color="red"
              ml="5px"
              my="auto"
            >
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
          </ModalHeader>
          <Divider borderColor="#424242" />
          <ModalBody>
            <Text color="#d3d3d3" p="10px">
              Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et
              quo num tendi nada.Casamentiss faiz malandris se pirulitá.Sapien
              in monti palavris qui num significa nadis i pareci latim.Quem num
              gosta di mim que vai caçá sua turmis! Interagi no mé, cursus quis,
              vehicula ac nisi.Mais vale um bebadis conhecidiss, que um
              alcoolatra anonimis.Admodum accumsan disputationi eu sit. Vide
              electram sadipscing et per.Vehicula non. Ut sed ex eros. Vivamus
              sit amet nibh non tellus tristique interdum.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              fontSize={12}
              gap="5px"
              bgColor="#3f3f3f"
              color="white"
              h="21px"
              _hover={{
                bgColor: "#184fb5",
                transform: "scale(1.05)",
                boxShadow: "0px 4px 9px rgba(0,0,0,0.1)",
              }}
              onClick={onClose}
            >
              Close
              <Icon as={X} />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
