import TextMorphEffect from './TextMorphEffect';

const HeroSection = () => {
  return (
    <div className='flex justify-between items-center'>
      <section className='w-1/2 h-full'>
        <div className='relative'>
          <div className='absolute -top-[calc(5rem-4px)] left-1'>
            <TextMorphEffect
              text={[
                'My name',
                'is',
                'Nachat',
                'Ayoub',
                'I am',
                'a',
                'Full Stack',
                'Web Developer.',
              ]}
              cooldownTime={0.5}
              morphTime={1.2}
              randomColors={false}
              colors={[
                '#FFA000',
                '#6A1B9A',
                '#E64A19',
                '#388E3C',
                '#1976D2',
                '#0097A7',
                '#AD1457',
                '#303F9F',
                '#F57C00',
                '#689F38',
                '#9E9D24',
                '#00796B',
                '#D81B60',
                '#0288D1',
                '#E64A19',
                '#EF6C00',
                '#6A1B9A',
                '#455A64',
                '#388E3C',
                '#FBC02D',
              ]}
            />
          </div>
          <div className='absolute -top-[5rem] left-0'>
            <TextMorphEffect
              text={[
                'My name',
                'is',
                'Nachat',
                'Ayoub',
                'I am',
                'a',
                'Full Stack',
                'Web Developer.',
              ]}
              cooldownTime={0.5}
              morphTime={1.2}
              randomColors={false}
              colors={[
                '#FF5733',
                '#FFC300',
                '#4CAF50',
                '#2196F3',
                '#9C27B0',
                '#FF9800',
                '#00BCD4',
                '#8BC34A',
                '#3F51B5',
                '#E91E63',
                '#00ACC1',
                '#FF4081',
                '#CDDC39',
                '#FF5722',
                '#4CAF50',
                '#03A9F4',
                '#FFA726',
                '#8E24AA',
                '#FFEB3B',
                '#607D8B',
              ]}
            />
          </div>
        </div>
      </section>

      <section className='w-1/2'>
        <img
          className='w-full h-[70vh] object-contain animate-'
          src='/assets/hero.png'
        />
      </section>
    </div>
  );
};

export default HeroSection;
