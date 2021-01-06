import React from "react";
import CanvasContainer from "./../components/canvas-container";
import loadable from "@loadable/component";
import { KeyStoke } from "./../components/key-stoke";
import {
  Flex,
  Text,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Grid,
  Image,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { Flex as ThreeFlex, Box as ThreeBox } from "@react-three/flex";
import Plane from "./../components/plane";
import Nerko from "../assets/fonts/Nerko One_Regular.json";
import OpenSans from "../assets/fonts/Open Sans_Regular.json";
import Jost from "../assets/fonts/Jost_ 500 Medium_Regular.json";
import Amatic from "../assets/fonts/Amatic SC_Bold.json";
import DistortBlob from "./../components/distort-blob";
import HappyKanye from "../assets/stickers/kanye-happy.jpg";
import StevieKanye from "../assets/stickers/stevie-kanye.jpg";
import { CirclePicker } from "react-color";
import { Html } from "@react-three/drei";
import Sticker from "./../components/sticker";
import RobotModel from "../components/models/robot-model";
import gsap from "gsap";
import PhoenixModel from "./../components/models/phoenix-model";
const KeyboardEventHandler = loadable(() =>
  import("react-keyboard-event-handler")
);
// const Sticker = loadable(() => import('./../components/sticker'));

export default () => {
  const [strokes, setStrokes] = React.useState([]);
  const [selectedFont, setSelectedFont] = React.useState(Nerko);
  const [blobs, setBlobs] = React.useState([]);
  const [kanyes, setKanyes] = React.useState([]);
  const [blobDistort, setBlobDistort] = React.useState(0.5);
  const [blobSpeed, setBlobSpeed] = React.useState(8);
  const [blobColor, setBlobColor] = React.useState("#00A38D");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addRobot, setAddRobot] = React.useState(false);
  const [addPhoenix, setAddPhoenix] = React.useState(false);
  const btnRef = React.useRef();
  const strokeRef = React.useRef();

  React.useEffect(() => {
    if (typeof window !== undefined) {
      gsap.to(strokeRef.current, {
        duration: 2.5,
        ease: "back.out(1.7)",
        y: -500,
      });
    }
  }, []);

  React.useEffect(() => {
    console.log({ kanyes });
  }, [kanyes]);

  const handleKeyPress = (key) => {
    if (key === "space") {
      strokes.push(" ", " ");
      setStrokes([...strokes]);
    } else if (key === "backspace") {
      const back = strokes.indexOf("backspace");
      strokes.splice(back, 2);
      setStrokes([...strokes]);
    } else if (key === "enter") {
      strokes.push(" ");
      setStrokes([...strokes]);
    } else if (key === "esc") {
      const esc = strokes.indexOf("esc");
      strokes.splice(esc, 1);
      setStrokes([...strokes]);
    } else {
      setStrokes([...strokes, key.toUpperCase()]);
    }
  };

  const getFontSelection = (font) => {
    switch (font) {
      case "Nerko":
        setSelectedFont(Nerko);
        break;
      case "Amatic":
        setSelectedFont(Amatic);
        break;
      case "Open Sans":
        setSelectedFont(OpenSans);
        break;
      case "Jost":
        setSelectedFont(Jost);
        break;
      default:
        setSelectedFont(Nerko);
        break;
    }
  };

  const getDistortValue = (value) => {
    setBlobDistort(value);
  };
  const getSpeedValue = (value) => {
    setBlobSpeed(value);
  };
  const getColorValue = (color) => {
    setBlobColor(color.hex);
  };
  const addBlobToPage = () => {
    setBlobs([...blobs, +1]);
  };
  const clearCanvas = () => {
    setBlobs([]);
    setStrokes([]);
    setKanyes([]);
    setAddPhoenix(false);
    setAddRobot(false);
  };
  const getKanye = (value) => {
    switch (value) {
      case "Happy":
        setKanyes([...kanyes, HappyKanye]);
        break;
      case "Stevie":
        setKanyes([...kanyes, StevieKanye]);
        break;
    }
  };
  const addRobotToPage = (value) => {
    setAddRobot({ addRobot: value });
  };
  const addPhoenixToPage = (value) => {
    setAddPhoenix({ addPhoenix: value });
  };

  return (
    <Flex
      direction="column"
      align="center"
      h="100%"
      minH="100vh"
      w="100%"
      bgColor="brand.bg"
    >
      <Flex
        direction="column"
        w="100%"
        maxW="1440px"
        align="center"
        justify="space-between"
      >
     
          <Text as="h1" mt={6} fontSize="5xl" fontFamily="heading">
            Craaaaaazy Canvas
          </Text>

            <Text
              as="p"
              mb={6}
              fontSize="md"
              fontFamily="heading"
              
              // w="100%"
            >
              Start typing or create weird and wonderful things via the
              settings. Anything on the canvas can be dragged about.
            </Text>
            <Flex w="100%" align="center" justify="space-evenly">
            <Button
              // alignSelf={["center", "flex-end"]}
              mb={6}
              variant="outline"
              onClick={clearCanvas}
            >
              Clear Canvas
            </Button>
            <Button
              // alignSelf={["center", "flex-end"]}
              mb={6}
              ref={btnRef}
              variant="outline"
              onClick={onOpen}
              rightIcon={<SettingsIcon />}
            >
              Settings
            </Button>
            </Flex>
     
    
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader alignSelf="center">Settings</DrawerHeader>
            <DrawerBody>
              <Flex w="100%" justify="space-evenly" my={6}>
                <Menu isLazy>
                  <MenuButton
                    variant="outline"
                    as={Button}
                    rightIcon={<SettingsIcon />}
                  >
                    Fonts
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => getFontSelection("Nerko")}>
                      Nerko
                    </MenuItem>
                    <MenuItem onClick={() => getFontSelection("Open Sans")}>
                      Open Sans
                    </MenuItem>
                    <MenuItem onClick={() => getFontSelection("Jost")}>
                      Jost
                    </MenuItem>
                    <MenuItem onClick={() => getFontSelection("Amatic")}>
                      Amatic
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Menu isLazy>
                  <MenuButton
                    variant="outline"
                    as={Button}
                    rightIcon={<SettingsIcon />}
                  >
                    Models
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => addRobotToPage(true)}>
                      Mech Drone
                    </MenuItem>
                    <MenuItem onClick={() => addPhoenixToPage(true)}>
                      Phoenix
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>

              <Grid
                templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
                autoRows="auto"
                gap={5}
                alignItems="center"
                justifyContent={["space-evenly"]}
                p={1}
                w="100%"
              >
                <Flex
                  direction="column"
                  border="solid 1px"
                  p={3}
                  borderRadius={5}
                  boxShadow="xl"
                  rounded="md"
                >
                  <Text fontSize="xl" textAlign="center" fontWeight={700} m={0}>
                    Configure a blob
                  </Text>
                  <Stack>
                    <Text>Select Distort</Text>
                    <NumberInput
                      onChange={(value) => getDistortValue(value)}
                      defaultValue={0.5}
                      min={0}
                      max={10}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Text>Select Speed</Text>
                    <NumberInput
                      onChange={(value) => getSpeedValue(value)}
                      defaultValue={8}
                      min={0}
                      max={50}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <Text>Choose Color</Text>
                    <Box align="center" my={3}>
                      <CirclePicker
                        onChangeComplete={(color) => getColorValue(color)}
                      />
                    </Box>

                    <Button variant="outline" onClick={() => addBlobToPage()}>
                      Create
                    </Button>
                  </Stack>
                </Flex>

                {/* <Flex
                  direction="column"
                  border="solid 1px"
                  p={3}
                  borderRadius={5}
                  boxShadow="xl"
                  rounded="md"
                >
                  <Text fontSize="xl" textAlign="center" fontWeight={700}>Pick a Kanye</Text>
                  <Grid 
                  templateColumns="1fr 1fr"
                  templateRows="1fr 50px"
                  placeItems="center"
                  >
                    <Flex direction="column" gridColumn={1} p={1}>
                    <Text m={0}>Happy Kanye</Text>
                    <Image _hover={{cursor: 'pointer', transform: 'scale(1.1)'}} onClick={() => getKanye('Happy')} boxSize="80px" fit="contain" src={HappyKanye}/>
                    </Flex>
                    <Flex direction="column" gridColumn={2} p={1}>
                    <Text m={0}>Stevie Kanye</Text>
                    <Image _hover={{cursor: 'pointer', transform: 'scale(1.1)'}} onClick={() => getKanye('Stevie')} boxSize="80px" fit="contain" src={StevieKanye}/>
                    </Flex>

                    <Button gridRow={2} gridColumn="1 / -1" w="100%" variant="outline" onClick={() => addKanyeToPage()}>
                      Add Kanye
                    </Button>
                  </Grid>
                </Flex> */}
              </Grid>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Box boxShadow="md" rounded="md" bg="white" m={3}>
        <CanvasContainer
          width="1440px"
          height="100vh"
          margin="0 auto"
          position={[0, 0, 15]}
          fov={75}
        >
          <spotLight intensity={0.5} position={[10, 20, 30]} />
          <rectAreaLight
            intensity={3}
            position={[0, 1, 10]}
            width={20}
            height={50}
          />
          <color attach="background" args={["#fbfbf2"]} />
          <Plane />
          {blobs.length
            ? blobs.map((index) => (
                <DistortBlob
                  key={index}
                  distort={blobDistort}
                  speed={blobSpeed}
                  color={blobColor}
                />
              ))
            : null}
          {kanyes.length
            ? kanyes.map((item, index) => {
                console.log({ item });
                return <Sticker key={index} imagePath={item} />;
              })
            : null}
          {addRobot ? <RobotModel /> : null}
          {addPhoenix ? <PhoenixModel /> : null}
          <ThreeFlex
            position={[-15, 8, 0]}
            margin={0.09}
            flexWrap="wrap"
            flexDirection="row"
            width={30}
            height="100%"
            size={[1440, 1440, 1440]}
          >
            {strokes.map((key, index) => {
              return (
                <ThreeBox
                  key={index}
                  marginLeft={0.5}
                  marginTop={1}
                  cursor="pointer"
                >
                  <KeyStoke selectedFont={selectedFont} keyStroke={key} />
                </ThreeBox>
              );
            })}
          </ThreeFlex>
          <KeyboardEventHandler
            handleFocusableElements={true}
            handleKeys={["all"]}
            onKeyEvent={(key, e) => handleKeyPress(key)}
          />
        </CanvasContainer>
      </Box>
    </Flex>
  );
};
