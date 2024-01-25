import { Button, Input, Text } from "@shubh-test/ui";
import styled from "styled-components";
import "@shubh-test/design-tokens/brand/learn/tokens.css";
// const logo = require("../assets/auzmorlogo.svg")
const Learn = () => {
  return (
    <Wrapper>
      <video
        src={"https://storage.googleapis.com/learn-integration-v2/auzmor/uploads/videos/1637316393/RackMultipart20211119-1-1sxi0gc.mp4"}
        controls={false}
        autoPlay
        loop
        muted
      />
      <StyledForm>
        <div>
          {/* <image src={logo} alt="logo" /> */}
          <Text as="div" variant="primary" size="lg">Sign In</Text>
        </div>
        <Text as="label">Work Email / Username</Text>
        <Input placeholder="Enter your email address / username" />

        <Text as="label">Password</Text>
        <Input placeholder="Enter your password" />

        <Text as="span">Forgot Password?</Text>
        <Button>Sign In</Button>
        <Button variant="outline">Sign in with SSO</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default Learn;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 48px);

  video{
    object-fit: cover;
    height: 100%;
  }
`
const StyledForm = styled.form`
  height: 100%;
  background-color: red;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
