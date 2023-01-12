import { GridItem, Flex, Box } from "@chakra-ui/react";
import CardArt from "../components/CardArt";
import MyGrid from "../components/Grid";
import Navbar from "../components/Navbar";
import Categ from "../components/Categories";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Flex
        w="100%"
        bgColor="#151515"
        bgGradient="radial(1000px 900px at top  ,rgba(69, 60, 25, 0.6) , transparent)"
      >
        <MyGrid minH="100vh" overX="hidden" bgColor="transparent" mb="90px">
          <GridItem colStart={3} colSpan={9} mt="90px" ml="80px" mb="400px">
            <Image src="/nightstar.png" width="600" height="300" />
          </GridItem>
          <GridItem colStart={1} colSpan={7}>
            <Box color="#1D1D1D" fontSize={96} fontWeight="bold">
              ARTEFATOS
            </Box>
          </GridItem>
          <GridItem colStart={1} colSpan={3} rowSpan={4}>
            <Categ />
          </GridItem>

          <GridItem colStart={4} colSpan={3} rowSpan={1}>
            <CardArt
              name="NIGHT STAR"
              artifactImg="/nightstar.png"
              colorRare="#F1AE49"
              rare="ULTRA RARO"
            >
              Um artefato caro e raro, este maravilhoso artefato é formado pela
              anomalia Springboard.
            </CardArt>
          </GridItem>

          <GridItem colStart={7} colSpan={3}>
            <CardArt
              name="KOLOBOK"
              artifactImg="/kolobok.png"
              colorRare="#A749F1"
              rare="RARO+"
              _Hover={{}}
            >
              Um artefato relativamente raro que se forma em áreas contaminadas
              com produtos químicos.
            </CardArt>
          </GridItem>

          <GridItem colStart={10} colSpan={3}>
            <CardArt
              name="MOONLIGHT"
              artifactImg="/moonlight.png"
              colorRare="#4978F1"
              rare="RARO"
            >
              O Moonlight é um artefato raro, caso degenerado da atividade da
              Electro anomalia.
            </CardArt>
          </GridItem>
          <GridItem colStart={4} colSpan={3}>
            <CardArt
              name="MOONLIGHT"
              artifactImg="/moonlight.png"
              colorRare="#4978F1"
              rare="RARO"
            >
              O Moonlight é um artefato raro, caso degenerado da atividade da
              Electro anomalia.
            </CardArt>
          </GridItem>
          <GridItem colStart={7} colSpan={3}>
            <CardArt
              name="MOONLIGHT"
              artifactImg="/moonlight.png"
              colorRare="#4978F1"
              rare="RARO"
            >
              O Moonlight é um artefato raro, caso degenerado da atividade da
              Electro anomalia.
            </CardArt>
          </GridItem>
        </MyGrid>
      </Flex>
      <Footer />
    </>
  );
}
