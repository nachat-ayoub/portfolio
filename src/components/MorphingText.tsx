import React, { useEffect, useRef } from 'react';

interface TextMorphEffectProps {
  text: string[];
  morphTime?: number;
  cooldownTime?: number;
}

const MorphingText: React.FC<TextMorphEffectProps> = ({
  text,
  morphTime = 1,
  cooldownTime = 0.25,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const elts = {
      text1: containerRef.current?.querySelector('#text1') as HTMLElement,
      text2: containerRef.current?.querySelector('#text2') as HTMLElement,
    };

    let textIndex = text.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = text[textIndex % text.length];
    elts.text2.textContent = text[(textIndex + 1) % text.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction: number) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = text[textIndex % text.length];
      elts.text2.textContent = text[(textIndex + 1) % text.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = '';
      elts.text2.style.opacity = '100%';

      elts.text1.style.filter = '';
      elts.text1.style.opacity = '0%';
    }

    function animate() {
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [text, morphTime, cooldownTime]);

  return (
    <>
      <div ref={containerRef} id='container' className='font-bold'>
        <span id='text1'></span>
        <span id='text2'></span>
      </div>

      <svg id='filters'>
        <defs>
          <filter id='threshold'>
            <feColorMatrix
              in='SourceGraphic'
              type='matrix'
              values='1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140'
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default MorphingText;
