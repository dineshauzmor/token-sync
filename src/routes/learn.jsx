import { Button, Input, Text } from "@auzmor-test/ui";
import styled from "styled-components";
import "@auzmor-test/design-tokens/brand/learn/tokens.css";
const Learn = () => {
  return (
    <Wrapper>
      <video
        src={
          "https://storage.googleapis.com/learn-integration-v2/auzmor/uploads/videos/1637316393/RackMultipart20211119-1-1sxi0gc.mp4"
        }
        controls={false}
        autoPlay
        loop
        muted
      />
      <StyledForm>
        <div style={{}}>
          <svg
            width="55px"
            height="55px"
            viewBox="0 0 28 28"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Symbols"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Header-Main" transform="translate(0.000000, -1.000000)">
                <g id="Group-7">
                  <g id="Group-2">
                    <g id="Logo" transform="translate(0.000000, 1.000000)">
                      <g id="Group">
                        <g id="Group-7" fillRule="nonzero">
                          <g id="Group-2">
                            <rect
                              id="Rectangle-4"
                              fill="#E72364"
                              x="8.87804878"
                              y="8.19512195"
                              width="10.9268293"
                              height="10.9268293"
                            ></rect>
                            <polygon
                              id="Rectangle"
                              fill="#FF3366"
                              points="0 0 28 0 28 28"
                            ></polygon>
                            <rect
                              id="Rectangle-8"
                              fillOpacity="0.133491848"
                              fill="#FFFFFF"
                              x="14.3414634"
                              y="0"
                              width="13.6585366"
                              height="13.6585366"
                            ></rect>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <Text
            style={{ marginTop: "30px" }}
            as="div"
            variant="primary"
            size="lg"
            weight="bold"
          >
            Sign In
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
            <Text as="label" variant="secondary" size="s">
              Work Email / Username
            </Text>
            <Input
              style={{ marginTop: "12px" }}
              placeholder="Enter your email address / username"
            />
          </div>

          <div style={{ width: "100%" }}>
            <Text as="label" variant="secondary" size="s">
              Password
            </Text>
            <Input
              style={{ marginTop: "12px" }}
              placeholder="Enter your password"
            />
          </div>

          <Text as="span" variant="brand" size="s" weight="normal">
            Forgot Password?
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              width: "100%",
            }}
          >
            <Button>
              <Text as="span" variant="light" size="s">
                Sign In
              </Text>
            </Button>
            <Button variant="outline">
              <Text as="span" variant="brand" size="s">
                Sign in with SSO
              </Text>
            </Button>
          </div>
        </div>
      </StyledForm>
    </Wrapper>
  );
};

export default Learn;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  height: calc(100vh - 48px);

  video {
    object-fit: cover;
    height: 100%;
  }
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
