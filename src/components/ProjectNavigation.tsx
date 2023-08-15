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
import { contactInfo } from '../data';

export default function ProjectNavigation() {
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
        <Button color='slate' target='_blank' href={contactInfo.github}>
          <IconContext.Provider value={{ size: '25' }}>
            <TbBrandGithubFilled />
          </IconContext.Provider>
        </Button>

        <Button color='indigo' target='_blank' href={contactInfo.facebook}>
          <IconContext.Provider value={{ size: '25' }}>
            <FaFacebookF />
          </IconContext.Provider>
        </Button>

        <Button color='blue' target='_blank' href={contactInfo.linkedin}>
          <IconContext.Provider value={{ size: '25' }}>
            <FaLinkedinIn />
          </IconContext.Provider>
        </Button>

        <Button color='sky' target='_blank' href={contactInfo.twitter}>
          <IconContext.Provider value={{ size: '25' }}>
            <FaTwitter />
          </IconContext.Provider>
        </Button>

        <Button
          color='red'
          target='_blank'
          href={'mailto:' + contactInfo.email}
        >
          <IconContext.Provider value={{ size: '25' }}>
            <MdEmail />
          </IconContext.Provider>
        </Button>
      </div>

      {/*  */}
    </section>
  );
}
