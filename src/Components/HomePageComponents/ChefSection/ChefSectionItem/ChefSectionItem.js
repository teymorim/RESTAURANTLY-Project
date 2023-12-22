import './ChefSectionItem.css'
import { FaFacebookF , FaTwitter ,FaLinkedinIn  } from "react-icons/fa";
function ChefSectionItem({name , image , skill}){
    return(
        <>
        <div className="ChefSectionImg">
            <img src={image} alt="" />
            <div className="ChefSectionDescription text-center">
                <h3 className='text-light'>{name}</h3>
                <p className='text-light opacity-75'>{skill}</p>
                <div className="ChefSectionIcons d-flex align-items-center justify-content-center">
                    <p className='mx-2 text-light'><FaFacebookF /></p>
                    <p className='mx-2 text-light'><FaTwitter /></p>
                    <p className='mx-2 text-light'><FaLinkedinIn /></p>
                </div>
            </div>
        </div>
        </>
    )
}
export default ChefSectionItem;