/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Ensure the video stays behind other content */
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Make sure the video covers the entire background */
`;

export function Video({ src }: { src: string }) {
  return (
    <VideoContainer>
      <StyledVideo autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
    </VideoContainer>
  );
}
