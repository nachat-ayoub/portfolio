import Button from '../components/Button';
import Layout from '../components/Layout';

const CVPage = () => {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full gap-6 px-3 py-4 mt-16 md:gap-14 md:mt-20 md:flex-row md:px-10'>
        <Button download href='/portfolio/assets/CV-EN.pdf' color='indigo'>
          <img
            className='object-contain h-8 mr-2 shadow-sm'
            src='/portfolio/assets/en-flag.png'
            alt='USA Flag'
          />
          Version EN
        </Button>
        <Button download href='/portfolio/assets/CV-FR.pdf' color='blue'>
          <img
            className='object-contain h-8 mr-2 shadow-sm'
            src='/portfolio/assets/fr-flag.png'
            alt='FR Flag'
          />
          Version FR
        </Button>
      </div>
    </Layout>
  );
};

export default CVPage;
