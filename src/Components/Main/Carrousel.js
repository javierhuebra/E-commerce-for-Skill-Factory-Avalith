import Carousel from 'react-bootstrap/Carousel';
import '../../StyleSheets/Carrousel.css'
import ofertin from '../../Assets/Images/compucita.png'
const Carrousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={ofertin}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={300}>
        <img
          className="d-block w-100"
          src='https://mk0cazaofertassmxlbf.kinstacdn.com/wp-content/uploads/2021/05/Mercado-Hot-230521-10.jpg'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrzwJjEVLYgGo1SCVvaNMUYPAUa0Ma9v8f6aX940ZTVRUbinlVmM2NtwcTXjNoa7e9zFY&usqp=CAU'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;