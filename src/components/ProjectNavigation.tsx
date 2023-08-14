import {
  FaAngleLeft,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { IconContext } from 'react-icons';
import { MdEmail } from 'react-icons/md';
import Button from './Button';

export default function ProjectNavigation() {
  const info = {
    facebook: 'https://www.facebook.com/NACHAT.AY0UB/',
    github: 'https://github.com/nachat-ayoub',
    twitter: 'https://twitter.com/nachatayoub1',
    linkedin: 'https://www.linkedin.com/in/ayoub-nachat-a92012201/',
    email: 'nachat.ayoub.freelancer@gmail.com',
  };

  return (
    <section className='p-4 md:p-6 flex flex-col md:flex-row justify-between gap-4'>
      {/* //* Back Button */}
      <div className='w-fit'>
        <Button color='secondary' href='/'>
          <IconContext.Provider value={{ size: '25' }}>
            <FaAngleLeft />
          </IconContext.Provider>
        </Button>
      </div>

      {/* //* Social links */}
      <div className='w-full md:w-fit flex justify-between md:justify-start gap-2'>
        <Button color='slate' target='_blank' href={info.github}>
          <IconContext.Provider value={{ size: '25' }}>
            <TbBrandGithubFilled />
          </IconContext.Provider>
        </Button>

        <Button color='indigo' target='_blank' href={info.facebook}>
          <IconContext.Provider value={{ size: '25' }}>
            <FaFacebookF />
          </IconContext.Provider>
        </Button>

        <Button color='blue' target='_blank' href={info.linkedin}>
          <IconContext.Provider value={{ size: '25' }}>
            <FaLinkedinIn />
          </IconContext.Provider>
        </Button>

        <Button color='sky' target='_blank' href={info.twitter}>
          <IconContext.Provider value={{ size: '25' }}>
            <FaTwitter />
          </IconContext.Provider>
        </Button>

        <Button color='red' target='_blank' href={'mailto:' + info.email}>
          <IconContext.Provider value={{ size: '25' }}>
            <MdEmail />
          </IconContext.Provider>
        </Button>
      </div>

      {/*  */}
    </section>
  );
}
