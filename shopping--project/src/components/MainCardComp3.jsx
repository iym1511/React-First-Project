import Card from 'react-bootstrap/Card';


function MainCardComp3(card) {
    const cardInfo = [
        {
            image: "https://www.bmw.co.kr/content/dam/bmw/marketKR/bmw_co_kr/models/bmw-i/i4/desk-220408_i4_KV_clean_low.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1649663954390.jpg",
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <> 
            <br/>
            <Card className="bg-dark text-white">
      <Card.Img src={card.image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='Card-Title3'>BMW</Card.Title>
        <Card.Text className='Card-Text3'>THE i4</Card.Text>
        <Card.Text className='Card-Text3-2'>BMW i4 최초의 순수전기 그란 쿠페.</Card.Text>
      </Card.ImgOverlay>
    </Card>
            </>
        );
    };

    return (
        <div>
            {cardInfo.map(renderCard)}
        </div>
    )

}

export default MainCardComp3;