import React from 'react';
import { randInt } from '../utils';

interface GlowingParticlesProps {
  colors: string[]; // Array of tailwind CSS colors
}

const GlowingParticles: React.FC<GlowingParticlesProps> = ({ colors }) => {
  const windowHeight = window.innerHeight;
  const particleCount = Math.floor(windowHeight / 120); // Adjust the division as needed
  console.log({ particleCount, windowHeight });
  const particles = [];
  const minSpace = 100;
  const maxSpace = 200;
  let currentPos = 0;

  for (let i = 0; i < particleCount; i++) {
    const topPosition =
      currentPos === 0
        ? 60
        : randInt(currentPos + minSpace, currentPos + maxSpace);
    const particleSize = randInt(100, 200); // Size range: 200px to 500px
    const leftPosition =
      i % 2 === 0
        ? -(particleSize / 4 + randInt(2, 3) * 8)
        : window.innerWidth - particleSize / 4 + randInt(2, 3) * 8;
    const randomColor = colors[i % colors.length]; // Reuse colors array if needed

    currentPos += topPosition + particleSize;

    const particleStyle = {
      top: `${topPosition}px`,
      left: `${leftPosition}px`,
      width: `${particleSize}px`,
      height: `${particleSize}px`,
    };

    particles.push(
      <div
        key={i}
        className={'absolute blur-[150px] rounded-full z-0 ' + randomColor}
        style={particleStyle}
      />
    );
  }

  return <>{particles}</>;
};

export default GlowingParticles;
