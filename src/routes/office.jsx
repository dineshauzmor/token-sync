import { Button, Input, Text } from "@auzmor-test/ui";
import "@auzmor-test/design-tokens/brand/office/tokens.css";
import styled from "styled-components";

const Office = () => {
  return (
    <Wrapper>
      <StyledBanner />
      <StyledForm>
        <img
          src="OfficeLogo.svg"
          style={{
            height: "50px",
            position: "absolute",
            top: "5%",
            right: "5%",
          }}
        />
        <div style={{ width: "100%" }}>
          <Text
            style={{ marginTop: "30px" }}
            as="div"
            size="4xl"
            weight="extrabold"
          >
            Signin
          </Text>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div style={{ width: "100%" }}>
            <Text as="label" weight="bold" size="s">
              Work Email / Username
            </Text>
            <Input
              style={{ marginTop: "4px" }}
              placeholder="Enter your email address / username"
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ width: "100%" }}>
              <Text as="label" weight="bold" size="s">
                Password
              </Text>
              <Input
                style={{ marginTop: "4px" }}
                placeholder="Enter password"
              />
            </div>
            <div style={{ alignSelf: "end" }}>
              <Text as="span" weight="bold" size="xs">
                Forgot Password?
              </Text>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "100%",
            }}
          >
            <Button>
              <Text as="span" variant="light" weight="bold" size="base">
                Sign In
              </Text>
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}
            >
              <StyledLine />
              <StyledCircle>
                <Text as="span" size="s">
                  or
                </Text>
              </StyledCircle>
              <StyledLine />
            </div>
            <StyledButton variant="outline">
              <Text as="span" size="s" weight="bold">
                Sign in with SSO
              </Text>
            </StyledButton>
          </div>
        </div>
      </StyledForm>
    </Wrapper>
  );
};

export default Office;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 48px);

  video {
    object-fit: cover;
    height: 100%;
  }
  font-family: Manrope;
`;
const StyledForm = styled.form`
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  justify-self: center;
`;

const StyledLine = styled.div`
  height: var(--borderWidth1);
  background-color: var(--colorsBaseNeutral200);
  flex: 1;
`;

const StyledCircle = styled.div`
  height: 34px;
  width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: var(--borderWidth1) solid var(--colorsBaseNeutral200);
`;

const StyledBanner = styled.div`
  background-image: url("OfficeBanner.png");
  background-repeat: no-repeat;
  background-position: bottom;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

const StyledButton = styled(Button)`
  border-color: var(--colorsBaseNeutral200);
`;
