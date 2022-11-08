import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import DataContext from "../context/DataContext";
import { useEffect } from "react";

import ScrollToTop from "./ScrollToTop"

function NavbarComp() {
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




  return (
    <>
      <Navbar className="Navbar" bg="#13131300" variant="dark" style={{background: "linear-gradient( to top, #13131300, #0e0e0e )", marginTop:"-6px"}}>
        <Container>
          <NavLink to="/" className="nav-link" style={{marginRight:"50px",marginTop:"2px"}}>
            <img src="https://www.bmw.co.kr/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg"  />
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link ">
              <p style={{paddingTop:"18px"}}>메인화면</p>
            </NavLink>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            {login ? (
              <Nav >
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
                <Button variant="outline-light" onClick={()=>{navigate('/loginform')}} style={{border:"1px solid white", width:"70px", height:"50px"}}>Login</Button>{" "}
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
