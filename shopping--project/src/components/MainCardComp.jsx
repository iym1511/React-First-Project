import Card from 'react-bootstrap/Card';


function MainCardComp(card) {
    const cardInfo = [
        {
            image: "https://www.bmw.co.kr/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-sp-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1651158408008.jpg",
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <> 
            <br/>
            <Card className="bg-dark text-white">
      <Card.Img src={card.image} alt="Card image"/>
      <Card.ImgOverlay>
        <Card.Title className='Card-Title1'>BMW</Card.Title>
        <Card.Text className='Card-Text1'>BMW 3 Series</Card.Text>
        <Card.Text className='Card-Text1-2'>BMW 더뉴 3시리즈 2022년형</Card.Text>
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

export default MainCardComp;