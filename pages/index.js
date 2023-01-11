import { GridItem, Box, Flex } from "@chakra-ui/react";
import CardArt from "../components/CardArt";
import MyGrid from "../components/Grid";
import Navbar from "../components/Navbar";
import Categ from "../components/Categories";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Flex
        flexBasis=""
        opacity="40%"
        bgColor={{}}
        w="100%"
        h="1000px"
        bgGradient="radial(#D6CB6B, #151515)"
  />*/}

      <MyGrid minH="100vh">
        <GridItem colStart={1} colSpan={3}>
          <Categ />
        </GridItem>

        <GridItem colStart={4} colSpan={3}>
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
        </GridItem>
      </MyGrid>
    </>
  );
}
