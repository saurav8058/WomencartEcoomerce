import React from 'react'
//import { NavLink } from 'react-router-dom'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import '../assets/css/owl-carousel-min.css'
import '../assets/css/boxicons.min.css'
import { NavLink } from 'react-router-dom'
// import '../js/popper.js'

//  import '../assets/css/bootstrap-min.css'

const Home = () => {
  return (
    <>
        <section className="banner">
        <img src="assets/img/banner1.jpg"  width="100%" alt=""/>
    </section>
{/*  */}
   {/* section 3 start  */}

    <section className="three_categories margin_top">
        <div className="container">
            <div className="sec_three_scroll owl-carousel owl-theme">

                <div className="three_categories_wrp">
                    <a href="#">
                        <img src="assets/img/sec-second-img1.jpg" alt=""/>
                    </a>
                </div>


                <div className="three_categories_wrp">
                    <a href="#">
                        <img src="assets/img/sec-second-img2.jpg" alt=""/>
                    </a>
                </div>

                <div className="three_categories_wrp">
                    <a href="#">
                        <img src="assets/img/sec-second-img3.jpg" alt=""/>
                    </a>
                </div>

            </div>
        </div>
    </section>

   {/* section 3 end  */}

   {/* top categories section start  */}

    <section className="top_categories margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading">
                        <h2>Top Categories</h2>
                        <p>Discover Our Pinnacle Picks!</p>
                    </div>
                </div>
            </div>
            <div className="categories_slider owl-carousel owl-theme">
                <div className="categories_wrp">
                    <a href="#">
                        <div className="categorie_img">
                            <img src="assets/img/fregrance.png" alt=""/>
                        </div>
                        <div className="category_text">
                            <p>Makeup</p>
                        </div>
                    </a>
                </div>
                <div className="categories_wrp">
                    <a href="#">
                        <div className="categorie_img">
                            <img src="assets/img/fregrance.png" alt=""/>
                        </div>
                        <div className="category_text">
                            <p>Makeup</p>
                        </div>
                    </a>
                </div>
                <div className="categories_wrp">
                    <a href="#">
                        <div className="categorie_img">
                            <img src="assets/img/fregrance.png" alt=""/>
                        </div>
                        <div className="category_text">
                            <p>Makeup</p>
                        </div>
                    </a>
                </div>
                <div className="categories_wrp">
                    <a href="#">
                        <div className="categorie_img">
                            <img src="assets/img/fregrance.png" alt=""/>
                        </div>
                        <div className="category_text">
                            <p>Makeup</p>
                        </div>
                    </a>
                </div>
                <div className="categories_wrp">
                    <a href="#">
                        <div className="categorie_img">
                            <img src="assets/img/fregrance.png" alt=""/>
                        </div>
                        <div className="category_text">
                            <p>Makeup</p>
                        </div>
                    </a>
                </div>
                <div className="categories_wrp">
                    <a href="#">
                        <div className="categorie_img">
                            <img src="assets/img/fregrance.png" alt=""/>
                        </div>
                        <div className="category_text">
                            <p>Makeup</p>
                        </div>
                    </a>
                </div>
                <div className="categories_wrp">
                    <a href="#">
                        <div className="categorie_img">
                            <img src="assets/img/fregrance.png" alt=""/>
                        </div>
                        <div className="category_text">
                            <p>Makeup</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

   {/* top categories section end  */}


   {/* offer section start  */}

    <section className="offer margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>Offers! Just for you</h2>
                        <p>Tailored Deals Crafted with You in Mind.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="offer_img">
                    <NavLink to="/product-details"><img src="assets/img/offer_img1.jpg" alt=""/></NavLink>    
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="offer_img">
                        <img src="assets/img/offer_img2.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="offer_img">
                        <img src="assets/img/offer_img3.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="offer_img">
                        <img src="assets/img/offer_img4.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* offer section end  */}

   {/* exclusive section start  */}

    <section className="exclusive_discount margin_top">
        <div className="container">
            <div className="row ">
                <div className="col-lg-12">
                    <div className="heading">
                        <h2>Shop with Exclusive Discounts</h2>
                        <p>Your Flawless Self with Our Beauty Picks.</p>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="exclusive_wrp">
                        <div className="exclusive_text">
                            <h4>Lingerie</h4>
                        </div>
                        <div className="excluive_big_text">
                            <h2>UPTO 70% OFF</h2>
                        </div>
                        <div className="shop_now">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="exclusive_wrp">
                        <div className="exclusive_text">
                            <h4>Beauty & Makeup</h4>
                        </div>
                        <div className="excluive_big_text">
                            <h2>UPTO 60% OFF</h2>
                        </div>
                        <div className="shop_now">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="exclusive_wrp">
                        <div className="exclusive_text">
                            <h4>Grooming</h4>
                        </div>
                        <div className="excluive_big_text">
                            <h2>UPTO 50% OFF</h2>
                        </div>
                        <div className="shop_now">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="exclusive_wrp">
                        <div className="exclusive_text">
                            <h4>Women’s Ethnic Wear</h4>
                        </div>
                        <div className="excluive_big_text">
                            <h2>30%-80% OFF</h2>
                        </div>
                        <div className="shop_now">
                            <a href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

   {/* exclusive section end  */}

   {/* trending section css start  */}

    <section className="waiting_cart trending margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading text-center">
                        <h2 className="text_pink">#TrendingNow🔥</h2>
                        <p>Stay Fashionably Ahead with What's Hot!</p>
                    </div>
                </div>
            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="haircare-tab" data-bs-toggle="tab" data-bs-target="#haircare"
                        type="button" role="tab" aria-controls="haircare" aria-selected="true">Haircare</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="skincare-tab" data-bs-toggle="tab" data-bs-target="#skincare"
                        type="button" role="tab" aria-controls="skincare" aria-selected="false">Skincare</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#fragrance"
                        type="button" role="tab" aria-controls="fragrance" aria-selected="false">Fragrance</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="men-store-tab" data-bs-toggle="tab" data-bs-target="#men-store"
                        type="button" role="tab" aria-controls="men-store" aria-selected="false">Men’s Store</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="appliances-tab" data-bs-toggle="tab" data-bs-target="#appliances"
                        type="button" role="tab" aria-controls="appliances" aria-selected="false">Appliances</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="personal-care-tab" data-bs-toggle="tab" data-bs-target="#personal-care"
                        type="button" role="tab" aria-controls="personal-care" aria-selected="false">Personal
                        care</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="haircare" role="tabpanel" aria-labelledby="haircare-tab">
                    <div className="waiting_cart_slider owl-carousel owl-theme">
                        <div className="waiting_cart_main">
                            <div className="waiting_cart_wrp">
                                <div className="bestseller">
                                    <img src="assets/img/bestseller_start.png" alt=""/>
                                    <span>bestseller</span>
                                </div>
                                <div className="waiting_cart_img">
                                    <img src="assets/img/trending_img1.jpg" alt=""/>
                                </div>
                                <div className="waiting_cart_text">
                                    <p>Fogg Regular Essence Fragrance
                                        Body Spray </p>
                                    <span>120 ml</span>
                                </div>
                                <div className="price">
                                    <div className="actual_price">
                                        <p>₹206</p>
                                    </div>
                                    <div className="dummy_price">
                                        <p>₹275</p>
                                    </div>
                                    <div className="discount">
                                        <p>25%off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add_cart_btns">
                                <div className="wish_list_icon">
                                    <a href="#">
                                        <img src="assets/img/wishlist_icon.png" alt=""/>
                                    </a>
                                </div>
                                <div className="add_btn">
                                    <a href="#">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="skincare" role="tabpanel" aria-labelledby="skincare-tab">
                    <div className="waiting_cart_slider owl-carousel owl-theme">
                        <div className="waiting_cart_main">
                            <div className="waiting_cart_wrp">
                                <div className="bestseller">
                                    <img src="assets/img/bestseller_start.png" alt=""/>
                                    <span>bestseller</span>
                                </div>
                                <div className="waiting_cart_img">
                                    <img src="assets/img/trending_img1.jpg" alt=""/>
                                </div>
                                <div className="waiting_cart_text">
                                    <p>Fogg Regular Essence Fragrance
                                        Body Spray </p>
                                    <span>120 ml</span>
                                </div>
                                <div className="price">
                                    <div className="actual_price">
                                        <p>₹206</p>
                                    </div>
                                    <div className="dummy_price">
                                        <p>₹275</p>
                                    </div>
                                    <div className="discount">
                                        <p>25%off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add_cart_btns">
                                <div className="wish_list_icon">
                                    <a href="#">
                                        <img src="assets/img/wishlist_icon.png" alt=""/>
                                    </a>
                                </div>
                                <div className="add_btn">
                                    <a href="#">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="fragrance" role="tabpanel" aria-labelledby="fragrance-tab">
                    <div className="waiting_cart_slider owl-carousel owl-theme">
                        <div className="waiting_cart_main">
                            <div className="waiting_cart_wrp">
                                <div className="bestseller">
                                    <img src="assets/img/bestseller_start.png" alt=""/>
                                    <span>bestseller</span>
                                </div>
                                <div className="waiting_cart_img">
                                    <img src="assets/img/trending_img1.jpg" alt=""/>
                                </div>
                                <div className="waiting_cart_text">
                                    <p>Fogg Regular Essence Fragrance
                                        Body Spray </p>
                                    <span>120 ml</span>
                                </div>
                                <div className="price">
                                    <div className="actual_price">
                                        <p>₹206</p>
                                    </div>
                                    <div className="dummy_price">
                                        <p>₹275</p>
                                    </div>
                                    <div className="discount">
                                        <p>25%off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add_cart_btns">
                                <div className="wish_list_icon">
                                    <a href="#">
                                        <img src="assets/img/wishlist_icon.png" alt=""/>
                                    </a>
                                </div>
                                <div className="add_btn">
                                    <a href="#">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="men-store" role="tabpanel" aria-labelledby="men-store-tab">
                    <div className="waiting_cart_slider owl-carousel owl-theme">
                        <div className="waiting_cart_main">
                            <div className="waiting_cart_wrp">
                                <div className="bestseller">
                                    <img src="assets/img/bestseller_start.png" alt=""/>
                                    <span>bestseller</span>
                                </div>
                                <div className="waiting_cart_img">
                                    <img src="assets/img/trending_img1.jpg" alt=""/>
                                </div>
                                <div className="waiting_cart_text">
                                    <p>Fogg Regular Essence Fragrance
                                        Body Spray </p>
                                    <span>120 ml</span>
                                </div>
                                <div className="price">
                                    <div className="actual_price">
                                        <p>₹206</p>
                                    </div>
                                    <div className="dummy_price">
                                        <p>₹275</p>
                                    </div>
                                    <div className="discount">
                                        <p>25%off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add_cart_btns">
                                <div className="wish_list_icon">
                                    <a href="#">
                                        <img src="assets/img/wishlist_icon.png" alt=""/>
                                    </a>
                                </div>
                                <div className="add_btn">
                                    <a href="#">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="appliances" role="tabpanel" aria-labelledby="appliances-tab">
                    <div className="waiting_cart_slider owl-carousel owl-theme">
                        <div className="waiting_cart_main">
                            <div className="waiting_cart_wrp">
                                <div className="bestseller">
                                    <img src="assets/img/bestseller_start.png" alt=""/>
                                    <span>bestseller</span>
                                </div>
                                <div className="waiting_cart_img">
                                    <img src="assets/img/trending_img1.jpg" alt=""/>
                                </div>
                                <div className="waiting_cart_text">
                                    <p>Fogg Regular Essence Fragrance
                                        Body Spray </p>
                                    <span>120 ml</span>
                                </div>
                                <div className="price">
                                    <div className="actual_price">
                                        <p>₹206</p>
                                    </div>
                                    <div className="dummy_price">
                                        <p>₹275</p>
                                    </div>
                                    <div className="discount">
                                        <p>25%off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add_cart_btns">
                                <div className="wish_list_icon">
                                    <a href="#">
                                        <img src="assets/img/wishlist_icon.png" alt=""/>
                                    </a>
                                </div>
                                <div className="add_btn">
                                    <a href="#">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="tab-pane fade" id="personal-care" role="tabpanel" aria-labelledby="personal-care-tab">
                    <div className="waiting_cart_slider owl-carousel owl-theme">
                        <div className="waiting_cart_main">
                            <div className="waiting_cart_wrp">
                                <div className="bestseller">
                                    <img src="assets/img/bestseller_start.png" alt=""/>
                                    <span>bestseller</span>
                                </div>
                                <div className="waiting_cart_img">
                                    <img src="assets/img/trending_img1.jpg" alt=""/>
                                </div>
                                <div className="waiting_cart_text">
                                    <p>Fogg Regular Essence Fragrance
                                        Body Spray </p>
                                    <span>120 ml</span>
                                </div>
                                <div className="price">
                                    <div className="actual_price">
                                        <p>₹206</p>
                                    </div>
                                    <div className="dummy_price">
                                        <p>₹275</p>
                                    </div>
                                    <div className="discount">
                                        <p>25%off</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add_cart_btns">
                                <div className="wish_list_icon">
                                    <a href="#">
                                        <img src="assets/img/wishlist_icon.png" alt=""/>
                                    </a>
                                </div>
                                <div className="add_btn">
                                    <a href="#">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* trending section css end  */}

   {/*Fashion Jewellery section start  */}

    <section className="fashion_jewellery margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>Fashion Jewellery</h2>
                        <p>Add Sparkle to Your Everyday</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-4">
                    <div className="fashion_img">
                        <a href="#">
                            <img src="assets/img/fashion_img1.jpg" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="fashion_img">
                        <a href="#">
                            <img src="assets/img/fashion_img2.jpg" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="fashion_img">
                        <a href="#">
                            <img src="assets/img/fashion_img3.jpg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>

   {/* Fashion Jewellery section end  */}


   {/* Exclusive Makeup section start  */}

    <section className="exclusive_makeup margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading">
                        <h2>Exclusive in Makeup</h2>
                        <p>Craft Your Canvas with Exclusive Finds.</p>
                    </div>
                </div>
            </div>
            <div className="exclusive_makeup_slider owl-carousel owl-theme">
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>
                        </div>
                        <div className="makeup_bottom_text">
                            <p>Lipsticks</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>
                        </div>
                        <div className="makeup_bottom_text">
                            <p>BB Cream</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>

                        </div>
                        <div className="makeup_bottom_text">
                            <p>Foundation</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>

                        </div>
                        <div className="makeup_bottom_text">
                            <p>Makeup Remover</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>

                        </div>
                        <div className="makeup_bottom_text">
                            <p>Nail Polish</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>

                        </div>
                        <div className="makeup_bottom_text">
                            <p>Eyeliner</p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </section>

   {/* Exclusive section end  */}

   {/* bedroom comfort section start  */}

    <section className="bedroom_comfort margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>My Bedroom Comfort</h2>
                        <p>Discover Blissful Comforts for Relaxation.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-4">
                    <div className="bedroom_comfort_img">
                        <a href="#">
                            <img src="assets/img/bedroom_comfort_img1.jpg" alt=""/>
                        </a>
                        <div className="view_all_btn">
                            <a href="#">Explore Bedsheets <i className="fa-solid fa-arrow-right"></i></a>
                        </div>

                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="bedroom_comfort_img">
                        <a href="#">
                            <img src="assets/img/bedroom_comfort_img2.jpg" alt=""/>
                        </a>
                        <div className="view_all_btn">
                            <a href="#">Explore Pillows <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="bedroom_comfort_img">
                        <a href="#">
                            <img src="assets/img/bedroom_comfort_img3.jpg" alt=""/>
                        </a>
                        <div className="view_all_btn">
                            <a href="#">Explore Blankets <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

   {/* bedroom comfort section end  */}

   {/* # new on womancart section start  */}

    <section className="new_on_womancart margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="heading text-center">
                        <h2 className="text_pink">#NewOnWomanCart</h2>
                        <p>Explore Latest Arrivals on WomanCart!</p>
                    </div>
                </div>
            </div>
            <div className="new_on_slider owl-carousel owl-theme">
                <div className="new_on_womancart_wrp">
                    <div className="static_img">
                        <img src="assets/img/newon_womancart1.jpg" alt=""/>
                    </div>
                </div>
                <div className="new_on_womancart_wrp">
                    <div className="static_img">
                        <img src="assets/img/newon_womancart2.jpg" alt=""/>
                    </div>
                </div>
                <div className="new_on_womancart_wrp">
                    <div className="static_img">
                        <img src="assets/img/newon_womancart3.jpg" alt=""/>
                    </div>
                </div>
                <div className="new_on_womancart_wrp">
                    <div className="explore_bg">
                        <img src="assets/img/new_on_women_bg.jpg" alt=""/>
                        <div className="hover_text">
                            <h3>EXPLORE,
                                SHOP,
                                REPEAT</h3>

                            <div className="view_all_btn">
                                <a href="#">VIEW ALL <i className="fa-solid fa-arrow-right-long"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

   {/* # new on womancart section end  */}

   {/* top brands section start  */}

    <section className="top_brands margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading">
                        <h2>Top Brands</h2>
                        <p>Explore India’s Finest Labels.</p>
                    </div>
                </div>
            </div>
            <div className="nav nav-tabs" id="myTab1" role="tablist">
                <div className="top_brands_slider owl-carousel owl-theme">
                    <li className="nav-item" role="presentation">
                        <div className="top_brands_wrp" id="brand1-tab" data-bs-toggle="tab" data-bs-target="#brand1"
                            type="button" role="tab" aria-controls="brand1" aria-selected="true">
                            <img src="assets/img/brands-1.jpg" alt=""/>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="top_brands_wrp" id="brand2-tab" data-bs-toggle="tab" data-bs-target="#brand2"
                            type="button" role="tab" aria-controls="brand2" aria-selected="false">
                            <img src="assets/img/brands-2.jpg" alt=""/>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="top_brands_wrp" id="brand3-tab" data-bs-toggle="tab" data-bs-target="#brand3"
                            type="button" role="tab" aria-controls="brand3" aria-selected="false">
                            <img src="assets/img/brands-3.jpg" alt=""/>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="top_brands_wrp" data-bs-toggle="tab" data-bs-target="#brand4" type="button"
                            role="tab" aria-controls="brand4" aria-selected="false">
                            <img src="assets/img/brands-4.jpg" alt=""/>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="top_brands_wrp" data-bs-toggle="tab" data-bs-target="#brand5" type="button"
                            role="tab" aria-controls="brand5" aria-selected="false">
                            <img src="assets/img/brands-5.jpg" alt=""/>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className="top_brands_wrp" data-bs-toggle="tab" data-bs-target="#brand6" type="button"
                            role="tab" aria-controls="brand6" aria-selected="false">
                            <img src="assets/img/brands-6.jpg" alt=""/>
                        </div>
                    </li>
                </div>

                <div className="tab-content" id="myTabContent2">
                    <div className="tab-pane fade show active" id="brand1" role="tabpanel" aria-labelledby="brand1-tab">
                        <div className="row">
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="brand2" role="tabpanel" aria-labelledby="brand2-tab">
                        <div className="row">
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="brand3" role="tabpanel" aria-labelledby="brand3-tab">
                        <div className="row">
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="brand4" role="tabpanel" aria-labelledby="brand4-tab">
                        <div className="row">
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="brand5" role="tabpanel" aria-labelledby="brand5-tab">
                        <div className="row">
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="brand6" role="tabpanel" aria-labelledby="brand6-tab">
                        <div className="row">
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3 col-xs-6 ">
                                <div className="about_brands_img">
                                    <img src="assets/img/olay-brand-img4.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* top brands section end  */}

   {/* Explore Gifting section start  */}

    <section className="explore_gifting margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading">
                        <h2>Explore Gifting</h2>
                        <p>Captivate the Crowd with Style</p>
                    </div>
                </div>
            </div>
            <div className="explore_gifting_slider owl-carousel owl-theme">
                <div className="explore_gifting_slider_wrp">
                    <a href="#">
                        <div className="explore_gifting_child">
                            <div className="explore_gifting_img">
                                <img src="assets/img/explore_gifting1.png" alt=""/>
                            </div>
                        </div>
                        <div className="explore_gifting_text">
                            <p>Flowers</p>
                        </div>
                    </a>
                </div>
                <div className="explore_gifting_slider_wrp">
                    <a href="#">
                        <div className="explore_gifting_child">
                            <div className="explore_gifting_img">
                                <img src="assets/img/explore_gifting2.png" alt=""/>
                            </div>
                        </div>
                        <div className="explore_gifting_text">
                            <p>For Her</p>
                        </div>
                    </a>
                </div>
                <div className="explore_gifting_slider_wrp">
                    <a href="#">
                        <div className="explore_gifting_child">
                            <div className="explore_gifting_img">
                                <img src="assets/img/explore_gifting3.png" alt=""/>
                            </div>
                        </div>
                        <div className="explore_gifting_text">
                            <p>For Him</p>
                        </div>
                    </a>
                </div>

                <div className="explore_gifting_slider_wrp">
                    <a href="#">
                        <div className="explore_gifting_child">
                            <div className="explore_gifting_img">
                                <img src="assets/img/explore_gifting4.png" alt=""/>
                            </div>
                        </div>
                        <div className="explore_gifting_text">
                            <p>Plants</p>
                        </div>
                    </a>
                </div>
                <div className="explore_gifting_slider_wrp">
                    <a href="#">
                        <div className="explore_gifting_child">
                            <div className="explore_gifting_img">
                                <img src="assets/img/explore_gifting5.png" alt=""/>
                            </div>
                        </div>
                        <div className="explore_gifting_text">
                            <p>Fashion</p>
                        </div>
                    </a>
                </div>
                <div className="explore_gifting_slider_wrp">
                    <a href="#">
                        <div className="explore_gifting_child">
                            <div className="explore_gifting_img">
                                <img src="assets/img/explore_gifting6.png" alt=""/>
                            </div>
                        </div>
                        <div className="explore_gifting_text">
                            <p>Home & Living</p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </section>

   {/* Explore Gifting section end  */}

   {/* mom and baby section start  */}

    <section className="mom_baby margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>Mom and Baby</h2>
                        <p>Cherish Every Step of Motherhood</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="mom_baby_wrp">
                        <img src="assets/img/mom_baby1.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="mom_baby_wrp">
                        <img src="assets/img/mom_baby2.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="mom_baby_wrp">
                        <img src="assets/img/mom_baby3.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="mom_baby_wrp">
                        <img src="assets/img/mom_baby4.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* mom and baby section end  */}

   {/* Shop Again! section start  */}

    <section className="waiting_cart shop_again margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading">
                        <h2>Shop Again!</h2>
                        <p>Discover Our Pinnacle Picks!</p>
                    </div>
                </div>
            </div>
            <div className="waiting_cart_slider owl-carousel owl-theme">
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/shop_again1.jpg" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Neutrogena Deep Clean Facial Cleanser Face Wash </p>
                            <span>150 ML</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹399</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹459</p>
                            </div>
                            <div className="discount">
                                <p>15%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/shop_again1.jpg" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Neutrogena Deep Clean Facial Cleanser Face Wash </p>
                            <span>150 ML</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹399</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹459</p>
                            </div>
                            <div className="discount">
                                <p>15%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/shop_again1.jpg" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Neutrogena Deep Clean Facial Cleanser Face Wash </p>
                            <span>150 ML</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹399</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹459</p>
                            </div>
                            <div className="discount">
                                <p>15%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/shop_again1.jpg" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Neutrogena Deep Clean Facial Cleanser Face Wash </p>
                            <span>150 ML</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹399</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹459</p>
                            </div>
                            <div className="discount">
                                <p>15%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* Shop Again! section css end  */}

   {/* Kitchen Essentials section start  */}

    <section className="kitchen_essential margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>Kitchen Essentials</h2>
                        <p>Explore Must-Have Tools for Mastery</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-4">
                    <div className="kitchen_essential_wrp">
                        <div className="kitchen_essential_img">
                            <img src="assets/img/kitchen_essential_1.jpg" alt=""/>
                        </div>
                        <div className="kitchen_essential_text">
                            <div className="kitchecn_text">
                                <h6>Crockery Sets</h6>
                            </div>
                            <div className="view_all_btn">
                                <a href="#">View All <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="kitchen_essential_wrp">
                        <div className="kitchen_essential_img">
                            <img src="assets/img/kitchen_essential_2.jpg" alt=""/>
                        </div>
                        <div className="kitchen_essential_text">
                            <div className="kitchecn_text">
                                <h6>Cookware</h6>
                            </div>
                            <div className="view_all_btn">
                                <a href="#">View All <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <div className="kitchen_essential_wrp">
                        <div className="kitchen_essential_img">
                            <img src="assets/img/kitchen_essential_3.jpg" alt=""/>
                        </div>
                        <div className="kitchen_essential_text">
                            <div className="kitchecn_text">
                                <h6>Dispensers</h6>
                            </div>
                            <div className="view_all_btn">
                                <a href="#">View All <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* Kitchen Essentials section end  */}


   {/* Exclusive Skincare section start  */}

    <section className="exclusive_makeup margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading">
                        <h2>Exclusive Skincare</h2>
                        <p>Bespoke Solutions for Your Unique Glow</p>
                    </div>
                </div>
            </div>
            <div className="exclusive_makeup_slider owl-carousel owl-theme">
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>
                        </div>
                        <div className="makeup_bottom_text">
                            <p>Facewash</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>
                        </div>
                        <div className="makeup_bottom_text">
                            <p>Sunscreen</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>

                        </div>
                        <div className="makeup_bottom_text">
                            <p>Shower Gel</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>

                        </div>
                        <div className="makeup_bottom_text">
                            <p>Night Cream</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>

                        </div>
                        <div className="makeup_bottom_text">
                            <p>Moisturizers</p>
                        </div>
                    </a>
                </div>
                <div className="exclusive_makeup_wrp">
                    <a href="#">
                        <div className="exclusive_makeup_child">
                            <div className="makeup_img">
                                <img src="assets/img/exclusive_makeup1.png" alt=""/>
                            </div>

                        </div>
                        <div className="makeup_bottom_text">
                            <p>Serums</p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </section>

   {/* Exclusive Skincare section end  */}


   {/* flawless beauty section start  */}

    <section className="flawless_beauty margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>Flawless Beauty</h2>
                        <p>Your Flawless Self with Our Beauty Picks.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-7 col-sm-7">
                    <div className="flawless_static_img">
                        <img src="assets/img/flawless_big_img.jpg" alt=""/>
                    </div>
                </div>
               {/* <div className="col-lg-5 col-sm-5">
                    <div className="flawless_vertical_slider owl-carousel owl-theme">
                        <div className="flawless_scroll_img">
                            <img src="assets/img/flawless_scroll_img1.jpg" alt=""/>
                        </div>
                        <div className="flawless_scroll_img">
                            <img src="assets/img/flawless_scroll_img1.jpg" alt=""/>
                        </div>
                        <div className="flawless_scroll_img">
                            <img src="assets/img/flawless_scroll_img1.jpg" alt=""/>
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-5 col-sm-5">
                    <div className="flawless_vertical">
                        <div className="flawless_scroll_img">
                            <a href="#">
                                <img src="assets/img/flawless_scroll_img1.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="flawless_scroll_img">
                            <a href="#">
                                <img src="assets/img/flawless_scroll_img2.jpg" alt=""/>
                            </a>
                        </div>
                        <div className="flawless_scroll_img">
                            <a href="#">
                                <img src="assets/img/flawless_scroll_img3.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* flawless beauty section end  */}


   {/* Sparkle & Shine section start  */}

    <section className="sparkle_shine margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>Sparkle & Shine</h2>
                        <p>Premium Toiletries & Cleaning.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="sparkle_shine_slider owl-carousel owl-theme">
                <div className="sparke_wrp">
                    <div className="sparke_shine_img">
                        <img src="assets/img/sparkle_shine1.png" alt=""/>
                    </div>
                    <div className="sparkle_text">
                        <p>Toilet Cleaner</p>
                    </div>
                </div>
                <div className="sparke_wrp">
                    <div className="sparke_shine_img">
                        <img src="assets/img/sparkle_shine1.png" alt=""/>
                    </div>
                    <div className="sparkle_text">
                        <p>Toilet Cleaner</p>
                    </div>
                </div>
                <div className="sparke_wrp">
                    <div className="sparke_shine_img">
                        <img src="assets/img/sparkle_shine1.png" alt=""/>
                    </div>
                    <div className="sparkle_text">
                        <p>Toilet Cleaner</p>
                    </div>
                </div>
                <div className="sparke_wrp">
                    <div className="sparke_shine_img">
                        <img src="assets/img/sparkle_shine1.png" alt=""/>
                    </div>
                    <div className="sparkle_text">
                        <p>Toilet Cleaner</p>
                    </div>
                </div>
                <div className="sparke_wrp">
                    <div className="sparke_shine_img">
                        <img src="assets/img/sparkle_shine1.png" alt=""/>
                    </div>
                    <div className="sparkle_text">
                        <p>Toilet Cleaner</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* Sparkle & Shine section end  */}

   {/* Our Best Sellers sectiopn start  */}

    <section className="waiting_cart margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading">
                        <h2>Our Best Sellers</h2>
                        <p>Tried, Loved, Trending</p>
                    </div>
                </div>
            </div>
            <div className="waiting_cart_slider owl-carousel owl-theme">
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/bestseller1.jpg" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Sayda Jewels Adarshini Pendant
                                PT-SR-05 </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹3312</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹4140</p>
                            </div>
                            <div className="discount">
                                <p>20%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/bestseller1.jpg" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Sayda Jewels Adarshini Pendant
                                PT-SR-05 </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹3312</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹4140</p>
                            </div>
                            <div className="discount">
                                <p>20%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/bestseller1.jpg" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Sayda Jewels Adarshini Pendant
                                PT-SR-05 </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹3312</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹4140</p>
                            </div>
                            <div className="discount">
                                <p>20%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/bestseller1.jpg" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Sayda Jewels Adarshini Pendant
                                PT-SR-05 </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹3312</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹4140</p>
                            </div>
                            <div className="discount">
                                <p>20%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/bestseller1.jpg" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Sayda Jewels Adarshini Pendant
                                PT-SR-05 </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹3312</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹4140</p>
                            </div>
                            <div className="discount">
                                <p>20%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

   {/* Our Best Sellers sectiopn end  */}

   {/* for festival section start  */}

    <section className="for_festival margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="festival_head">

                        <div className="festival_inner_content">
                            <div className="row">
                                <div className="col-lg-8 col-sm-7">
                                    <div className="festival_flex">
                                        <div className="for_festival_text">
                                            <div className="quotes">
                                                <img src="assets/img/quotes.png" alt=""/>
                                            </div>
                                            <div className="text">
                                                <h4>Unwrap glamour with
                                                    our festive fashion wonders</h4>
                                            </div>
                                            <div className="btn_with_text">
                                                <div className="btn_head">
                                                    <h3>For Festivals</h3>
                                                    <p>Captivate the Crowd with Style</p>
                                                </div>
                                                <div className="explore_btn_festival">
                                                    <a href="#">Explore All <i className="fa-solid fa-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-4 col-sm-5">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 col-xs-6">
                                            <div className="festival_category">
                                                <div className="festival_img">
                                                    <img src="assets/img/festival_lehnga.jpg" alt=""/>
                                                </div>
                                                <div className="festival_bottom_text">
                                                    <a href="#">Lehengas</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-xs-6">
                                            <div className="festival_category">
                                                <div className="festival_img">
                                                    <img src="assets/img/festival_saree.jpg" alt=""/>
                                                </div>
                                                <div className="festival_bottom_text">
                                                    <a href="#">Sarees</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-xs-6">
                                            <div className="festival_category categories_bottom">
                                                <div className="festival_img">
                                                    <img src="assets/img/festival_kurtaset.jpg" alt=""/>
                                                </div>
                                                <div className="festival_bottom_text">
                                                    <a href="#">Kurta Sets</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 col-xs-6">
                                            <div className="festival_category categories_bottom">
                                                <div className="festival_img">
                                                    <img src="assets/img/festival_co-ord.jpg" alt=""/>
                                                </div>
                                                <div className="festival_bottom_text">
                                                    <a href="#">Co-Ords</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

   {/* for festival section end  */}

   {/* comfy casual section start  */}

    <section className="comfy_casual margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading">
                        <h2>Comfy Casuals</h2>
                        <p>Captivate the Crowd with Style</p>
                    </div>
                </div>
            </div>
            <div className="comfy_slider owl-carousel owl-theme">
                <div className="comfy_wrp">
                    <div className="comfy_img">
                        <img src="assets/img/comfy_casual1.jpg" alt=""/>
                        <div className="comfy_bottom_text">
                            <a href="#">Dresses</a>
                        </div>
                    </div>
                </div>
                <div className="comfy_wrp">
                    <div className="comfy_img">
                        <img src="assets/img/comfy_casual2.jpg" alt=""/>
                        <div className="comfy_bottom_text">
                            <a href="#">Tops</a>
                        </div>
                    </div>
                </div>
                <div className="comfy_wrp">
                    <div className="comfy_img">
                        <img src="assets/img/comfy_casual4.jpg" alt=""/>
                        <div className="comfy_bottom_text">
                            <a href="#">Co-ords</a>
                        </div>
                    </div>
                </div>
                <div className="comfy_wrp">
                    <div className="comfy_img">
                        <img src="assets/img/comfy_casual3.jpg" alt=""/>
                        <div className="comfy_bottom_text">
                            <a href="#">Kurta</a>
                        </div>
                    </div>
                </div>
                <div className="comfy_wrp">
                    <div className="explore_repeat_bg">
                        <img src="assets/img/explore_repeat_bg.jpg" alt=""/>
                        <div className="explore_text">
                            <h3>EXLPORE,
                                SHOP,
                                REPEAT</h3>
                            <div className="view_btn">
                                <a href="#">VIEW ALL <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* comfy casual section end  */}

   {/* be a superman section start  */}

    <section className="be_superman margin_top">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="heading text-center">
                        <h2 className="text_pink">#BeASuperman</h2>
                        <p>Power-up Your Grooming</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-4 col-xs-6">
                    <div className="be_superman_wrp">
                        <a href="#">
                            <img src="assets/img/be_superman1.jpg" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-6">
                    <div className="be_superman_wrp">
                        <a href="#">
                            <img src="assets/img/be_superman2.jpg" alt=""/>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-6">
                    <div className="be_superman_wrp">
                        <a href="#">
                            <img src="assets/img/be_superman3.jpg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="waiting_cart margin_top">
        <div className="container">

            <div className="waiting_cart_slider owl-carousel owl-theme">
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/nivia_men1.png" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Nivea Dark Spot Reduction
                                Face Wash </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹399</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹459</p>
                            </div>
                            <div className="discount">
                                <p>15%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/nivia_men1.png" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Nivea Dark Spot Reduction
                                Face Wash </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹399</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹459</p>
                            </div>
                            <div className="discount">
                                <p>15%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/nivia_men1.png" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Nivea Dark Spot Reduction
                                Face Wash </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹399</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹459</p>
                            </div>
                            <div className="discount">
                                <p>15%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/nivia_men1.png" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Nivea Dark Spot Reduction
                                Face Wash </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹399</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹459</p>
                            </div>
                            <div className="discount">
                                <p>15%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
                <div className="waiting_cart_main">
                    <div className="waiting_cart_wrp">
                        <div className="bestseller">
                            <img src="assets/img/bestseller_start.png" alt=""/>
                            <span>bestseller</span>
                        </div>
                        <div className="waiting_cart_img">
                            <img src="assets/img/nivia_men1.png" alt=""/>
                        </div>
                        <div className="waiting_cart_text">
                            <p>Nivea Dark Spot Reduction
                                Face Wash </p>
                            <span>1 pcs</span>
                        </div>
                        <div className="price">
                            <div className="actual_price">
                                <p>₹399</p>
                            </div>
                            <div className="dummy_price">
                                <p>₹459</p>
                            </div>
                            <div className="discount">
                                <p>15%off</p>
                            </div>
                        </div>
                    </div>
                    <div className="add_cart_btns">
                        <div className="wish_list_icon">
                            <a href="#">
                                <img src="assets/img/wishlist_icon.png" alt=""/>
                            </a>
                        </div>
                        <div className="add_btn">
                            <a href="#">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* be a superman section end  */}

   {/* hair Essentials section start  */}

    <section className="hair_essential margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>Hair Essentials</h2>
                        <p>Elevate Your Locks with Essential Hair Care</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="hair_essintial_wrp">
                        <a href="#">
                            <div className="hair_essintial_img">
                                <img src="assets/img/hair_essential1.jpg" alt=""/>
                                <div className="bottom_text">
                                    <p>Upto 20% off</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="hair_essintial_wrp">
                        <a href="#">
                            <div className="hair_essintial_img">
                                <img src="assets/img/hair_essential2.jpg" alt=""/>
                                <div className="bottom_text">
                                    <p>Upto 10% off</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="hair_essintial_wrp">
                        <a href="#">
                            <div className="hair_essintial_img">
                                <img src="assets/img/hair_essential3.jpg" alt=""/>
                                <div className="bottom_text">
                                    <p>Upto 20% off</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-xs-6 ">
                    <div className="hair_essintial_wrp">
                        <a href="#">
                            <div className="hair_essintial_img">
                                <img src="assets/img/hair_essential4.jpg" alt=""/>
                                <div className="bottom_text">
                                    <p>Upto 30% off</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* hair Essentials section end  */}

   {/* shop without limits section start  */}

    <section className="shop_limits margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>Shop without Limits</h2>
                        <p>Infinite Choices, Endless Beauty</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <div className="shop_wrp">
                        <div className="shop_img">
                            <a href="#">
                                <img src="assets/img/shop_limits1.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                    <div className="shop_wrp">
                        <div className="shop_img">
                            <a href="#">
                                <img src="assets/img/shop_limits2.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="shop_wrp desktop_margin_bottom">
                        <div className="shop_img">
                            <a href="#">
                                <img src="assets/img/shop_limits3.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="shop_wrp desktop_margin_bottom">
                        <div className="shop_img">
                            <a href="#">
                                <img src="assets/img/shop_limits4.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   {/* shop without limits section end  */}

   {/* sexual wellness section start  */}

    <section className="sexual_wellness margin_top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="heading">
                        <h2>Sexual Wellness</h2>
                        <p>Explore Intimacy, Sensational Vibes.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-4 col-sm-4 col-xs-6">
                    <div className="sexsual_wrp">
                        <div className="sexsual_wrp_img">
                            <a href="#">
                                <img src="assets/img/sexsual1.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-4 col-xs-6">
                    <div className="sexsual_wrp">
                        <div className="sexsual_wrp_img">
                            <a href="#">
                                <img src="assets/img/sexsual2.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-6">
                    <div className="sexsual_wrp">
                        <div className="sexsual_wrp_img">
                            <a href="#">
                                <img src="assets/img/sexsual3.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
         
    </>
  )
}

export default Home
