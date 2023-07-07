export default function WindowSize() {
  return (
    <div className=''>
      <span className='text-lg sm:hidden'>xs</span>
      <span className='text-lg hidden sm:inline-block md:hidden'>sm</span>
      <span className='text-lg hidden md:inline-block lg:hidden'>md</span>
      <span className='text-lg hidden lg:inline-block xl:hidden'>lg</span>
      <span className='text-lg hidden xl:inline-block 2xl:hidden'>xl</span>
      <span className='text-lg hidden 2xl:inline-block'>2xl</span>
    </div>
  );
}
