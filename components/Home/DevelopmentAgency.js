import Image from "next/image";
import AgencyLogo from "../../public/images/agency-logo.png"

const DevelopmentAgency =  ({heading, subHeading, text}) => {
    return <div className="agency-container container-fluid">
        <div className="side-container-design"></div>
        <div className="agency-logo-container">
            <Image src={AgencyLogo} alt="agenct-logo-image" className="img" />
        </div>
        <div className="agency-content-container">
            <h6>{subHeading}</h6>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    </div>
}

export default DevelopmentAgency;