import React from 'react'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import '../assets/css/owl-carousel-min.css'
import '../assets/css/boxicons.min.css'
const Footer = () => {
  return (
    <>
      <section className="shiping_details margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-3">
                    <div className="shiping_wrp">
                        <div className="shiping_icon">
                            <img src="assets/img/brands_icon.png" alt=""/>
                        </div>
                        <div className="about_details">
                            <h6>100 + BRANDS</h6>
                            <p>Well Curated 3000 + Products</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="shiping_wrp">
                        <div className="shiping_icon">
                            <img src="assets/img/free_shiping_icon.png" alt=""/>
                        </div>
                        <div className="about_details">
                            <h6>FREE SHIPPING</h6>
                            <p>For Orders Above INR 500</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="shiping_wrp">
                        <div className="shiping_icon">
                            <img src="assets/img/genuine_product_icon.png" alt=""/>
                        </div>
                        <div className="about_details">
                            <h6>GENUINE PRODUCTS</h6>
                            <p>100% Authentic Products</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="shiping_wrp">
                        <div className="shiping_icon">
                            <img src="assets/img/exclusive_offer_icon.png" alt=""/>
                        </div>
                        <div className="about_details">
                            <h6>Exclusive Offers</h6>
                            <p>Enjoy offers on your favourites</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* shiping details section end */}
{/*  */}

   {/* latest news section start */}

    <section className="latest_news margin_top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-sm-8">
                    <div className="latest_news_wrp">
                        <h4>Be the first to hear about all things Womancart</h4>
                        <p>Stay connected for exclusive offers and latest updates, delivered straight to your inbox</p>
                    </div>
                    <form action="" method="">
                        <div className="form_group">
                            <div className="search_letter">
                                <img src="assets/img/search_icon.png" alt=""/>
                            </div>
                            <div className="form_letter">
                                <input type="text" className="form-control" placeholder="Enter your email address..."/>
                                <input className="submit_btn" type="submit" value="Send"/>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

   {/* latest news section end */}


   {/* footer section start */}

    <footer className="margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-sm-3">
                    <div className="footer_logo">
                        <a href="#">
                            <img src="assets/img/logo.webp" alt=""/>
                        </a>
                    </div>
                    <div className="footer_text">
                        <p>Journey of WOMANCART began in 2018, with big dreams and objective.
                        </p>
                        <p>WOMANCART PRIVATE LIMITED is a E-Commerce website where we offer a wide range of world className
                            beauty products.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="footer_head">
                        <h4>Womancart</h4>
                        <ul>
                            <li><a href="#">Who We Are</a></li>
                            <li><a href="#">Top Brands</a></li>
                            <li><a href="#">What’s New </a></li>
                            <li><a href="#">Beauty Advice</a></li>
                            <li><a href="#">For You </a></li>
                            <li><a href="#">Offers</a></li>
                            <li><a href="#">Customer Care</a></li>
                            <li><a href="#">Help Centre</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="footer_head">
                        <h4>Categories</h4>
                        <ul>
                            <li><a href="#">Makeup</a></li>
                            <li><a href="#">Skin</a></li>
                            <li><a href="#">Hair </a></li>
                            <li><a href="#">Appliances</a></li>
                            <li><a href="#">Personal care</a></li>
                            <li><a href="#">Mom and Baby</a></li>
                            <li><a href="#">Men's Store </a></li>
                            <li><a href="#">Fragrance </a></li>
                            <li><a href="#">Jewellery</a></li>
                            <li><a href="#">Lingerie & Sleep Wear</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="footer_head address_flex">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>
                                <span>Call :</span>
                                <a href="#">+91-9311866860</a>
                            </li>
                            <li>
                                <span>Address :</span> <br/>
                                <a href="#">F-14/57 2nd floor Model Town-II,
                                    New Delhi-110009</a>
                            </li>
                            <li>
                                <span>Email :</span>
                                <a href="#"> info@womancart.in</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-9 col-sm-9">
                    <div className="copyright_head">
                        <h4>&copy; 2024 Womancart. All Rights Reserved.</h4>
                    </div>
                    <div className="policy_head">
                        <ul>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Fees & Payments</a></li>
                            <li><a href="#">Cancellation & Refund Policy </a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Shipping & Delivery Policy</a></li>
                            <li><a href="#">Rewards Policy</a></li>
                            <li><a href="#">Promotions Terms & Conditions</a></li>

                        </ul>
                    </div>

                </div>
                <div className="col-lg-3 col-sm-3">
                    <div className="social_media_icon">
                        <h5>Show us some love ❤ </h5>
                        <ul>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
