import React from 'react';
import './App.css';
import blogimg1 from './assignment pic/images (2).jpg'
import blogimg2 from './assignment pic/images (14).jpg'
import blogimg3 from './assignment pic/images (16).jpg'
import bedimg from './assignment pic/images__3_-removebg-preview.png';
import secimg from './assignment pic/71jA21x+maL._AC_UF1000_1000_QL80_-removebg-preview.png'
import thimg from './assignment pic/51PwEAgUpZL._AC_-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight, faCartShopping, faStar,  faPhone, faLocationDot, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';


function App() {
  let data3 = [
    {
      link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2DJ9HDdq3WZfJQRGt7urgVbwbeOmZdQmM7wStLjIgHXDf7szv",
      dis: "Plant Shelf",
      price: "$87",
      id:"Shelf"
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT2tSumibzGhuPQ8rokZQJmRLFJNQqowVPIIIpiSYcsiNypqbu",
      dis: "Sofa",
      price: "$98",
      id:"Sofa"
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8IUPLbp8i9AikI0FTHxoOQlrxjRwXUfwju74PEzUGp4V5isG3",
      dis: "Wodden Chair ",
      price: "$45"
    },
    {
      link: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0X3xq0SrIo_VHVe9dx02Z2vEGz4xjk8tOqG4CFDnj07rPpwhl",
      dis: "Wodden Bed ",
      price: "$987",
      id:'Bed'
    },
    {
      link: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRogaj7hWROXl5auRdg9Lpj4B4RmGy_TupYYG80srirxjRJNlUQ",
      dis: "Light Lamp",
      price: "$76",
      id:"Lamp"
    },
    {
      link: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSr2vHAlrnJc6RhhiiHA4mZOv-96lze684LBRTYFDbfz6QOa1EO",
      dis: "Classy Chair",
      price: "$87"
    },
    {
      link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhO258rSXPhWaa_8O_CI4jnlVdKQjeXDCDCusxRqEms-sUthmr",
      dis: "Stylish Bed",
      price: "$676"
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Slg20st_yZW3QjWUXZGCgZCDFh34WP6XqSVEWdUHzvmu1jKC",
      dis: "Comfertable Sofa",
      price: "$54",
      id:"Decor"
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_aeJ97nN94iFFIRxIerI7i49WbM1P-gNE8P2E4_TWGSfG_a9t",
      dis: "Stylis Divan",
      price: "$87"
    },
  ];

  let data2 = [
    {
      title: "Comfertable Sofa",
      lnk: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjFGD_hIg3Fl0X3J7F7_vi3Et6BSZ02CAtJKi0HSWACEtp9Id",
      dis: "A sofa can be the finishing touch to make your home feel much more comfortable, but finding the right one isn’t as easy as simply picking whichever one looks the best",
      price: "$120"
    },
    {
      title: "Side Table",
      lnk: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCutP0mOnibe65E59PJf_NJaXcc5C2V4WTmvSo6sYHigXQoVij",
      dis: "Desk Lamp 5W Eye-Caring Table Lamp Traditional Flexible Bedside Reading Light with E27 Bulb,3 Lighting Modes, Simple Stylish for Home Bedroom Office Décor Student Study Desktop Lighting favorite gift",
      price: "$89"
    },
    {
      title: "Classy Padded Chair",
      lnk: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTe2Ixylyw104CZGR81ygZflqYF-ZZLr_obR6zvGvErG7_5uKN-",
      dis: "DecorShore Mosaic Vase, Floor Vase, Tall Vase, 20 Inch Decorative Mosaic Flower Vase, Vedic Accent Vase with Floral Pattern Glass Mosaic Inlay- Cobalt Blue",
      price: "$40"
    },
  ]
  let data1 = [
    {
      lnk: "https://ae01.alicdn.com/kf/S36070aef1cc54de1ab36ae37b5a9627fL.jpg_640x640Q90.jpg_.webp",
      dis: "Sofa"
    },
    {
      lnk: "https://multiwood.com.pk/cdn/shop/files/multiwoodbeds9_1024x1024@2x.jpg?v=1685473636",
      dis: "Bed"
    },
    {
      lnk: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxalNcHyKJSp1ZkSxEFx0AU9mAVQL0mMu9eBXlg0HnIg&s",
      dis: "Dressor"
    },
    {
      lnk: "https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGUlMjBsYW1wfGVufDB8fDB8fHww",
      dis: "Lamp"
    },
    {
      lnk: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiyg6zrH44Q5JnF2WmY5GVrZsgRWX_CrhdlAqbut2K5A&s",
      dis: "Shelf"
    },
    {
      lnk: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJoKs29GacJG1npGL9xCrYSF_qs6xk-OQRXkhEqpZKnDNcB5PmqEb-6IeBVLSlDqxlMg&usqp=CAU",
      dis: "Decor"
    }
  ]
  return (
    <div className="App">
      <div className='hom-bg'>
        {/* ---------------------------- Navbar start------------------------------------------- */}
        <div className="container-fluid nvbr pt-4">
          <div className="container ">
            <div className="row text-white d-flex justify-content-around justify-content-sm-between mb-lg-3">
              <div className="col-md-2 col-4 ">
                <h3 className='logo' id='home'>furniLux</h3>
              </div>
              <div className="col-md-7 lics my-auto d-none d-lg-block ">
                <ul className='d-flex justify-content-around my-auto '>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#product">Catagories</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#blog">Blogs</a></li>
                  <li><a href="">Contact Us</a></li>

                </ul>
              </div>
              <div className="col-md-3 login  my-auto d-none d-lg-block">
                <button className='border-0 rounded-3 '>
                  <a href="">Login</a>
                </button>
                <button className='border-0 rounded-3 ms-3 '>
                  <a href="">Sign Up</a>
                </button>

              </div>
              {/* ---------------------------- drop down menue-------------- */}
              <div className="col-4 col-sm-2 menu d-lg-none  position-relative ">
                <FontAwesomeIcon icon={faBars} className='fs-2 ' />


                <ul className='position-absolute  ps-1 pt-1 p-2'>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#product">Catagories</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#blog">Blogs</a></li>
                  <li><a href="#about">Contact Us</a></li>
                  <li><a href="">Login</a></li>
                  <li><a href="">Sign Up</a></li>
                </ul>

              </div>

            </div>
          </div>
        </div>
        {/* -------------------------------------- navbar end-------------------------------- */}

        {/* -------------------------------------- Home page start ------------------------- */}

        <div className="container  position-relative">
          <div className="row">
            <div className="col-sm-6 text-white text-center mt-5 ">
              <h1 className='mb-4'>FurniLus - Your Brand for Stylish Living</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt optio in, rem odio quasi non quae eum fuga architecto quibusdam.</p>
              <button className='shopbtn p-2 px-3 mt-3 border rounded-5'>Shop Now <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>


        </div>
        <div className='d-none d-lg-block smbtn' >
          <div className='mt-5 d-flex minibtn'>
            {data1.map((v) => (
              <a href={`#${v.dis}`} className='d-flex  border-0 rounded-2 py-2 px-2  shadow  ms-4 ' >
                <img src={v.lnk} alt="" width={40} height={20} />
                <h6 className='ps-2'>{v.dis}</h6>
              </a>

            ))}
          </div>
        </div>
      </div>

      {/* -------------------------------------- Home page end ---------------------------- */}
      {/* -------------------------------------- second secion start------------ */}
      <div className="container mt-5  ">
        <div className="row d-flex justify-content-evenly mb-5">
          <div className='text-center '>
            <h1 className='mt-5'>Elevate Your Living Room</h1>
          </div>
          {data2.map((d) => (

            <div className="col-md-3  crd border-0 rounded-3 shadow mt-5 mb-5 py-3">
              <div className=' border-0 '>
                <div className='imgdiv'>
                  <img src={d.lnk} alt="" />
                </div>
                <div className=' p-2 mt-2'>
                  <h5> {d.title} </h5>
                </div>
                <div className='p-2'>

                  <p>{`${d.dis.slice(0, 60)} .........`}</p>
                  <div className='d-flex justify-content-between'>
                    <h4> {d.price} </h4>
                    <a href="">
                      <FontAwesomeIcon icon={faCartShopping} /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>



      {/* --------------------------------------- second secion end--------------- */}
      {/* --------------------------------------- slider start --- ---------------- */}
      <div className="slider-bg mb-5 ">
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner mt-md-5 ">
                  <div className="carousel-item active">
                    <div className="container">
                      <div className="row d-flex justify-content-center mt-5 text-white">
                        <div className="col-md-6">
                          <h1>Luxurious Bed</h1>
                          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptates?</p>
                          <h3>$453</h3>
                          <button className='border-0 rounded-5 shopbtn p-2 px-4 mt-4'>Buy Now </button>
                        </div>
                        <div className="col-md-3">
                          <img src={bedimg} alt="" />
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="carousel-item">

                    <div className="container">
                      <div className="row d-flex justify-content-center mt-5 text-white">
                        <div className="col-md-6">
                          <h1>Luxurious Bed</h1>
                          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptates?</p>
                          <h3>$453</h3>
                          <button className='border-0 rounded-5 shopbtn p-2 px-4 mt-4'>Buy Now </button>
                        </div>
                        <div className="col-md-3 ">
                          <img src={secimg} alt="" height={250} className='mt-0' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row d-flex justify-content-center mt-5 text-white">
                        <div className="col-md-6">
                          <h1>Luxurious Bed</h1>
                          <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptates?</p>
                          <h3>$453</h3>
                          <button className='border-0 rounded-5 shopbtn p-2 px-4 mt-4'>Buy Now </button>
                        </div>
                        <div className="col-md-3">
                          <img src={thimg} alt="" height={250} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------- slider end --- ---------------- */}


      {/* --------------------------------------- All product strat --- ---------------- */}

      <div className="container">
        <h1 className='mt-5 mb-5 text-center'>All Products</h1>
        <div className="row d-flex justify-content-around" id='product'>
          {
            data3.map((g) => (

              <div className="col-lg-3 col-md-5 ms-lg-1 border p-2 border-3 rounded-3 mb-5 shadow" id={g.id}>
                <div className='crd'>
                  <img src={g.link} alt="" className='' width={'100%'} height={350} />
                  <div className='d-flex justify-content-between mt-2 pt-3'>
                    <h6>{g.dis}</h6>
                    <a href="">
                      <FontAwesomeIcon icon={faCartShopping} className='fs-4 mt-2' /></a>

                  </div>
                  <h4>{g.price}</h4>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* --------------------------------------- All product End --- ---------------- */}




      {/* --------------------------------------- second slider start --- ---------------- */}
      <div className='bgimg2 mb-5 '>
        <div className="container ">
          <div className="row d-flex flex-row-reverse ">
            <div className="col-md-7 mt-5 ">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="4000">
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div className="container ">
                      <div className="row">

                        <div className=' col-md-10 ms-md-5 p-5 text-white fs-5'>
                          <p><b className='text-center'><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas qui enim incidunt a quae atque omnis id voluptatum reiciendis?</q></b></p>
                          <p>Mr. Jose</p>
                          <div className='bg-white d-flex justify-content-between px-3 mt-4'>
                            <div>
                              <p className='text-black'>Stylish Bed</p>
                              <p className='text-black'>$676</p>
                              <div className='text-warning'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>
                            <img src={bedimg} alt="" width={90} height={90} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div className="container ">
                      <div className="row">

                        <div className=' col-md-10 ms-md-5 p-5 text-white fs-5'>
                          <p><b className='text-center'><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas qui enim incidunt a quae atque omnis id voluptatum reiciendis?</q></b></p>
                          <p>Ms.Eolly</p>
                          <div className='bg-white d-flex justify-content-between px-3 mt-4'>
                            <div>
                              <p className='text-black'>Lusxury Sofa</p>
                              <p className='text-black'>$956</p>
                              <div className='text-warning'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>
                            <img src={secimg} alt="" width={90} height={90} />
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                    {/* <img src="..." class="d-block w-100" alt="..."> */}
                    <div className="container ">
                      <div className="row">

                        <div className=' col-md-10 ms-md-5 p-5 text-white fs-5'>
                          <p><b className='text-center'><q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quas qui enim incidunt a quae atque omnis id voluptatum reiciendis?</q></b></p>
                          <p>Makjeker</p>
                          <div className='bg-white d-flex justify-content-between px-3 mt-4'>
                            <div>
                              <p className='text-black'>Stylish Lamp</p>
                              <p className='text-black'>$676</p>
                              <div className='text-warning'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                              </div>
                            </div>
                            <img src={thimg} alt="" width={90} height={90} />
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* --------------------------------------- second slider end --- ---------------- */}



      {/* -------------------------------------------- Blog session start -------------------------- */}
      <div className="container mb-5">
        <div className="col-lg-6 mx-auto text-center">
          <h1 className='mt-5 mb-4'>Blogs And Insight</h1>
          <p className='mb-5'><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe perferendis molestiae. Numquam delectus ab accusamus laboriosam voluptas, veniam maxime.</b></p>
        </div>
        <div className="row" id='blog'>
          <div className="col-lg-4 col-md-6 mt-3  position-relative blogmndiv">
            <img src={blogimg1} alt="" width={'100%'} height={400} />
            <div className='blog-txt'>
              <h6>The art of Cozy: Elevate you room with fall decor</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam eos consequatur cupiditate maxime</p>
              <a href="">read more</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 position-relative mt-3 blogmndiv">
            <img src={blogimg2} alt="" width={'100%'} height={400} />
            <div className='blog-txt'>
              <h6>The art of Cozy: Elevate you room with fall decor</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam eos consequatur cupiditate maxime</p>
              <a href="">read more</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-md-auto mt-md-4 mt-lg-3 mt-3 position-relative blogmndiv">
            <img src={blogimg3} alt="" width={'100%'} height={400} />
            <div className='blog-txt'>
              <h6>The art of Cozy: Elevate you room with fall decor</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quam eos consequatur cupiditate maxime</p>
              <a href="">read more</a>
            </div>
          </div>

        </div>
      </div>
      {/* -------------------------------------------- Blog session End -------------------------- */}


      {/* ---------------------------------------Footer start ----------------------------- */}

      <div className="bgdiv mb-2">
        <div className="container" id='about'>
          <div className="row">
            <div className="col-lg-4 col-md-6 text-white  mt-5">
              <h2>furniLux</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eligendi!</p>
              <div className='mt-4 fotdiv'>
                <FontAwesomeIcon icon={faPhone} className='me-3' />
                +92381765733
              </div>
              <div className='fotdiv'>
                <FontAwesomeIcon icon={faEnvelope} className='me-3' />
                furnilux@gmail.com
              </div>
              <div className='fotdiv'>
                <FontAwesomeIcon icon={faLocationDot} className='me-3' />
                123 site #65 street region, united state
              </div>
            </div>
            <div className="col-lg-2 col-6 text-white mt-5">
              <h4>About Us</h4>
              <div className='arrow'>
                <FontAwesomeIcon icon={faArrowUp} className='arow  me-3 ' />
                <a href="">
                  About Us
                </a>
              </div>
              <div className='arrow'>
                <FontAwesomeIcon icon={faArrowUp} className='arow  me-3 ' />
                <a href="">
                  Contact Us
                </a>
              </div>
              <div className='arrow'>
                <FontAwesomeIcon icon={faArrowUp} className='arow  me-3 ' />
                <a href="">
                  Blogs
                </a>
              </div>
              <div className='arrow'>
                <FontAwesomeIcon icon={faArrowUp} className='arow  me-3 ' />
                <a href="">
                  Popular Questions
                </a>
              </div>


            </div>

            <div className="col-lg-2  col-6 text-white mt-5">
              <h4>What's Popular</h4>
              <div className='arrow'>
                <FontAwesomeIcon icon={faArrowUp} className='arow  me-3 ' />
                <a href="">
                  Decorative Lap
                </a>
              </div>
              <div className='arrow'>
                <FontAwesomeIcon icon={faArrowUp} className='arow  me-3 ' />
                <a href="">
                  Luxury Bed
                </a>
              </div>
              <div className='arrow'>
                <FontAwesomeIcon icon={faArrowUp} className='arow  me-3 ' />
                <a href="">
                  Soft Sofa
                </a>
              </div>
              <div className='arrow'>
                <FontAwesomeIcon icon={faArrowUp} className='arow  me-3 ' />
                <a href="">
                  Wodden Shelf
                </a>
              </div>


            </div>
            <div className="col-lg-4 col-md-6  text-white mt-5 text-center text-lg-start">
              <h4>Get 50% off your first Order</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita soluta suscipit.</p>
              <div className='border subinpt px-md-2 border-2 rounded-5 mt-5 mb-5'>
                {/* <FontAwesomeIcon icon={faEnvelope} className=' ' /> */}
                <input type="text" placeholder='Email Adress..' className='  py-2' />
                <button className='py-1 px-2  border-0 rounded-5'>Subscribe</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* ---------------------------------------Footer End ----------------------------- */}








    </div>
  );
}

export default App;
