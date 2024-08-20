"use client";

import Head from "next/head";
import * as Sentry from "@sentry/nextjs";
import { useRef } from "react";
import PeekingGremlin from "./gremlin";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // const showExplsion = (event: MouseEvent) => {
  //   const canvas = canvasRef.current;
  //   if (canvas) {
  //     const x = event.clientX;
  //     const y = event.clientY;
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;

  //     const config = {
  //       particleNumber: 800,
  //       maxParticleSize: 10,
  //       maxSpeed: 40,
  //       colorVariation: 50,
  //     };

  //     const particles = [];
  //     const centerX = canvas.width / 2;
  //     const centerY = canvas.height / 2;
  //     const drawBg = (ctx: any, color: string) => {
  //       ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
  //       ctx.fillRect(0, 0, canvas.width, canvas.height);
  //     };
  //     var Particle = function (x, y) {
  //       // X Coordinate
  //       x = x || Math.round(Math.random() * canvas.width);
  //       // Y Coordinate
  //       y = y || Math.round(Math.random() * canvas.height);
  //       // Radius of the space dust
  //       r = Math.ceil(Math.random() * config.maxParticleSize);
  //       // Color of the rock, given some randomness
  //       this.c = colorVariation(
  //         colorPalette.matter[
  //           Math.floor(Math.random() * colorPalette.matter.length)
  //         ],
  //         true
  //       );
  //       // Speed of which the rock travels
  //       this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
  //       // Direction the Rock flies
  //       this.d = Math.round(Math.random() * 360);
  //     };
  //   }
  // };

  return (
    <>
      <Head>
        <title>Sentry Onboarding</title>
        <meta name="description" content="Test Sentry for your Next.js app!" />
      </Head>

      <style jsx>
        {`
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(-10%);
              animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
            }
            50% {
              transform: translateY(0);
              animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
            }
          }
        `}
      </style>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap");
        `}
      </style>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "linear-gradient(180deg, #362D59 0%, #563275 50.08%, #8D5494 100%)",
          fontFamily: '"Rubik", sans-serif',
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: "14px 0" }}>
          <svg
            style={{
              height: "1em",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 44"
          >
            <path
              fill="white"
              d="M124.32,28.28,109.56,9.22h-3.68V34.77h3.73V15.19l15.18,19.58h3.26V9.22h-3.73ZM87.15,23.54h13.23V20.22H87.14V12.53h14.93V9.21H83.34V34.77h18.92V31.45H87.14ZM71.59,20.3h0C66.44,19.06,65,18.08,65,15.7c0-2.14,1.89-3.59,4.71-3.59a12.06,12.06,0,0,1,7.07,2.55l2-2.83a14.1,14.1,0,0,0-9-3c-5.06,0-8.59,3-8.59,7.27,0,4.6,3,6.19,8.46,7.52C74.51,24.74,76,25.78,76,28.11s-2,3.77-5.09,3.77a12.34,12.34,0,0,1-8.3-3.26l-2.25,2.69a15.94,15.94,0,0,0,10.42,3.85c5.48,0,9-2.95,9-7.51C79.75,23.79,77.47,21.72,71.59,20.3ZM195.7,9.22l-7.69,12-7.64-12h-4.46L186,24.67V34.78h3.84V24.55L200,9.22Zm-64.63,3.46h8.37v22.1h3.84V12.68h8.37V9.22H131.08ZM169.41,24.8c3.86-1.07,6-3.77,6-7.63,0-4.91-3.59-8-9.38-8H154.67V34.76h3.8V25.58h6.45l6.48,9.2h4.44l-7-9.82Zm-10.95-2.5V12.6h7.17c3.74,0,5.88,1.77,5.88,4.84s-2.29,4.86-5.84,4.86Z M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
            ></path>
          </svg>
        </h1>
        <div
          style={{
            height: "auto",
            width: "100px",
          }}
        >
          <PeekingGremlin animate={false} />
        </div>
        <div
          style={{
            background:
              "linear-gradient(45deg, #6A5FC1 0%, #FF5980 48.96%, #F1B71C 100%)",
            borderRadius: "8px",
            padding: "7px",
            boxShadow:
              "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            minWidth: "30vw",
            zIndex: 2,
          }}
        >
          <div
            style={{
              borderRadius: "6px",
              background: "#fff",
              padding: "30px",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              Test your Sentry SDK Setup
            </p>
            <p>First, simulate throwing an error:</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="button"
                style={{
                  padding: "26px",
                  cursor: "pointer",
                  backgroundColor: "#e72720",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "30px",
                  animation: "bounce 1s infinite",
                }}
                onClick={async () => {
                  const res = await fetch("/api/sentry-example-api");
                  if (!res.ok) {
                    throw new Error("Sentry Example Frontend Error");
                  }
                }}
              >
                ⚡️ THROW ERROR ⚡️
              </button>
            </div>
          </div>
        </div>
        <canvas ref={canvasRef} />
      </main>
    </>
  );
}
