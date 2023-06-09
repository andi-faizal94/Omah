import { useState, useEffect } from 'react';
import House from '../src/assets/images/housebernard.png';
import WhiteHouse from '../src/assets/images/WhiteHouse.png';
import GreenHouse from '../src/assets/images/GreenHouse.png';
import OrangeHouse from '../src/assets/images/OrangeHouse.png';
import Lina from '../src/assets/images/Lina.png';
import Nabila from '../src/assets/images/Nabila.png';
import DreamHouse from '../src/assets/images/dreamhouse.png';
import Liana from '../src/assets/images/houseliana.png';
import Yoan from '../src/assets/images/houseyoan.png';
import Fb from '../src/assets/images/Fb.png';
import Instagram from '../src/assets/images/Instagram.png';
import Twitter from '../src/assets/images/Twitter.png';

function App() {
  const [nav, setNav] = useState(false);
  const [form, setForm] = useState({
    select: 'Jakarta',
    price: '$1000 - $2000',
    rooms: '3 rooms',
    footage: '2 footage',
  });

  useEffect(() => {
    function responsiveNavbar() {
      const viewWidth = window.innerWidth;
      const sm = 640;

      if (viewWidth < sm || viewWidth > sm) {
        setNav(false);
      }
    }

    responsiveNavbar();

    window.addEventListener('resize', responsiveNavbar);

    return () => {
      window.removeEventListener('resize', responsiveNavbar);
    };
  }, []);
  return (
    <div className='App'>
      <header>
        <nav className='flex max-w-7xl m-4 lg:my-[48px] lg:mx-[135px] justify-between items-center'>
          <div>
            <a href='/#home' className='text-2xl font-poppins'>
              Omah{' '}
              <span className='inline-block rounded-full w-2 h-2 bg-yellow'></span>
            </a>
          </div>
          <button
            className={`flex justify-between items-center lg:hidden appearance-none z-50 
            ${nav ? 'text-white' : 'text-inherit'}`}
            onClick={() => setNav(!nav)}
          >
            <span className='material-symbols-outlined transition duration-500 ease-out'>
              {!nav ? 'menu' : 'close'}
            </span>
          </button>
          <div
            className={`
            lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20
            ${
              nav
                ? 'flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-black scroll-smooth  duration-75'
                : 'hidden opacity-0 h-0 invisible scroll-smooth duration-75'
            }
          `}
          >
            <ul className='flex flex-col lg:flex-row  items-center gap-x-14 font-poppins text-white gap-y-4 lg:gap-y-0 lg:text-[#828282]'>
              <li>
                <a href='/#home' onClick={() => setNav(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href='/#torent' onClick={() => setNav(false)}>
                  To Rent
                </a>
              </li>
              <li>
                <a href='/#forsale' onClick={() => setNav(false)}>
                  For Sale{' '}
                </a>
              </li>
              <li>
                <a href='/#blog' onClick={() => setNav(false)}>
                  Blog
                </a>
              </li>
              <button className='px-6 py-2 bg-yellow text-white'>Login</button>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className='lg:max-w-7x' id='home'>
          <div className='flex flex-wrap gap-y-8 lg:gap-y-0 justify-center items-center text-center lg:text-left lg:justify-between lg:items-center lg:max-w-7xl lg:mx-[135px] lg:mb-14 lg:mt-20'>
            <div className='w-full lg:w-7/12'>
              <h1 className='text-2xl lg:text-5xl lg:mb-4 font-poppins'>
                Ready to
              </h1>
              <h1 className='text-2xl lg:text-5xl font-poppins'>
                find your new home
              </h1>
            </div>
            <div className='w-full mt-10 lg:mt-0 lg:w-5/12'>
              <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start'>
                <div className='hidden lg:block w-5 h-1 bg-yellow lg:mr-4'></div>
                <div className='w-full -mt-2 lg:w-[375px] leading-loose tracking-wider'>
                  <p className='font-poppins text-base text-gray'>
                    looking for a house with a low price <br /> and quality
                    here, and sell your house quickly here
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='lg:relative lg:w-auto mt-12 mx-auto h-[500px] px-2 lg:px-0 lg:mx-0'>
            <div className='lg:absolute w-full max-w-full lg:w-auto lg:max-w-[1308px] xl:max-w-[1308px] lg:left-0 lg:mr-[135px] '>
              <img src={House} alt='house' />
            </div>
            <div className='lg:absolute lg:bottom-0 w-full max-w-full lg:max-w-[1308px] xl:max-w-[1308px]  lg:right-[135px]  lg:w-[894px] bg-white h-[112px] py-4 px-1 lg:py-[16px] lg:px-[40px] shadow-2xl'>
              <div className='flex flex-wrap items-center'>
                <div className='w-full lg:w-10/12 flex items-center'>
                  <div className='w-3/12 self-center'>
                    <label className='text-xs lg:text-base' htmlFor='select'>
                      Select City
                    </label>
                    <input
                      value={form.select}
                      onChange={(e) =>
                        setForm({ ...form, select: e.target.value })
                      }
                      id='select'
                      className='w-5/6'
                      type='text'
                    />
                  </div>
                  <div className='w-3/12 self-center'>
                    <label
                      className='flex items-center text-xs lg:text-base'
                      htmlFor='price'
                    >
                      Price{' '}
                      <span className='material-symbols-outlined'>
                        expand_more
                      </span>
                    </label>
                    <input
                      value={form.price}
                      onChange={(e) =>
                        setForm({ ...form, price: e.target.value })
                      }
                      id='price'
                      className='w-5/6'
                      type='text'
                    />
                  </div>
                  <div className='w-3/12 self-center'>
                    <label
                      className='flex items-center text-xs lg:text-base'
                      htmlFor='rooms'
                    >
                      Rooms
                      <span className='material-symbols-outlined'>
                        expand_more
                      </span>
                    </label>
                    <input
                      value={form.rooms}
                      onChange={(e) =>
                        setForm({ ...form, rooms: e.target.value })
                      }
                      id='rooms'
                      className='w-5/6'
                      type='text'
                    />
                  </div>
                  <div className='w-3/12 self-center'>
                    <label className='text-xs lg:text-base' htmlFor='footage'>
                      Footage
                    </label>
                    <input
                      value={form.footage}
                      onChange={(e) =>
                        setForm({ ...form, footage: e.target.value })
                      }
                      id='footage'
                      className='w-5/6'
                      type='text'
                    />
                  </div>
                </div>
                <div className='w-full lg:w-2/12 text-center lg:text-left self-center lg:self-start'>
                  <button className='text-xs lg:text-base px-2 py-2 lg:px-10 lg:py-6 bg-yellow text-white'>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='lg:max-w-7xl lg:mt-[100px] lg:mx-[135px] mb-10  lg:mb-[128px]'
          id='torent'
        >
          <div className='flex justify-between items-center mx-5 lg:mx-0 mb-12'>
            <div className='flex items-center gap-x-2 lg:gap-x-8'>
              <h2 className='text-black text-2xl lg:text-4xl'>The Latest</h2>
              <h4 className='text-yellow text-lg lg:text-2xl'>For Sale</h4>
              <h4 className='text-gray text-2xl lg:text-2xl'>To Rent</h4>
            </div>
            <div>
              <a href='/#veiwall' className='text underline text-black'>
                View All
              </a>
            </div>
          </div>
          <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap mx-5 gap-y-12 mb-10 md:gap-x-2 lg:mb-0 lg:gap-y-0 lg:mx-0 lg:gap-x-5 lg:mt-10'>
            <div className='w-full lg:w-4/12'>
              <div>
                <img
                  src={OrangeHouse}
                  alt='orange house'
                  className='object-cover'
                />
                <h3 className='text-3xl  text-black'>Orange House</h3>
                <p className='text-base text-gray'>
                  Jl Klapanunggal, cileungsi, bogor
                </p>
                <p className='text-yellow text-2xl'> $1,435,000</p>
              </div>
            </div>
            <div className='w-full lg:w-4/12'>
              <div>
                <img
                  src={WhiteHouse}
                  alt='white house'
                  className='object-cover'
                />
                <h3 className='text-3xl  text-black'>White House</h3>
                <p className='text-base text-gray'>
                  Jl Klapanunggal, cileungsi, bogor
                </p>
                <p className='text-yellow text-2xl'>$1,200,500</p>
              </div>
            </div>
            <div className='w-full lg:w-4/12'>
              <div>
                <img
                  src={GreenHouse}
                  alt='green house'
                  className='object-cover'
                />
                <h3 className='text-3xl text-black'>Green House</h3>
                <p className='text-base text-gray'>
                  Jl Klapanunggal, cileungsi, bogor
                </p>
                <p className='text-yellow text-2xl'>$2,300,500</p>
              </div>
            </div>
          </div>
        </section>
        <section
          className='lg:max-w-7xl mb-10 lg:mx-[135px] lg:mb-[128px]'
          id='forsale'
        >
          <div className='flex justify-between items-center mx-5 lg:mx-0 mb-12'>
            <div className='w-6/12'>
              <h2 className='text-lg lg:text-4xl'>
                Some people are very satisfied buying a house here
              </h2>
            </div>
            <div className='w-6/12 text-right'>
              <a href='/#viewall' className='underline'>
                View All
              </a>
            </div>
          </div>

          <div className='flex mx-5 lg:mx-0 gap-x-4 overflow-x-auto'>
            <div>
              <div className='w-[570px] h-[400px] snap-center mb-5'>
                <img src={Nabila} alt='' />
              </div>
              <p className='text-2xl'>
                I am very satisfied buying a house ere because it is fast and
                easy
              </p>
            </div>
            <div>
              <div className='w-[570px] h-[400px] snap-center mb-5'>
                <img src={Lina} alt='' />
              </div>
              <p className='text-2xl'>
                Buying a house here is very cheap and high quality
              </p>
            </div>
            <div>
              <div className='w-[570px] h-[400px] snap-center mb-5'>
                <img src={Lina} alt='' />
              </div>
              <p className='text-2xl'>
                Buying a house here is very cheap and high quality
              </p>
            </div>
          </div>
        </section>

        <section
          className='lg:max-w-7xl lg:mx-[135px] lg:mb-[128px] mb-36'
          id='blog'
        >
          <div className='flex justify-between items-center mx-5 lg:mx-0 mb-12'>
            <div className='w-6/12'>
              <h2 className='text-lg lg:text-4xl'>
                Always check our latest blog
              </h2>
            </div>
            <div className='w-6/12 text-right'>
              <a href='/#viewall' className='underline'>
                View All
              </a>
            </div>
          </div>
          <div className='flex flex-wrap gap-y-10 lg:gap-y-0 mx-5 lg:mx-0'>
            <div className='w-full md:w-6/12 lg:w-6/12'>
              <div className='mb-2'>
                <img src={DreamHouse} alt='' />
              </div>
              <h3 className='text-2xl text-black mb-2'>
                Tips and tricks in choosing a house
              </h3>
              <p className='text-base text-gray'>
                tips and tricks to buy a house easily here is to buy at a low
                price
              </p>
            </div>
            <div className='w-full md:w-6/12 lg:w-6/12 lg:px-5'>
              <div className='flex mb-6'>
                <div className='w-6/12 p-2'>
                  <h4 className='text-2xl mb-4'>
                    Creating a clean and elegant home
                  </h4>
                  <p className='text-ashen'>Albert firdaus</p>
                </div>
                <div className='w-6/12'>
                  <img src={Liana} alt='' />
                </div>
              </div>
              <div className='flex'>
                <div className='w-6/12 p-2'>
                  <h4 className='text-2xl mb-4'>Good paint color for home</h4>
                  <p className='text-ashen'> Rusy firdaus</p>
                </div>
                <div className='w-6/12'>
                  <img src={Yoan} alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='lg:relative'>
            <div className='lg:absolute bg-yellow h-[448px] lg:w-[1150px] lg:right-0'>
              <div className='flex flex-col justify-center items-center h-full '>
                <h6 className='text-2xl lg:text-5xl text-white text-center mb-4'>
                  {' '}
                  Subscribe to get a discount
                </h6>
                <h6 className='text-2xl lg:text-5xl text-white text-center mb-4'>
                  of 30%
                </h6>

                <div className='bg-white w-auto lg:w-[700px] lg:h-[104px] mx-4 md:mx-0 lg:mx-0'>
                  <div className='flex justify-center items-center w-full h-full p-4 '>
                    <input
                      type='text'
                      className='w-full h-10 outline outline-zinc-50 px-1'
                      placeholder='Enter your email address'
                    />
                    <button className='bg-yellow text-white px-6 py-3'>
                      Subcribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className='lg:max-w-7xl lg:mx-[135px] mt-[100px] lg:mt-[700px] mb-56 lg:mb-10'>
          <div className='flex items-center flex-wrap'>
            <div className='w-full lg:w-6/12 mb-5 lg:mb-0'>
              <div className='flex justify-center lg:justify-start'>
                <p className='text-2xl'> Omah by @dzakimuzh</p>
              </div>
            </div>
            <div className='w-full lg:w-6/12'>
              <div className='flex justify-center lg:gap-x-3 lg:justify-end'>
                <div>
                  <img src={Instagram} alt='' />
                </div>
                <div>
                  <img src={Fb} alt='' />
                </div>
                <div>
                  <img src={Twitter} alt='' />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
