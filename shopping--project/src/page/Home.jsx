import {Container, Col, Row} from "react-bootstrap";
// 슬릭 라이브러리 추가
import Slider from "react-slick";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'

import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import DataContext from "../context/DataContext";

import React, { Component } from "react";
import MainCardComp from "../components/MainCardComp"
import MainCardComp2 from "../components/MainCardComp2"
import MainCardComp3 from "../components/MainCardComp3"
import Parallax from "../components/Parallax";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import Map from "../Map/Map";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";
import {useRef, useState } from "react";

import ScrollToTop from "../components/ScrollToTop";


const { kakao } = window;

const Home = ({menu, movePage}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const settings1 = {
        arrows: false, // 화살표 없애줌
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    

    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])

    // 받아서 씀
    const {state} = useContext(DataContext)

    // -----------Navbar--------------

    //데이터
    const [login, setLogin] = useState(true);
    const data = useContext(DataContext);
    // 네비게이터
    const navigate = useNavigate();

    // 컴포넌트가 마운트 되자마자 로그인정보 확인
    useEffect(()=>{
        setLogin(data.state.user ? true : false )
    }, [data.state.user]) //새로 로그인을 했을때 화면이 바뀌게 설정

    // Logout을 위한 이벤트 함수
    const logOut = () => {
        setLogin(false) // 컴포넌트를 바꾸주기 위해 수정
        // userd의 값을 null로 바꿔줌
        data.action.setUser("");
        // 다른곳에서 로그아웃을해도 항상 홈으로 돌아감
        navigate("/");
    }

    // 특정위치로 스크롤 이동
    const main = useRef(null);
    const blog = useRef(null);
    const contact = useRef(null);
    const map = useRef(null);

    const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
    });
    };


    return (  
        <div>

            {/* 네브바 */}        
            <div className="hero">
            </div>
            <Navbar bg="#13131300" variant="dark" style={{background: "linear-gradient( to top, #00000000, #0e0e0e )",height:"100px"}}>
                <Container style={{marginTop:"12px", }}>
                <NavLink to="/" className="nav-link" style={{marginRight:"50px",marginBottom:"30px"}}>
                    <img src="https://www.bmw.co.kr/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg"  />
                </NavLink>
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link ">
                    <div ref={main} >
                    <p onClick={() => scrollToSection(main)} className="link">소개</p>
                    </div>
                    </NavLink>
                    <NavLink to="/" className="nav-link">
                    <div ref={blog}>
                    <p onClick={() => scrollToSection(blog)} className="link">차량 성능</p>
                    </div>
                    </NavLink>
                    <NavLink to="/" className="nav-link">
                    <div ref={contact}>
                    <p onClick={() => scrollToSection(contact)} className="link">커뮤니티</p>
                    </div>
                    </NavLink>
                    <NavLink to="/" className="nav-link">
                    <div ref={map} className="contact">
                    <p onClick={() => scrollToSection(map)} className="link">오시는 길</p>
                    </div>
                    </NavLink>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    {login ? (
                    <Nav style={{marginBottom:"30px"}}>
                        {/**로그인이 되었을때 출력될 컴포넌트 */}
                        <div style={{backgroundImage:`url(${data.state.user.profile})`,backgroundSize:'cover', 
                        border:"1px solid white", width:"50px", height:"50px",
                        borderRadius:"100%", backgroundRepeat:"no-repeat"}}>
                        </div>
                        <div className="nav-link1" to="/mypage" style={{margin:"5px", marginLeft:"8px"}}>
                        {data.state.user.name} 님
                        </div>
                        <NavLink className="nav-link" to="/mypage" style={{margin:"5px", marginLeft:"8px"}}>
                        마이페이지
                        </NavLink>
                        <Button variant="outline-light" onClick={ logOut }>Logout</Button>{" "}
                    </Nav>
                    ) : (
                    <div>
                        {/** 로그인이 되지 않았을때 출력될 컴포넌트 */}
                        <Button variant="outline-light" onClick={()=>{navigate('/loginform')}} style={{border:"1px solid white", width:"70px", height:"50px", marginBottom:"30px"}}>Login</Button>{" "}
                    </div>
                    )}
                </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* 네브바 */}

            <Slider {...settings1}  style={{marginTop:"-16px"}}>
            <div>
            <div className="top-grd"></div>
                <MainCardComp />
            </div>
            <div>
            <div className="top-grd"></div>
                <MainCardComp2 />
            </div>
            <div>
            <div className="top-grd"></div>
                <MainCardComp3 />
            </div>
        </Slider>
        <div className="Main-Card">
        <h2 className="Main-Card-title services" ref={main}>Our Models</h2>
        <p className="Main-Card-Subtitle">역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 BMW 브랜드의 라인업을 살펴보세요.</p>
        </div>
            <Container>
                <Row >
                    <Col className="px-5">
                        <Slider {...settings}>
                            {state.productList.map((product)=>(
                                <div>
                                    <ProductCard key ={product.productId} product={product} />
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
            <Parallax />
            
            <h1 className="fade-title" ref={blog}>BMW XM 주행 성능.</h1>
            <div className="grids">
                <div data-aos="fade-up" className="fade-image">
                <div className="fade-img1">
                <img src={require('../img/fadeimg.jpg')} alt="" />
                </div>

                <div className="fade-text">
                    <p data-aos="fade-left">BMW XM 하이라이트.</p>
                </div>
                <div className="fade-text2">
                    <p data-aos="fade-left">BMW M1 이후 선보이는 M 전용 모델</p>
                </div>
                

                </div>

                <div data-aos="fade-right" className="boxes1">
                <img  className="fade-img2" src={require('../img/fadeimg2.jpg')} alt="" />
                <h2 data-aos="fade-right" className="fade-img2-tag">M 하이브리드 드라이브 시스템.</h2>
                <p data-aos="fade-right" className="fade-img2-tag2">전기 모터와 강력한 V8 엔진 간 상호 작용으로 버튼 터치로<br></br><br></br>
                순수 전기 구동과 하이브리드 모드를 전환할 수 있습니다.<br></br><br></br>
                동시에 지능형 주행 모드로 운전 환경을 최적화합니다.</p>
                </div>

                <div data-aos="fade-right" className="boxes2" >
                <img className="fade-img3" src={require('../img/fadeimg3.jpg')} alt="" />
                <h2 data-aos="fade-right" className="fade-img3-tag"> 80KM* 순수 전기 주행. </h2>
                <p data-aos="fade-right" className="fade-img3-tag2">650마력*의 효율적인 BMW eDrive 시스템은 80KM* 순수 전기<br></br><br></br>
                주행이 가능하여 조용하면서 환경친화적인 주행 경험을 선사합니다.</p>
                </div>

                <div data-aos="fade-right" className="boxes3">
                <img className="fade-img4" src={require('../img/fadeimg4.jpg')} alt="" />
                <h2 data-aos="fade-right" className="fade-img4-tag">BMW 커브드 디스플레이.</h2>
                <p data-aos="fade-right" className="fade-img4-tag2">12.3인치 디스플레이와 터치식 14.9인치 디스플레이가 결합된<br></br><br></br>
                BMW 커브드 디스플레이는 차량에 대한 정보를 더욱 분명하고 선명하게 보여줍니다. </p> 
                </div>
                <div className="insta-Box">
                    <p ref={contact}>Instagram</p>
                    <p className="insta-p">Experience BMW</p>
                    <div className="insta-Card">
                        <a href="https://www.instagram.com/p/Cj2c7-ZP8Ih/?utm_source=ig_web_copy_link">
                            <img src={require('../img/insta.jpg')} className="insta-img" />
                        </a>
                    </div>
                    <div className="insta-Card2">
                        <a href="https://www.instagram.com/p/Cb7Mf66vC37/?utm_source=ig_web_copy_link">
                            <img src={require('../img/insta2.jpg')} className="insta-img" />
                            <p>instagram</p>
                        </a>
                    </div>
                    <div className="insta-Card3">
                        <a href="https://www.instagram.com/p/CaTXkShvzRt/?utm_source=ig_web_copy_link">
                            <img src={require('../img/insta3.jpg')} className="insta-img" />
                        </a>
                    </div>
                </div>

                <p className="map-Title" ref={map}>오시는길</p>
                    <Map />
                    <ScrollToTop />
            </div>
            
                                
            <footer className="footer">
                <img src="https://www.bmw.co.kr/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg" alt="" />
                <p>© Copyright 2022 BMW Motor Company.</p>
                <p>All Rights Reserved.</p>
                <a href="https://ko-kr.facebook.com/BMWKorea/"><FontAwesomeIcon icon={faFacebook} className="footer-img"/></a>
                <a href="https://www.instagram.com/bmw_korea/"><FontAwesomeIcon icon={faInstagram} className="footer-img"/></a>
                <a href="https://www.youtube.com/c/bmwkorea"><FontAwesomeIcon icon={faYoutube} className="footer-img"/></a>
            </footer>
            
            </div>
    );
}

export default Home;

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronRight} 
        className={className} 
        onClick={onClick}
        style={{color:"white"}}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon icon={faChevronLeft} 
        className={className} 
        onClick={onClick}
        style={{color:"white"}}
        />
    );
  }