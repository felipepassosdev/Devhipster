import React, { Component } from 'react'
import img1 from '../imagens/slide1.jpg'
// import img2 from '../imagens/slide2.jpg'
import img3 from '../imagens/slide3.jpg'

class Carousel extends Component {
    render() {
        return (
            <>
                <div id="carouselExampleControls" className="carousel slide margin-bottom" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={img1} className="img-fluid" alt="Primeiro Slide" />
                        </div>
                        {/* <div className="carousel-item">
                            <img className="d-block w-100" src={img2} className="img-fluid" alt="Segundo Slide" />
                        </div> */}
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img3} className="img-fluid" alt="Segundo Slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Anterior</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Próximo</span>
                    </a>
                </div>
            </>
        )
    }
}

export default Carousel