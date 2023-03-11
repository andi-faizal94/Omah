import { useState } from 'react';
import house from '../src/assets/images/housenew.png';

function App() {
  const [nav, setNav] = useState(false);
  return (
    <div className='App'>
      <header>
        <nav className='flex max-w-7xl m-4 lg:my-[48px] lg:mx-[135px] justify-between items-center'>
          <div>
            <h1 className='text-2xl font-poppins'>
              Omah{' '}
              <span className='inline-block rounded-full w-2 h-2 bg-[#F58634]'></span>
            </h1>
          </div>
          <button
            className={`flex justify-between items-center lg:hidden appearance-none z-50 
            ${nav ? 'text-white' : 'text-inherit'}`}
            onClick={() => setNav(!nav)}
          >
            <span className='material-symbols-outlined'>
              {!nav ? 'menu' : 'close'}
            </span>
          </button>
          <div
            className={`
            lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20
            ${
              nav
                ? 'flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-black'
                : 'hidden opacity-0 h-0 invisible'
            }
          `}
          >
            <ul className='flex flex-col lg:flex-row  items-center gap-x-14 font-poppins text-white gap-y-4 lg:gap-y-0 lg:text-[#828282]'>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>To Rent</a>
              </li>
              <li>
                <a href=''>For Sale</a>
              </li>
              <li>
                <a href=''>Blog</a>
              </li>
              <button className='px-6 py-2 bg-[#F58634] text-white'>
                Login
              </button>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className='lg:max-w-7xl'>
          <div className='flex flex-wrap justify-center items-center text-center lg:text-left lg:justify-between lg:items-center lg:max-w-7xl lg:mx-[135px] lg:mb-14 lg:mt-16'>
            <div className='w-full lg:w-7/12'>
              <h5 className='text-2xl lg:text-5xl lg:mb-4 font-poppins'>
                Ready to
              </h5>
              <h5 className='text-2xl lg:text-5xl font-poppins'>
                find your new home
              </h5>
            </div>
            <div className='w-full mt-10 lg:mt-0 lg:w-5/12'>
              <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
                <div className='hidden lg:block w-5 h-1 bg-[#F58634] lg:mr-4'></div>
                <div className='w-full -mt-2 lg:w-[375px] leading-loose tracking-wider'>
                  <p className='font-poppins text-base'>
                    looking for a house with a low price <br /> and quality
                    here, and sell your house quickly here
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:relative w-full mt-10 mx-2 lg:mx-0'>
            <div className='w-full lg:w-auto first-letter:lg:absolute lg:left-0 lg:mr-[100px] '>
              <img src={house} alt='house' />
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}

export default App;
