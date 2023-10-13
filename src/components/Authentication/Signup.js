import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Signup() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleShow = () => {
    setShow(!show);
  };

  const postDetails = (pic) => {
    if (pic === undefined) {
      toast({
        title: "Please upload image",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (pic.type === "image/jpeg" || pic.type === "image/png") {
      setLoading(true);
      let data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "dpriya");

      fetch("https://api.cloudinary.com/v1_1/dpriya/image/upload", {
        mode: "no-cors",
        method: "post",
        body: data,
      })
        .then((res) => {
          return res;
        })
        .then((data) => {
          setLoading(false);
          setPic(data.url.toString());
          console.log(data.url.toString());
        })
        .catch((err) => {
          setLoading(false);
          console.log(err, "erorr....");
          toast({
            title: `${err}`,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "Please upload image with extension .jpeg or .png format",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
  };

  const submitHandler = () => {};

  return (
    <VStack spacing={"8px"}>
      <FormControl isRequired id="first-name">
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired id="mailid">
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          required
          onChange={(e) => setMail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
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
      <FormControl isRequired id="confirm-password">
        <FormLabel>Confirm password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement w={"4.5rem"}>
            <Button onClick={handleShow}>{show ? "Hide" : "Show"}</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="profile-pic">
        <FormLabel>Upload profile pic</FormLabel>
        <Input
          type="file"
          accept="image/**"
          p={1.5}
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        isLoading={loading}
        colorScheme="blue"
        w={"100%"}
        mt={"10px"}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
}

export default Signup;
