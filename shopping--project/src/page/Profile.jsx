import { useContext } from "react";
import { Container, Row,Col } from "react-bootstrap";
import DataContext from "../context/DataContext";
import ProfileUpdateModal from "../components/ProfileUpdateModal"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'

const Profile = ({onRemove}) => {
    const {state} = useContext(DataContext);
    return (  
        <div>
            <Container>
                <Row style={{color:"white",height:"100vh"}}>
                    <Col s>
                    {/* 프로필 사진과 사진을 수정할 모델창 */}
                    {state.user.profile ? <div style={{width:"350px",height:"200px",
                backgroundImage:`url(${state.user.profile})`, backgroundSize:"cover", backgroundPosition:"center",
                margin:"20px auto",  border:"1px solid white"}}></div> : 
                <div style={{width:"350px", height:"200px", border:"1px solid white",margin:"20px auto"}}></div>}
                    <ProfileUpdateModal />
                    </Col>
                    <Col>
                    <h2>내정보</h2>
                    <p>이름 : {state.user.name}</p>
                    <p>생년월일 : {state.user.birthday}</p>
                    <p>비밀번호 : <button style={{backgroundColor:"#131313", color:"white", border:"1px solid white"}}>
                        수정
                        </button>
                    </p>
                    <p></p>
                    </Col>
                    <div>
                    {/* 이름과 찜목록을 출력 */}
                    <hr></hr>
                    <h2 className="like-title">찜 목록</h2>
                    <ul className="like-list">
                    {
                        state.user.likelist.map((like)=>(<li className="like-name" >
                            <div className="product-list">
                                {like.productName}
                                <img src={require(`../img/${like.productPicture[0]}`)}></img>
                                {like.productMoney}
                            </div>
                            
                        </li>))
                    }
                    
                    </ul>
                    <footer className="footer">
                        <img src="https://www.bmw.co.kr/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg" alt="" />
                        <p>© Copyright 2022 BMW Motor Company.</p>
                        <p>All Rights Reserved.</p>
                        <a href="https://ko-kr.facebook.com/BMWKorea/"><FontAwesomeIcon icon={faFacebook} className="footer-img"/></a>
                        <a href="https://www.instagram.com/bmw_korea/"><FontAwesomeIcon icon={faInstagram} className="footer-img"/></a>
                        <a href="https://www.youtube.com/c/bmwkorea"><FontAwesomeIcon icon={faYoutube} className="footer-img"/></a>
                    </footer>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;