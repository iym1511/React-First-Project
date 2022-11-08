// css 파일 import
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 공용으로 쓸 데이터컨텍스트 Provider 추가
import { DataProvider } from "./context/DataContext";

// 라이브러리 컴포넌트 import
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import Login from "./page/Login";
import ProductDetaile from "./page/ProductDetail";
import Profile from "./page/Profile";
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui"
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes >
            <Route index element={<Home />}></Route>
            <Route path="/" element={<Layout />}>
              <Route exact={true} path="loginform" element={<Login />}></Route> 
              <Route exact={true} path="product/:id" element={<ProductDetaile />}></Route>
              <Route exact={true} path="mypage" element={<Profile/>}></Route>
            </Route>
        </Routes>
      </DataProvider>
    </div>
    
  );
}

export default App;
