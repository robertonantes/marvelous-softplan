import styled from "styled-components";

const LoadingSkeleton = styled.div`
  height: ${({ height }) => height || "50px"};
  width: ${({ width }) => width || "100px"};
  border-radius: ${({ radius }) => radius || "4px"};
  margin: ${({ margin }) => margin || "0"};
  opacity: 0.6;
  background: linear-gradient(
    270deg,
    #232323,
    #232323,
    #232323,
    #4a4a4a,
    #232323,
    #232323,
    #232323
  );
  background-size: 400% 400%;

  -webkit-animation: anim 1s ease-out-in-out infinite;
  -moz-animation: anim 1s ease-out infinite;
  animation: anim 1s ease-out infinite;

  @keyframes anim {
    0% {
      background-position: 100% 0%;
    }
  }
`;

export default LoadingSkeleton;
