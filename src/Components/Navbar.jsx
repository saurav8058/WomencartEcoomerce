import React from 'react'
import '../assets/css/style.css'
import '../assets/css/responsive.css'
import '../assets/css/owl-carousel-min.css'
import '../assets/css/boxicons.min.css'
import { NavLink } from 'react-router-dom'

//import '../css/owl-carousel-min.css'

const Navbar = () => {
  return (
    <>
        <section className="about_delivery_details">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-6">
                    <div className="delivery_flex">
                        <p>Free Delivery on shopping above 500</p>
                        <p>Delivery in just 2 hours in DELHI-NCR</p>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="app_gift">
                        <ul>
                            <li><a href="#"><img src="assets/img/phone_icon.png" alt=""/> Get App </a></li>
                            <li><a href="#"><img src="assets/img/gift_card_icon.png" alt=""/> Gift Card </a></li>
                            <li><a href="#"><img src="assets/img/call_back_icon.png" alt=""/> Help </a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="flex_direction_mob">
        <section className="main_header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-sm-3">
                        <div className="header_logo desktop_logo">
                            <NavLink to="/">
                                <img src="assets/img/logo.webp" alt=""/>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-5">
                        <div className="header_text">
                            <ul>
                               <NavLink to="/category"> <li>Categories</li></NavLink>
                                <li><a href="#">Brands</a></li>
                                <li><a href="#">What’s New</a></li>
                        <NavLink to="/product-list"><li>Offers</li></NavLink>        
                                <li><a href="#">Beauty Advice</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                        <div className="header_search_icon">
                            <form action="">
                                <div className="form_group">
                                    <div className="search_icon">
                                        <img src="assets/img/search_icon.png" alt=""/>
                                    </div>
                                    <div className="input_form">
                                        <input type="text" className="form-control" placeholder="search what you love...."/>
                                        <div className="mike">
                                            <a href="#">
                                                <img src="assets/img/mike_icon.png" alt=""/>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </form>

                            <div className="header_icons">
                                <ul>
                                    <li><a href="#"><img src="assets/img/user_icon.png" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/img/store_icon.png" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/img/header_wishlist_icon.png" alt=""/></a></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <header id="header">
            <nav className="navbar container">
                <section className="navbar__left">
                    <div className="mob_logo">
                       
                        <NavLink to="/">
                           <img src="assets/img/logo.webp" alt=""/>
                           </NavLink>   
                       
                    </div>
                    <div className="burger" id="burger">
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </div>
                </section>
                <section className="navbar__center">
                    <span className="overlay"></span>
                    <div className="menu" id="menu">
                        <div className="menu__header">
                            <span className="menu__arrow"/> <i className="fa-solid fa-chevron-left"></i>
                                <span className="menu__title"></span>
                        </div>
                        <ul className="menu__inner">
                            <li className="menu__item"><a href="#" className="menu__link">Makeup</a></li>

                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Skin
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                                <div className="submenu megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Cleansers</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Face wash</a></li>
                                            <li><a href="#">Cleansers</a></li>
                                            <li><a href="#">Scrubs and exfoliators</a></li>
                                            <li><a href="#">Face wipes</a></li>
                                            <li><a href="#">Makeup remover</a></li>
                                            <li><a href="#">Facial Bar</a></li>

                                        </ul>
                                        <h4 className="submenu__title">Cleansers</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Face wash</a></li>
                                            <li><a href="#">Cleansers</a></li>
                                            <li><a href="#">Scrubs and exfoliators</a></li>
                                            <li><a href="#">Face wipes</a></li>
                                            <li><a href="#">Makeup remover</a></li>
                                            <li><a href="#">Facial Bar</a></li>

                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Men</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">T-shirts & Tanks</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Blazers & Suits</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Kids</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Activewear</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sport</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Accessories & Equipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Hair
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                                <div className="submenu megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Women</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Shirts & Blouses</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Blazers & Vests</a></li>
                                            <li><a href="#">Cardigans & Sweaters</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Men</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">T-shirts & Tanks</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Blazers & Suits</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Kids</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Activewear</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sport</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Accessories & Equipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Appliances
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                                <div className="submenu megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Women</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Shirts & Blouses</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Blazers & Vests</a></li>
                                            <li><a href="#">Cardigans & Sweaters</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Men</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">T-shirts & Tanks</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Blazers & Suits</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Kids</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Activewear</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sport</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Accessories & Equipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Personal care
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                                <div className="submenu megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Women</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Shirts & Blouses</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Blazers & Vests</a></li>
                                            <li><a href="#">Cardigans & Sweaters</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Men</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">T-shirts & Tanks</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Blazers & Suits</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Kids</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Activewear</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sport</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Accessories & Equipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Mom and Baby
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                                <div className="submenu megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Women</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Shirts & Blouses</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Blazers & Vests</a></li>
                                            <li><a href="#">Cardigans & Sweaters</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Men</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">T-shirts & Tanks</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Blazers & Suits</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Kids</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Activewear</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sport</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Accessories & Equipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Men's Store
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                                <div className="submenu megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Women</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Shirts & Blouses</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Blazers & Vests</a></li>
                                            <li><a href="#">Cardigans & Sweaters</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Men</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">T-shirts & Tanks</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Blazers & Suits</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Kids</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Activewear</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sport</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Accessories & Equipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Fragrance
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                                <div className="submenu megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Women</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Shirts & Blouses</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Blazers & Vests</a></li>
                                            <li><a href="#">Cardigans & Sweaters</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Men</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">T-shirts & Tanks</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Blazers & Suits</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Kids</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Activewear</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sport</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Accessories & Equipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Jewellery
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                                <div className="submenu megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Women</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Shirts & Blouses</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Blazers & Vests</a></li>
                                            <li><a href="#">Cardigans & Sweaters</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Men</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">T-shirts & Tanks</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Blazers & Suits</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Kids</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Activewear</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sport</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Accessories & Equipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="menu__item menu__dropdown">
                                <a href="#" className="menu__link">
                                    Lingerie & Sleep Wear
                                    <i className="fa-solid fa-chevron-right"></i>
                                </a>
                                <div className="submenu megamenu__text">
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Women</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Shirts & Blouses</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Blazers & Vests</a></li>
                                            <li><a href="#">Cardigans & Sweaters</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Men</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">T-shirts & Tanks</a></li>
                                            <li><a href="#">Pants</a></li>
                                            <li><a href="#">Hoodies & Sweatshirts</a></li>
                                            <li><a href="#">Blazers & Suits</a></li>
                                        </ul>
                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Kids</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Activewear</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                    </div>
                                    <div className="submenu__inner">
                                        <h4 className="submenu__title">Sport</h4>
                                        <ul className="submenu__list">
                                            <li><a href="#">Clothing</a></li>
                                            <li><a href="#">Swimwear</a></li>
                                            <li><a href="#">Outerwear</a></li>
                                            <li><a href="#">Accessories & Equipment</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="navbar__right">
                    <button className="switch" id="switch">

                    </button>
                </section>
            </nav>
        </header>
    </section>
    </>
  )
}

export default Navbar
