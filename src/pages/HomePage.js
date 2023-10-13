import React from "react";
import {
  Box,
  Container,
  Text,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function HomePage() {
  return (
    <Container centerContent="true" maxW={"xl"}>
      <Box
        p={3}
        bg={"#fff"}
        d="flex"
        textAlign={"center"}
        justifyContent={"center"}
        m="20px 0 5px 0"
        borderRadius={"lg"}
        borderWidth={"2px"}
        w={"100%"}
      >
        <Text fontSize={"3xl"} fontFamily={"Work Sans"}>
          Talk-O-Love!
        </Text>
      </Box>

      <Box
        p={3}
        bg={"#fff"}
        d="flex"
        borderRadius={"lg"}
        borderWidth={"2px"}
        w={"100%"}
      >
        <Tabs variant="soft-rounded" colorScheme="blue">
          <TabList >
            <Tab w={"50%"}>Login</Tab>
            <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;
