
export default function Footer () {
    var today = new Date();
    return (
        <div className="footer">
            <div className="row px-3 py-3 justify-content-center mb-0"
            style={{
                backgroundColor: "#7DF9FF",
            }}>
            <div className="col-md-6"> 
                <div className="row justify-content-center py-3">
                <div className="col-md-4 mb-3"> 
                    <img src="" alt="image" style={{
                        width:"100px"
                    }}/>    
                </div> 
                <div className="col-md-4">
                
                            <p>About Us</p>
                            <br/>
                            <p>Contact us</p>
                            <br/>
                            <p>Donate</p>
                            <br/>
                </div>
                </div>
                </div> 
                <div className="col-md-6">
                    <div className="row justify-content-center"
                    >
                        <div className="col-md-4">
                            <p>We are available for you:</p>
                            <p>Monday – Friday: 8am to 5pm</p>
                            <p>Saturday, Sundays & Public Holidays: No</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Jirani Fund</h4>
                            <p>Phone Number</p>
                            <p>Email address</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
            <div className="row justify-content-center mb-0 py-3"
            style={{
                backgroundColor:"black",
                color:"white"
            }}>
          <div className="col">
            <p>Copyright <i class="bi bi-c-circle"></i> {today.getFullYear()}  
            Jirani Fund</p>
          </div>
        </div>
            </div>
        </div>
    )
}