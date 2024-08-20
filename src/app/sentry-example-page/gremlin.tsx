import { PropsWithChildren } from "react";

const PeekingGremlin = ({
  tilt,
  animate,
}: {
  tilt?: string;
  animate: boolean;
}) => {
  return (
    <GremlinWrapper>
      <Hands data-animated={animate ? "true" : "false"}>
        <svg
          viewBox="0 0 119 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="right">
            <path
              d="M97.77 6.31001C97.77 6.31001 100.88 2.45002 103.52 2.13002C107.27 1.67002 115.03 1.43 116.42 2.83C117.47 3.88 118.86 8.76002 117.99 10.85C117.12 12.94 114.5 15.38 114.5 15.38L103.63 15.67C103.63 15.67 104.16 13.15 104.26 11.05C104.36 8.95 103.34 6.67003 103.34 6.67003L97.76 6.32002L97.77 6.31001Z"
              fill="#F1B71C"
              stroke="#452650"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M112.02 15.26C112.02 15.26 113.78 12.4 114.11 10.75C114.44 9.1 113.56 5.79999 113.56 5.79999"
              stroke="#452650"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M107.4 15.26C107.4 15.26 109.05 12.18 109.27 10.75C109.49 9.32 108.83 6.23999 108.83 6.23999"
              stroke="#452650"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g id="left">
            <path
              d="M22.67 7.78998C22.67 7.78998 22.33 6.06997 21.29 5.20997C20.25 4.34997 18.02 3.82996 18.02 3.82996C18.02 3.82996 17.3301 1.76997 15.7801 1.24997C14.2301 0.729975 2.20004 2.96996 1.51004 3.48996C0.820037 4.00996 0.650034 4.86998 0.820034 6.40998C0.990034 7.94998 5.29001 16.38 5.29001 16.38L17.95 15.6L18.87 7.60996L22.6501 7.77997L22.67 7.78998Z"
              fill="#F1B71C"
              stroke="#452650"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.18 15.89C14.18 15.89 13.41 9.50996 13.41 6.42996"
              stroke="#452650"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.66999 15.89C9.66999 15.89 8.06001 12.9 7.69001 10.94C7.25001 8.62997 7.36 7.08997 7.36 7.08997"
              stroke="#452650"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </Hands>
      <Gremlin data-animated={animate ? "true" : "false"}>
        <svg
          viewBox="0 0 116 107"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.97 74.56C71.13 75.21 72.6 103.35 72.6 103.35L62.35 103.68L65.28 73.42L70.97 74.56Z"
            fill="#F1B71C"
            stroke="#452650"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M46.73 66.59C46.89 67.47 48.36 105.52 48.36 105.52L38.11 105.96L41.04 65.13L46.73 66.59Z"
            fill="#F1B71C"
            stroke="#452650"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M75.78 36.14C76.64 36.57 110.77 80.04 113.14 83.17C116.3 87.36 114.93 91.06 111.71 93.75C108.49 96.44 103.72 95.22 100.32 88.69C98.3 84.82 71.82 37.11 71.82 37.11L75.79 36.13L75.78 36.14Z"
            fill="#F1B71C"
          />
          <path
            d="M75.78 36.14C76.64 36.57 110.77 80.04 113.14 83.17C116.3 87.36 114.93 91.06 111.71 93.75C108.49 96.44 103.72 95.22 100.32 88.69C98.3 84.82 71.82 37.11 71.82 37.11"
            stroke="#452650"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.18 66.43L86.63 79.81C89.38 80.35 92.04 78.8 91.2 74.66C90.57 71.56 71.94 4.40999 71.94 4.40999C71.03 0.0399899 67.2 -0.700011 64.67 2.93999C64.67 2.93999 17.5 56.5 15.25 59.31C12.62 62.6 15.43 65.88 18.18 66.42V66.43Z"
            fill="#F1B71C"
            stroke="#452650"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M58.2 61.43L59.84 56.33L54.46 55.05L53.74 60.76L58.2 61.43Z"
            fill="#452650"
          />
          <path
            d="M60.51 49.78L55.89 49.11L58.79 23.76L67.12 25.23L60.51 49.78Z"
            fill="#452650"
          />
          <path
            d="M38.35 42.87C38.38 43.83 16.22 94.46 14.57 98.02C12.37 102.78 8.46003 103.32 4.58003 101.77C0.700035 100.22 -0.499958 95.43 3.65004 89.34C6.10004 85.73 35.62 39.84 35.62 39.84L38.35 42.87Z"
            fill="#F1B71C"
          />
          <path
            d="M38.35 42.87C38.38 43.83 16.22 94.46 14.57 98.02C12.37 102.78 8.46003 103.32 4.58003 101.77C0.700035 100.22 -0.499958 95.43 3.65004 89.34C6.10004 85.73 35.62 39.84 35.62 39.84"
            stroke="#452650"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Gremlin>
    </GremlinWrapper>
  );
};

export default PeekingGremlin;

const GremlinWrapper = ({ children }: PropsWithChildren) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      minHeight: "5.3125rem",
    }}
  >
    {children}
  </div>
);

const Gremlin = ({ children }: PropsWithChildren) => (
  <div
    style={{
      position: "absolute",
      top: "10%",
      left: 0,
      right: 0,
      zIndex: 0,
      opacity: 1,
    }}
  >
    {children}
  </div>
);

const Hands = ({ children }: PropsWithChildren) => (
  <div
    style={{
      position: "absolute",
      top: "90%",
      left: "0%",
      right: "-5%",
      zIndex: 3,
    }}
  >
    {children}
  </div>
);
