import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  VStack,
  Button,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// eS3YIZrG4LXXSWm3
// mongodb+srv://dhivyaravi98:<password>@dp-cluster.haskn47.mongodb.net/?retryWrites=true&w=majority

function Login() {
  const [show, setShow] = useState("");
  const [mailId, setMailId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const history = useHistory()

  const handleShow = () => {
    setShow(!show);
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!mailId || !password) {
      toast({
        title: "Please fill all the required fields",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setLoading(false);
      return
    };
    const config = {
      headers: {
        "content-Type": "application/json"
      }
    }
    try {
      const { data } = await axios.post(`http://localhost:5000/api/user/login`, { mailId, password }, config);
      toast({
        title: "Login successful",
        status: "success",
        isClosable: true,
        duration: 3000
      });
      setLoading(false);
      history.push('/chats')
    } catch (error) {
      toast({
        title: error.message,
        status: "error",
        isClosable: true,
        duration: 3000
      });
      setLoading(false);
    }


  };

  return (
    <VStack spacing={"8px"}>
      <FormControl isRequired id="mailid">
        <FormLabel>Email</FormLabel>
        <Input
          value={mailId}
          placeholder="Enter your mail"
          required
          onChange={(e) => setMailId(e.target.value)}
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
      <Button colorScheme="blue" w={"100%"} mt={"10px"} onClick={submitHandler} isLoading={loading} >
        Login
      </Button>
      <Button
        colorScheme="red"
        w={"100%"}
        mt={"10px"}
        onClick={() => {
          setMailId("guest@example.com");
          setPassword("guest@123");
        }}
      >
        Get Guset User Credentials
      </Button>
    </VStack>
  );
}

export default Login;
