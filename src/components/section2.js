
export default function SectionTwo () {

    return (
        <div className="section-two">
            <div className="section-two-container">
                <div className="row  mb-5">
                    <div className="col-md-12">
                    <h1 style={{
                        color:"white",
                        fontWeight:"bold",
                        fontSize:"50px"
                    }}>What We Do</h1>
                    </div>
                   
                </div>
                        <div className="row my-3 px-4 py-3">
                            <div className="col-md-4 mb-3 ">
                                <img src="./images/section2.jpg" className="img-fluid custom-img"/>
                            </div>
                            <div className="col-md-4 mb-3 ">
                                <img src="./images/section21.jpg" className="img-fluid custom-img"/>
                            </div>
                            <div className="col-md-4 mb-3 ">
                                <img src="./images/section23.jpg" className="img-fluid custom-img"/>
                            </div>
                        </div>

                        <div className="row my-3 px-4 g-5 py-3">
                            <div className="col-md-6">
                                <img src="./images/section24.jpg" className="img-fluid custom-img"/>
                            </div>
                            <div className="col-md-6">
                                <img src="./images/section25.jpg" className="img-fluid custom-img"/>
                            </div>
                        </div>
            </div>
        </div>
    )
}