import BgSlider from "../components/BgSlider"
import Header from "../components/Header"
import Steps from "../components/Steps"
import Testimonial from "../components/Testimonial"
import Upload from "../components/Upload"

export const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlider/>
      <Testimonial/>
      <Upload/>
    </div>
  )
}
