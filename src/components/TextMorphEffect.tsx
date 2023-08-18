import React, { useEffect, useRef } from 'react';
import { randInt } from '../utils';

interface TextMorphEffectProps {
  text: string[];
  morphTime: number;
  cooldownTime: number;
  colors?: string[];
  randomColors?: boolean;
}

const TextMorphEffect: React.FC<TextMorphEffectProps> = ({
  text,
  morphTime,
  cooldownTime,
  colors = ['inherit'],
  randomColors = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const randomColorRef = useRef('');

  useEffect(() => {
    const elts = {
      text1: containerRef.current?.querySelector('#text1') as HTMLElement,
      text2: containerRef.current?.querySelector('#text2') as HTMLElement,
    };

    let textIndex = text.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    function randomColor(): string {
      if (colors.length <= 1) return 'inherit';
      let color;

      if (randomColors) {
        color = colors[randInt(0, colors.length - 1)];
        while (color === randomColorRef.current) {
          color = colors[randInt(0, colors.length - 1)];
        }
      } else {
        let ind = colors.indexOf(randomColorRef.current) + 1;
        ind = ind > colors.length - 1 ? 0 : ind;
        color = colors[ind];
      }
      return color;
    }

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;

        // Set colors when transitioning to the next phrase
        randomColorRef.current = randomColor();
      }

      setMorph(fraction);
    }

    function setMorph(fraction: number) {
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      elts.text2.style.color = randomColorRef.current;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = text[textIndex % text.length];
      elts.text2.textContent = text[(textIndex + 1) % text.length];
      elts.text1.style.color = randomColorRef.current;
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = '';
      elts.text2.style.opacity = '100%';

      elts.text1.style.filter = '';
      elts.text1.style.opacity = '0%';
    }

    function animate() {
      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime.getTime() - time.getTime()) / 1000;
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
      <div
        ref={containerRef}
        id='container'
        className='font-bold'
        style={{ filter: 'url(#threshold) blur(0.6px)' }}
      >
        <span
          className='absolute w-full inline-block font-bold select-none  text-center text-8xl'
          id='text1'
        ></span>
        <span
          className='absolute w-full inline-block font-bold select-none text-8xl text-center transition-colors duration-300'
          id='text2'
        ></span>
        {/* {
  position: absolute;
  width: 100%;
  display: inline-block;
  font-size: 80pt;
  font-weight: bold;
  text-align: center;
  user-select: none;

} */}
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

export default TextMorphEffect;
