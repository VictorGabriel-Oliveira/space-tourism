import { Header } from '../../components/Header/Header'
import { ThechnologyNavBar } from '../../components/TechnologyNavBar'
import './index.scss'
import vehicleImage from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import SpacePortImage from '../../assets/technology/image-spaceport-landscape.jpg'
import CapsuleImage from '../../assets/technology/image-space-capsule-landscape.jpg'
import { getCurrentPage } from '../../hook/getCurrentPage'
import { objectType } from '../../types/objectType'
export const Technology = () =>{
    const spacelaunch : objectType[] = [
        {
            title:'LAUNCH VEHICLE',
            img:vehicleImage,
            description:`A launch vehicle or carrier rocket is a
            rocket-propelled vehicle used to carry a payload
            from Earth's surface to space, usually to Earth 
            orbit or beyond. Our WEB-X carrier rocket is the
            most powerful in operation. Standing 150 metres
            tall, it's quite an awe-inspiring sight on the launch
            `
        },
        {
            title:'SPACE PORT',
            img:SpacePortImage,
            description:`A spaceport or cosmodrome is a site for launching
             (or receiving) spacecraft, by analogy to the 
             seaport for ships or airport for aircraft. Based in 
             the famous Cape Canaveral, our spaceport is 
             ideally situated to take advantage of the Earth’s 
             rotation for launch.`
        },
        {
           title:'SPACE CAPSULE',
           img:CapsuleImage,
           description:`A space capsule is an often-crewed spacecraft 
           that uses a blunt-body reentry capsule to reenter 
           the Earth's atmosphere without wings. Our 
           capsule is where you'll spend your time during the 
           flight. It includes a space gym, cinema, and plenty 
           of other activities to keep you entertained.`
        }
    ]

    const currentPageInfo = getCurrentPage(spacelaunch)
    return (
        <div className="Thechnology">
            <Header/>
            <div className='space_lauch'>
                <strong>03</strong>
                <p>space launch 101 </p>
            </div>
            <div className="image_conteiner">
                <img src={currentPageInfo?.img} alt="" />
            </div>
            <ThechnologyNavBar/>
            <div className="tecnology_content">
                <p>the terminology...</p>
                <h3>
                    {currentPageInfo?.title}
                </h3>
                <strong>
                {currentPageInfo?.description}
                </strong>
            </div>
            


        </div>
    )
}