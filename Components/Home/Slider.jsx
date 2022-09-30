import { Carousel } from "react-bootstrap"
import Image from 'next/image'

const Slider = () => {

    const slides = [
        {
            src: "https://cdn.dribbble.com/users/1726280/screenshots/10556530/media/25d1ee1b90a28ecbea01ad74f36ca4fd.jpg",
            caption_title: "First slide label",
            caption_para: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            src: "https://wallpapercave.com/wp/wp5271847.jpg",
            caption_title: "First slide label",
            caption_para: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            src: "https://wallpapercave.com/wp/wp1920621.jpg",
            caption_title: "First slide label",
            caption_para: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        }
    ]

    return (
        <div>
            <Carousel>
                {slides.map((item, index) => {
                    const { src, caption_title, caption_para } = item
                    return (
                        <Carousel.Item key={index}>
                            <Image loader={() => src} src={src} layout="responsive" width={300} height={150} />
                            {/* <Carousel.Caption>
                                <h3 className="h3">{caption_title}</h3>
                                <p className="p">{caption_para}</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    )

                })}
            </Carousel>
        </div>
    )
}
export default Slider