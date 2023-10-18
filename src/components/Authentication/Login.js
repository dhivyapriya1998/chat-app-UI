import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  VStack,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
// eS3YIZrG4LXXSWm3
// mongodb+srv://dhivyaravi98:<password>@dp-cluster.haskn47.mongodb.net/?retryWrites=true&w=majority

function Login() {
  const [show, setShow] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleShow = () => {
    setShow(!show);
  };

  const submitHandler = () => {};

  return (
    <VStack spacing={"8px"}>
      <FormControl isRequired id="mailid">
        <FormLabel>Emaill</FormLabel>
        <Input
          value={mail}
          placeholder="Enter your mail"
          required
          onChange={(e) => setMail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={password}
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme="blue" w={"100%"} mt={"10px"} onClick={submitHandler}>
        Login
      </Button>
      <Button
        colorScheme="red"
        w={"100%"}
        mt={"10px"}
        onClick={() => {
          setMail("guest@example.com");
          setPassword("123098");
        }}
      >
        Get Guset User Credentials
      </Button>
    </VStack>
  );
}

export default Login;
