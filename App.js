import logo from './logo.svg';
import './App.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Dropdowns from './dropdown';
import { Circleimgs, Fourimgs } from './circleimages'
import Cardsall from './cards';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

<meta name="viewport" content="initial-scale=1, width=device-width" />


function App() {



  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(0.5em + ${theme.spacing(1)})`,
    },
  }));





  return (
    <div >
      {/* Header Navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "#feee00", color: "black" }} position="static">
          <Toolbar className='toolBar'>
            <img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"></img>

            <img width={"3%"} src='https://cdn-icons.flaticon.com/png/512/3373/premium/3373319.png?token=exp=1652692631~hmac=466198a54974bd5b7fd5b2ec99dc0bda'></img>

            <StyledInputBase className='navSearchBox'
              sx={{ backgroundColor: "white", width: "50%" }}
              placeholder="What are you looking for?"
              inputProps={{ 'aria-label': 'search' }}
            />

            <div className='iconsNav'>Sign In <PersonOutlineIcon /></div>
            <div className='iconsNav'>Cart <ShoppingCartOutlinedIcon /></div>

          </Toolbar>
        </AppBar>
      </Box>

      {/* Dropdowns */}
      
      <Dropdowns val={"All Categories "} />
      <Dropdowns val={"ELECTRONICS"} />
      <Dropdowns val={"MEN"} />
      <Dropdowns val={"WOMEN"} />
      <Dropdowns val={"HOME"} />
      <Dropdowns val={"BEAUTY & FRAGRANCE"} />
      <Dropdowns val={"BABY & TOYS"} />
      <Dropdowns val={"GROCERY"} />
      <Dropdowns val={"SPORTS"} />
      <Dropdowns val={"BEST SELLERS"} />
      <Dropdowns val={"SELL"} />

      <div>
        <img className='mousePoint' width={"100%"} src="https://k.nooncdn.com/cms/pages/20220409/05b73fea272435d63ffd1f14e5c2fb7a/en_dk-toggle.png"></img>
      </div>

      {/* Slider */}
      <Swiper className='mousePoint'
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}

      >
        <SwiperSlide><img width={"100%"} src={"https://k.nooncdn.com/cms/pages/20220515/bc277caaf5cd219f84cfccc8ace63653/en_dk_uae-hero.png"}></img></SwiperSlide>
        <SwiperSlide><img width={"100%"} src={"https://k.nooncdn.com/cms/pages/20220512/fa19c97b89fdb59cdf96b2505dbf7908/en_dk_uae-slider-01.png"}></img></SwiperSlide>
        <SwiperSlide><img width={"100%"} src={"https://k.nooncdn.com/cms/pages/20220505/12c64234eb40d3716a7ac909a89df125/en_dk_uae-hero-01.png"}></img></SwiperSlide>
        <SwiperSlide><img width={"100%"} src={"https://k.nooncdn.com/cms/pages/20220504/d1f4c72311df40f79df6e159f096f210/en_dk_ksa_hero-bulk-01.png"}></img></SwiperSlide>
        <SwiperSlide><img width={"100%"} src={"https://k.nooncdn.com/cms/pages/20220310/bb8ec300f66b4fc78e65c2eb8a25eda5/en_hero.jpg"}></img></SwiperSlide>

      </Swiper>

{/* Circle Images */}
      <Swiper 
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={12}
        navigation
        

      >
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-grocery-01.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-17.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-19.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220513/d921c8edd98861aaa6e1ec86250af731/en_mb_uae-cat-08.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220514/c1083397f9c020e54b252397d49db7e2/en_mb_uae-cat-toy_Sale.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-22.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-01.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-23.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-27.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-03.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-02.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-05.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220506/9364cae56ee3e32b7d840bd4ea52b6bc/en_mb_uae-cat-26.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-24.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-33.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-11.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-29.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-41.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-48.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-25.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/984ff8c565eced02c7107e2b5f39a36f/en_mb_uae-cat-12.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-44.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-43.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-40.png"} /></SwiperSlide>
        <SwiperSlide><Circleimgs imgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_mb_uae-cat-09.png"} /></SwiperSlide>
      </Swiper>


      {/* Four Cards */}
      <div className='cardsGreyBg '>
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01.png"} />
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_uae-mega-01-frag.png"} />
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220505/458c0135272d0f8f072746e502793e48/en_dk_uae-mega-03.png"} />
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-mega-01.png"} />
      </div>

      {/* Product Cards */}
      <h2 className='headings'>Recommended For You</h2>
      <div className='dis-flex'>
        <Cardsall cardTitle={"T500 Bluetooth Full Touch Smartwatch"} productPrice={"37.50"} prePrice={"89"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg"} />
        <Cardsall cardTitle={"Apple iPhone 13 Pro Max 256 GB"} productPrice={"4850"} prePrice={"5119"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg"} />
        <Cardsall cardTitle={"Full Screen Series 6 Smart Watch"} productPrice={"75.00"} prePrice={"89"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1631625573/N48687006A_1.jpg"} />
        <Cardsall cardTitle={"T500 Bluetooth Full Touch Smartwatch"} productPrice={"37.50"} prePrice={"89"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg"} />
        <Cardsall cardTitle={"Apple iPhone 13 Pro Max 256 GB"} productPrice={"4850"} prePrice={"5119"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1648570075/N50910944A_1.jpg"} />
        <Cardsall cardTitle={"Full Screen Series 6 Smart Watch"} productPrice={"75.00"} prePrice={"89"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1631625573/N48687006A_1.jpg"} />
        <Cardsall cardTitle={"T500 Bluetooth Full Touch Smartwatch"} productPrice={"37.50"} prePrice={"89"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1610530302/N43241184A_1.jpg"} />
      </div>

      {/* Four Cards */}
      <div className='lightYellowBg'>
        <h2 className='headings'>Mega deals of the Day <span className='redColor'><AccessAlarmIcon /> 24 Hours Only!</span></h2>
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220515/30b8014e24462d675bfef68f69962048/en_dk_uae-mega-01.png"} />
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220513/e53ff4481c2db1adba2528fd5c2a1491/en_dk_uae-mega-02.png"} />
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220513/e53ff4481c2db1adba2528fd5c2a1491/en_dk_uae-mega-03.png"} />
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220514/30321d99e9c64cf46960fc9311ff2b99/en_mb_uae-mega-04.png"} />
      </div>

      {/* Toys Sale */}
      <img width={"100%"} src={"https://k.nooncdn.com/cms/pages/20220513/d021fb6eac92bc9095986a2ebaed91ff/en_dk_uae-title_01.png"}></img>
      <div className='toysDiv'>
        <img src={"https://k.nooncdn.com/cms/pages/20220217/bedfe99bb4990ba161fa0afe97058613/en_mb-homepagesection-1.png"}></img>
        <img src={"https://k.nooncdn.com/cms/pages/20220217/bedfe99bb4990ba161fa0afe97058613/en_mb-homepagesection-2.png"}></img>
        <img src={"https://k.nooncdn.com/cms/pages/20220217/bedfe99bb4990ba161fa0afe97058613/en_mb-homepagesection-3.png"}></img>
        <img src={"https://k.nooncdn.com/cms/pages/20220513/d021fb6eac92bc9095986a2ebaed91ff/en_mb_uae-homepagesection-1.png"}></img>
        <img src={"https://k.nooncdn.com/cms/pages/20220217/bedfe99bb4990ba161fa0afe97058613/en_mb-homepagesection-5.png"}></img>
        <img src={"https://k.nooncdn.com/cms/pages/20220513/d021fb6eac92bc9095986a2ebaed91ff/en_mb_uae-homepagesection-2.png"}></img>
        <img src={"https://k.nooncdn.com/cms/pages/20220217/f2110af7397b4aca9c8418c5436619ff/en_mb-homepagesection-6.png"}></img>


      </div>

      {/* Three Cards */}
      <div className='greyBg '>
        <img src={"https://k.nooncdn.com/cms/pages/20220512/eeab095cb62684f674a60cd9c0ce818d/en_dk_uae-sfb-01.png"}></img>
        <img src={"https://k.nooncdn.com/cms/pages/20220511/577658a174192bfff25a35af16e30456/en_dk_uae-sfb-01.png"}></img>
        <img src={"https://k.nooncdn.com/cms/pages/20220509/dd6bc73b46f1505c4ced34da87323be4/en_dk_uae-sfb-01.png"}></img>
      </div>

      {/* Four Cards */}
      <img width={"100%"} src={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk_uae-title-01C.png"}></img>
      <div className='darkYellowBg '>
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-01.png"} />
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-02.png"} />
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-03.png"} />
        <Fourimgs fourimgUrl={"https://k.nooncdn.com/cms/pages/20220514/9db653be66b503cd51330e4b388b44d8/en_mb_uae-mega-04.png"} />
      </div>

      {/* Product Cards */}
      <h2 className='headings'>More clearance deals</h2>
      <div className='dis-flex'>
        <Cardsall cardTitle={"Electric Stainless Steel Kettle"} productPrice={"25.00"} prePrice={"119"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1648195487/N31981369A_1.jpg"} />
        <Cardsall cardTitle={"Borosilicate Glass Food Container"} productPrice={"12.00"} prePrice={"29"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg"} />
        <Cardsall cardTitle={"Oriental Night EDP And Ocean Breeze"} productPrice={"45.00"} prePrice={"170"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1633868714/N25835817A_1.jpg"} />
        <Cardsall cardTitle={"Electric Stainless Steel Kettle"} productPrice={"25.00"} prePrice={"119"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1648195487/N31981369A_1.jpg"} />
        <Cardsall cardTitle={"Borosilicate Glass Food Container"} productPrice={"12.00"} prePrice={"29"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1645647290/N28834620A_1.jpg"} />
        <Cardsall cardTitle={"Oriental Night EDP And Ocean Breeze"} productPrice={"45.00"} prePrice={"170"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1633868714/N25835817A_1.jpg"} />
        <Cardsall cardTitle={"Electric Stainless Steel Kettle"} productPrice={"25.00"} prePrice={"119"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1648195487/N31981369A_1.jpg"} />
      </div>

      <div className='pdngForImg' >
        <img className='mousePoint' width={"100%"} src={"https://k.nooncdn.com/cms/pages/20220505/373fee90706065bcef842dff3cb58c6b/en_dk-uae-free-delivery-banner-strip.png"}></img>
      </div>

      {/* Product Cards */}
      <h2 className='headings'>Trending deals in electronics</h2>
      <div className='dis-flex'>
        <Cardsall cardTitle={"iPad 2021 (9th Generation) 10.2-Inch"} productPrice={"1264.00"} prePrice={"1399"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1643263567/N50867004A_1.jpg"} />
        <Cardsall cardTitle={"AirPods Pro With MagSafe Charging"} productPrice={"873.00"} prePrice={"1098"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1621935249/N47626990A_1.jpg"} />
        <Cardsall cardTitle={"Macbook Air MGN63 13 Display"} productPrice={"3571.05"} prePrice={"3959"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1645115670/N42284105A_1.jpg"} />
        <Cardsall cardTitle={"iPad 2021 (9th Generation) 10.2-Inch"} productPrice={"1264.00"} prePrice={"1399"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1643263567/N50867004A_1.jpg"} />
        <Cardsall cardTitle={"AirPods Pro With MagSafe Charging"} productPrice={"873.00"} prePrice={"1098"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1621935249/N47626990A_1.jpg"} />
        <Cardsall cardTitle={"Macbook Air MGN63 13 Display"} productPrice={"3571.05"} prePrice={"3959"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1645115670/N42284105A_1.jpg"} />
        <Cardsall cardTitle={"iPad 2021 (9th Generation) 10.2-Inch"} productPrice={"1264.00"} prePrice={"1399"} cardImagesUrl={"https://z.nooncdn.com/products/tr:n-t_240/v1643263567/N50867004A_1.jpg"} />
      </div>


    </div >
  );
}

export default App;
