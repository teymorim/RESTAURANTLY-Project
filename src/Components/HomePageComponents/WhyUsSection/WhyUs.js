import './WhyUs.css'
function WhyUs({title , number , description}){
    return(
        <>
        <div className="WhyUsContainer">
            <h2 className='mainColor number'>{number}</h2>
            <h2 className='text-light'>{title}</h2>
            <p className='text-light'>{description}</p>
        </div>
        </>
    )
}
export default WhyUs ;