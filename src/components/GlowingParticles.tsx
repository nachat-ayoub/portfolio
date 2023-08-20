import React, { useEffect, useState } from 'react';
import { randFloat, randInt } from '../utils';

interface GlowingParticlesProps {
  colors: string[]; // Array of tailwind CSS colors
}

const GlowingParticles: React.FC<GlowingParticlesProps> = ({ colors }) => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);
  const [showParticles, setShowParticles] = useState(false);

  function generatePrticles() {
    let currentPos = 0;
    const minSpace = window.innerHeight / 2;
    const maxSpace = window.innerHeight / 1.2;
    const pageHeight = document.body.clientHeight;
    const spaceBetween = maxSpace - (maxSpace - minSpace) / 2;
    const particleCount = Math.floor(pageHeight / spaceBetween);
    const sideMargin = 2;
    const particleClasses =
      'absolute animate-pulse animate-ping blur-[150px] rounded-full z-0';

    for (let i = 0; i < particleCount; i++) {
      const topPosition =
        currentPos === 0
          ? 60
          : randInt(currentPos + minSpace, currentPos + maxSpace);
      const particleSize = randInt(100, 200); // Size range: 200px to 500px
      const sidePosition = -(particleSize / 3 + randInt(2, 3) * sideMargin);
      const randomColor = colors[i % colors.length]; // Reuse colors array if needed

      currentPos = topPosition + particleSize;

      const particleWidth = particleSize * randFloat(1, 1.3);

      const particleStyle = {
        width: `${particleWidth}px`,
        height: `${particleSize}px`,
        top: `${topPosition}px`,
        [i % 2 ? 'left' : 'right']: `${sidePosition - particleWidth / 5}px`,
        animation: `spin ${randFloat(1, 10)}s linear infinite`,
      };

      setParticles((otherParticles) => [
        ...otherParticles,
        <div
          className={particleClasses + ' ' + randomColor}
          style={particleStyle}
          key={i}
        />,
      ]);
    }
  }

  let alreadyGenerated = false;
  useEffect(() => {
    if (!alreadyGenerated) {
      alreadyGenerated = true;
      setShowParticles(true);
      setTimeout(() => {
        generatePrticles();
      }, 3000);
    }
  }, []);

  return (
    <div
      className={'opacity-0 transition ' + (showParticles ? 'opacity-100' : '')}
    >
      {particles}
    </div>
  );
};

export default GlowingParticles;
