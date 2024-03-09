import React from 'react'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import '../assets/css/owl-carousel-min.css'
import '../assets/css/boxicons.min.css'
import { NavLink } from 'react-router-dom'
const Productlist = () => {
  return (
  <>
      {/* bradcrum  start */}
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb flat">
                        <a href="#">Home /</a>
                        <a href="#">Makeup /</a>
                        <a href="#" className="active"> Face Makeup Products -</a>
                        <a href="#"> Item 1882</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* bradcrum end  */}
    {/* banner start */}
    <section className="banner">
        <img src="assets/img/product-list/banner.png" alt="" width="100%"/>
    </section>
{/*  */}
    {/* banner end  */}



    <section className="margin_top-50">
        <div className="container">

            <div className="row align-items-center">
                <div className="col-lg-8 col-sm-8 col-xs-7">
                    <div className="">
                        <h3 className="text_pink">FILTERS</h3>

                    </div>
                </div>
                <div className="col-lg-4 col-sm-4 col-xs-5">
                    <div className="explore_btn">
                        <a href="#">Explore All <i className="fa-solid fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
<hr/>

            <div className="row">
                <div className="col-lg-3">
                    <div id="sidebar">
                        <ul data-accordion="" className="bx--accordion">
                            <li data-accordion-item="" className="bx--accordion__item bx--accordion__item--active">
                                <button className="bx--accordion__heading" aria-expanded="true" aria-controls="pane1">
                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet"
                                        style={{willChange:"transform"}} xmlns="http://www.w3.org/2000/svg"
                                        className="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path>
                                    </svg>
                                    <div className="bx--accordion__title">Category <span className="clear">Clear</span></div>
                                </button>
                                <div id="pane1" className="bx--accordion__content">
                                    <ul data-accordion="" className="categories">
                                        <li>Categories<span className="count">123K</span>
                                            <ul>
                                                <li className="subcat"><input type="checkbox" id="all"/><label
                                                        for="all">Lipstick</label><span className="count">123K</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="low"/><label
                                                        for="low">Makeup Combo</label><span className="count">97K</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="high"/><label
                                                        for="high">Eyeshadow</label><span className="count">93K</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="boots"/><label
                                                        for="boots">Foundation</label><span className="count">31K</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="casual"/><label
                                                        for="casual">Eyeliner</label><span className="count">23K</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="formal"/><label
                                                        for="formal">Concealer</label><span className="count">18K</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="sand"/><label
                                                        for="sand">Makeup Gift Set</label><span className="count">2K</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="slip"/><label
                                                        for="slip">Compact</label><span className="count">456</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>+ 24 more</li>

                                    </ul>
                                </div>
                            </li>



                            <li data-accordion-item="" className="bx--accordion__item bx--accordion__item--active">
                                <button className="bx--accordion__heading" aria-expanded="true" aria-controls="pane1">
                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet"
                                        style={{willChange:"transform"}} xmlns="http://www.w3.org/2000/svg"
                                        className="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path>
                                    </svg>
                                    <div className="bx--accordion__title">Brands <span className="clear">Clear</span></div>
                                </button>
                                <div id="pane1" className="bx--accordion__content">
                                    <ul data-accordion="" className="categories">
                                        <li>
                                            <ul>
                                                <li className="subcat"><input type="checkbox" id="all"/><label for="all">NOY
                                                    </label><span className="count">(2280)</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="low"/><label for="low"> MI
                                                        FASHION </label><span className="count">(862) </span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="high"/><label
                                                        for="high">PERPAA </label><span className="count">(853)</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="boots"/><label
                                                        for="boots">Colors Queen </label><span
                                                        className="count">(847)</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="casual"/><label
                                                        for="casual">
                                                        CurlyTales </label><span className="count">(613)</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="formal"/><label
                                                        for="formal"> MISS ROSE </label><span className="count">(608)</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="sand"/><label for="sand">
                                                        MyGlamm </label><span className="count">(607)</span>
                                                </li>
                                                <li className="subcat"><input type="checkbox" id="slip"/><label
                                                        for="slip">INCOLOR </label><span className="count">(594)</span>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>+ 424 more</li>


                                    </ul>
                                </div>
                            </li>

                            <li data-accordion-item="" className="bx--accordion__item bx--accordion__item--active">
                                <button className="bx--accordion__heading" aria-expanded="true" aria-controls="pane3">
                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet"
                                        style={{willChange:"transform"}}xmlns="http://www.w3.org/2000/svg"
                                        className="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path>
                                    </svg>
                                    <div className="bx--accordion__title">Price</div>
                                </button>
                                <div id="pane3" className="bx--accordion__content">

                                    <input className="pricein" type="text" placeholder="₹ min" name="search"/>
                                    <input className="pricein" type="text" placeholder="₹ max" name="search"/>

                                    <ul className="designers">

                                        <li className="subcat"><input type="checkbox" id="50"/><label for="50">Rs. 49 to Rs.
                                                3222
                                            </label><span className="count">(27714)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="100"/><label for="100">Rs. 3222 to
                                                Rs. 6395
                                            </label><span className="count">(526)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="250"/><label for="250">Rs. 6395 to
                                                Rs. 9568
                                            </label><span className="count">(10) </span>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li data-accordion-item="" className="bx--accordion__item bx--accordion__item--active">
                                <button className="bx--accordion__heading" aria-expanded="true" aria-controls="pane2">
                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet"
                                        style={{willChange:"transform"}} xmlns="http://www.w3.org/2000/svg"
                                        className="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path>
                                    </svg>
                                    <div className="bx--accordion__title">Colors</div>
                                </button>
                                <div id="pane2" className="bx--accordion__content">

                                    <input className="dsearch" type="text" placeholder="Search Designers" name="search"/>

                                    <ul className="designers">
                                        <li className="subcat"><input type="checkbox" id="sup"/><span><img
                                                    src="assets/img/product-list/color-Beige.png" alt=""/></span><label
                                                for="sup">Supreme</label><span className="count">123K</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="bape"/><span><img
                                                    src="assets/img/product-list/colo-multi.png" alt=""/></span><label
                                                for="bape">Bape</label><span className="count">97K</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="gucci"/><span><img
                                                    src="assets/img/product-list/color-Brown.png" alt=""/></span><label
                                                for="gucci">Gucci</label><span className="count">93K</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="bal"/><span><img
                                                    src="assets/img/product-list/color-Nude.png" alt=""/></span><label
                                                for="bal">Balenciaga</label><span className="count">31K</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="prada"/><span><img
                                                    src="assets/img/product-list/color-pink.png" alt=""/></span><label
                                                for="prada">Prada</label><span className="count">23K</span></li>
                                        <li className="subcat"><input type="checkbox" id="formal"/><span><img
                                                    src="assets/img/product-list/color-red.png" alt=""/></span><label
                                                for="formal">Formal
                                                Shoes</label><span className="count">18K</span></li>
                                        <li>+ 39 more</li>
                                    </ul>

                                </div>
                            </li>

                            <li data-accordion-item="" className="bx--accordion__item">
                                <button className="bx--accordion__heading" aria-expanded="false" aria-controls="pane4">
                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet"
                                        style={{willChange:"transform"}}xmlns="http://www.w3.org/2000/svg"
                                        className="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path>
                                    </svg>
                                    <div className="bx--accordion__title">Skin Type</div>
                                </button>
                                <div id="pane4" className="bx--accordion__content">
                                    <ul className="designers">

                                        <li className="subcat"><input type="checkbox" id="new"/><label for="new">Normal
                                                Worn</label><span className="count">Normal (767)
                                            </span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="gent"/><label
                                                for="gent">Combination
                                            </label><span className="count">(642)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="used"/><label for="used">
                                                All </label><span className="count">(632)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="very"/><label for="very"> Oily
                                            </label><span className="count">(608)</span></li>
                                        <li className="subcat"><input type="checkbox" id="very"/><label for="very"> Dry
                                            </label><span className="count">(603)</span></li>
                                        <li className="subcat"><input type="checkbox" id="very"/><label for="very"> Sensitive
                                            </label><span className="count">(559)</span></li>



                                    </ul>
                                </div>
                            </li>






                            <li data-accordion-item="" className="bx--accordion__item">
                                <button className="bx--accordion__heading" aria-expanded="false" aria-controls="pane4">
                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet"
                                        style={{willChange:"transform"}} xmlns="http://www.w3.org/2000/svg"
                                        className="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path>
                                    </svg>
                                    <div className="bx--accordion__title">Shop by Skin Concern</div>
                                </button>
                                <div id="pane4" className="bx--accordion__content">
                                    <ul className="designers">

                                        <li className="subcat"><input type="checkbox" id="us"/><label for="us">Aging

                                            </label><span className="count">(235)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="uk"/><label for="uk">Acne

                                            </label><span className="count">(156)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="uk"/><label for="uk">
                                                Discoloration
                                            </label><span className="count">(229)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="eu"/><label for="eu"> Dehydrate

                                            </label><span className="count"> (359)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="asia"/><label for="asia">
                                                Sensitized </label><span className="count">(135)</span></li>

                                    </ul>
                                </div>
                            </li>
                            <li data-accordion-item="" className="bx--accordion__item">
                                <button className="bx--accordion__heading" aria-expanded="false" aria-controls="pane3">
                                    <svg focusable="false" preserveAspectRatio="xMidYMid meet"
                                        style={{willChange:"transform"}} xmlns="http://www.w3.org/2000/svg"
                                        className="bx--accordion__arrow" width="16" height="16" viewBox="0 0 16 16"
                                        aria-hidden="true">
                                        <path d="M11 8l-5 5-.7-.7L9.6 8 5.3 3.7 6 3z"></path>
                                    </svg>
                                    <div className="bx--accordion__title">Formulation</div>
                                </button>
                                <div id="pane3" className="bx--accordion__content">
                                    <ul className="designers">

                                        <li className="subcat"><input type="checkbox" id="grails"/><label for="grails">Liquid

                                            </label><span className="count"> (936)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="hype"/><label for="hype"> Pressed
                                                Powder
                                            </label><span className="count">(768)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="core"/><label for="core"> Cream

                                            </label><span className="count"> (605)</span>
                                        </li>
                                        <li className="subcat"><input type="checkbox" id="sort"/><label for="sort"> Stick

                                            </label><span className="count"> (176)</span></li>
                                        <li className="subcat"><input type="checkbox" id="sort"/><label for="sort">Loose
                                                Powder
                                            </label><span className="count">(131)</span></li>
                                        <li className="subcat"><input type="checkbox" id="sort"/><label for="sort"> Gel
                                            </label><span className="count">(120)</span></li>
                                        <li className="subcat"><input type="checkbox" id="sort"/><label for="sort"> Spray

                                            </label><span className="count">(90)</span></li>
                                        <li className="subcat"><input type="checkbox" id="sort"/><label for="sort"> Balm
                                            </label><span className="count">(83)</span></li>




                                        <li className="subcat"><input type="checkbox" id="sort"/><label for="sort"> Mousse
                                            </label><span className="count">(38)</span></li>


                                        <li className="subcat"><input type="checkbox" id="sort"/><label for="sort">Mist

                                            </label><span className="count">(27)</span></li>





                                    </ul>
                                </div>
                            </li>


                        </ul>


                    </div>
                </div>

                <div className="col-lg-9">
                    <section className="waiting_cart">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                              <NavLink to="/product-details"><img src="assets/img/category/most-loved1.png" alt=""/></NavLink>              
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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

                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                            <div className="col-lg-3">
                                <div className="waiting_cart_main">
                                    <div className="waiting_cart_wrp">
                                        <div className="bestseller">
                                            <img src="assets/img/bestseller_start.png" alt=""/>

                                            <span>bestseller</span>
                                        </div>
                                        <div className="bestseller">
                                            <img src="assets/img/featured.png" alt=""/>

                                            <span>FEATURED</span>
                                        </div>
                                        <div className="waiting_cart_img">
                                            <img src="assets/img/category/most-loved1.png" alt=""/>
                                        </div>
                                        <div className="waiting_cart_text">
                                            <p>Maybelline New York The Colossal Mascara Waterproof </p>
                                            <span>4 g</span>
                                        </div>
                                        <div className="price">
                                            <div className="actual_price">
                                                <p>₹149</p>
                                            </div>
                                            <div className="dummy_price">
                                                <p>₹199</p>
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
                    </section>
                </div>
            </div>
        </div>

    </section> 
    </>
  )
}

export default Productlist
