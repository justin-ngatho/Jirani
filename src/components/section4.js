
import {Button} from "react-bootstrap"

export default function SectionFour () {

    return (
        <div className="section-four" style={{
            backgroundImage: "url(images/bg4.jpg)",
            backgroundSize: "cover",
            backgroundRepeat:"no-repeat",
            height:"100vh",
            color:"white",
        }}>
            <div className="row align-items-center h-100 px-3">
                <div className="col-md-6 text-center">
                    <h1>Projects</h1>
                    <p>At Jirani Fund, we have activities and projects that focus on combating 
                        Food Insecurity and Climate Change. 
                        You are welcome to participate via volunteerism or donation towards our noble cause.</p>
                     <Button>Learn More</Button>   
                </div>
                <div className="col-md-6">
                    <h1>Programs</h1>
                    <p>Our thematic and focus area is on fighting Food Insecurity and Climate 
                        change in Africa, through regenerative agriculture and adoption of 
                        sustainable agroforestry systems.</p>
                     <Button>Learn More</Button>   
                </div>
            </div>
        </div>
    )
}