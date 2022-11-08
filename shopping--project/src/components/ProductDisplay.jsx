import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ProductDisplay = (props) => {
  const {product} = props;
  const [index, setIndex] = useState(0)
  return (
    <Container>
      <Row>
        {/* <Col> */}
          <div className="card1">
            <div className="lines"></div>
            <div className="imgBx">
              <img src={require(`../img/${product.productPicture[index]}`)} className="card1-name" />
            </div>      
            <div className="content1">
              <div className="details">
                  <h2>{product.productName}</h2>
                  <div className="data">
                  <p>엔진 : {product.productEngin}</p>
                  <p>가격 : {product.productMoney}</p>
                  <p>연비 : {product.productElc}</p>
                  <p>최대출력 : {product.productKm}</p>
                  </div>
                </div>  
            </div>     
          </div>
        {/* </Col> */}
        {/* <Col> */}
          <div style={{marginTop: "100px"}}>
            <p className="color-Name">{product.productDetail}</p>
            <p className="color-Name">색상 설명</p>
            <div>
              {
                // productColor에 있는 color 값을 백그라운드로 사용
                product.productColor.map((color, i)=>(
                  <div className="m-2" style={{ display:"inline-block", 
                                width: "30px", height:"30px", 
                                backgroundColor: color,
                                border : "1px solid white", borderRadius:"100%"
                              }}
                    onMouseEnter={()=>{setIndex(i)}}
                    ></div>
                )) 
              }
            </div>
            <div className="d-grid gap-2">
              <Button variant="outline-light" size="lg" style={{border:"1px solid white"}}>
                구매
              </Button>
              <Button variant="outline-light" size="lg" >
                장바구니
              </Button><Button variant="outline-light" size="lg">
                찜
              </Button>
            </div>
          </div>
        {/* </Col> */}
      </Row>
    </Container>
  );
};

export default ProductDisplay;
