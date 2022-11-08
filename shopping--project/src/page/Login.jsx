import { useContext, useRef } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import { useEffect } from "react";
import NavbarComp from "../components/NavbarComp";
import { Outlet } from "react-router-dom";
const User = {
  email: 'test@example.com',
  pw: 'test8361@'
}


const Login = () => {
	const [name, setName] = useState("");
	const {action} = useContext(DataContext)
	const navigate = useNavigate()
  const inputRef = useRef("");

	const loginUser = (e) => {
    e.preventDefault();
		action.setUser({name: name, profile : null, likelist : [] });
		navigate('/');
	}

  // input창에서 값 받을때 사용
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  // 이메일,패스워드 조건이 충족하는지 확인용
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  // useEffect로 한자한자입력할때마다 확인해서 
  // 이메일,패스워드 두개의 조건이 충족하면
  // 버튼을 활성화 시켜주는데 사용
  const [notAllow, setNotAllow] = useState(true);


  // 이메일 조건충족 확인
  const handleEmail = (e) => {
      setEmail(e.target.value);
      // 정규식인데 로그인할떄 특문같이 정해진 조건발동을 수행시켜주는거같다
      const regex =
        /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (regex.test(e.target.value)) {
        setEmailValid(true);
      } else {
        setEmailValid(false);
      }
    };

    // 이메일 조건충족 확인
    const handlePw = (e) => {
      setPw(e.target.value);
      const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
      if (regex.test(e.target.value)) {
        setPwValid(true);
      } else {
        setPwValid(false);
      }
    };




  
  useEffect(()=>{
      // 둘다 모두 true면 버튼활성화를 풀어줌
      if(emailValid && pwValid){
          setNotAllow(false);
          return;
      }else{
          setNotAllow(true);
      }

  },[emailValid, pwValid])

  useEffect(()=>{
    // console.log(inputRef);
    inputRef.current.focus(); // 로그인id 자동포커스
  },[])



  return (
    <Form onSubmit={loginUser}>
    <div className="page" >
      
      <div className="login-border">
    <img src="https://customer.bmwgroup.com/oneid/oneidconfig/assets/brand/bmw/bmw_logo.svg" className="Login-Logo" />
            <div className="titleWrap">
                BMW ID 로그인
                <br />

            </div>

            <div className="contentWrap">
                <div className="inputTitle" >이메일 주소</div>
                <div className="inputWrap">
                    <input className="input" 
                    type="text"
                    placeholder="test@example.com" 
                    value={email}
                    onChange={handleEmail} ref={inputRef}
                    />
                </div>
                <div className="errorMessageWrap">
                    {/* 입력안했을땐 안나오고 이메일의 길이가 0보다 클때 오류문구 출력 */}
                    {   
                        !emailValid && email.length > 0 && (    // 조건이안맞고 이메일이0보다 높을때
                            <div>올바른 이메일을 입력하세요.</div>
                        )
                    }                   
                </div>


                <div className="inputTitle" style={{marginTop:"10px"}}>비밀번호</div>
                <div className="inputWrap">
                    <input className="input" 
                    type="password"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요"
                    value={pw}
                    onChange={handlePw}
                    />
                </div>
                <div className="errorMessageWrap">
                    {
                        !pwValid && pw.length > 0 && ( // 조건이안맞고 패스워드가0보다 높을때
                            <div>영문, 숫자, 특수문자 포함 <br/> 8자 이상 입력해주세요</div>
                        )
                    }                   
                </div>
            </div>
            <div>
                {/* disabled 버튼활성화 체크*/}
                <button type="submit" disabled={notAllow}  className="bottomButton">로그인</button>
            </div>
            </div>
        </div>
        </Form>
  );
};

export default Login;
