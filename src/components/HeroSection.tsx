import TextMorphEffect from './TextMorphEffect';

const HeroSection = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
      <section className='w-full md:w-1/2'>
        <div className='w-full relative'>
          <TextMorphEffect
            text={[
              'My name',
              'is',
              'Nachat',
              'Ayoub',
              'I am a',
              'Full Stack',
              'Web',
              'Developer.',
              '(:',
            ]}
            cooldownTime={0.5}
            morphTime={1.2}
          />
        </div>
      </section>

      <section className='w-2/3 md:w-1/2 mb-4'>
        <img
          className='w-full md:h-[70vh] object-contain'
          src='/assets/hero.png'
        />
      </section>
    </div>
  );
};

export default HeroSection;
