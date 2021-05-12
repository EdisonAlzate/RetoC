
import "./styles/dashboard.css"

export const Dashboard = () => {
   
   
   const db=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
      
   
    return (
        <>
        <div >
        
                <img 
                   src="https://userscontent2.emaze.com/images/b628b504-6713-4ef8-a7b8-410257bd9f84/71ea9d526454c264840cba5e6464a4c2.jpg" alt="logoCoordinadora"
                   className="head-logo"
                />
            
            </div>    
            
            <div className="header">
                <div>
                    <p header-span>All systems operational</p>
                </div>
              
                <div>
                    <p>Refreshed 12:11:00 UTC-0400</p>
                </div>
              
            </div>


            <div className="content-main">
                <div className="uptime">
                    <p>UPTIME Last 30 days</p>
                </div>

                
                <div className="content-first">
                    <div className="line-one">
                        <div>
                            <p>Sigo App</p>
                        </div>
                        
                        <div>
                            <p>up</p>
                        </div>
                    </div>

                    <div className="box">
                        {
                            db.map((number)=>{
                                return (

                                  <div className="box">
                                  box
                                  </div>
                                
                                    
                            )}
                                )
                        }
                    
                    </div>

                    <div className="line-three">
                        <div>
                            <p>98%</p>
                        </div>
                        
                        <div>
                            <p>today</p>
                        </div>
                    </div>
                       
                    
                



                <div >
                    <div className="line-one">
                        <div>
                            <p>tracking</p>
                        </div>
                        
                        <div>
                            <p>up</p>
                        </div>
                    </div>

                    <div className="box">
                        {
                            db.map((number)=>{
                                return (

                                  <div className="box">
                                  box
                                  </div>
                                
                                    
                            )}
                                )
                        }
                    
                    </div>

                    <div className="line-three">
                        <div>
                            <p>100%</p>
                        </div>
                        
                        <div>
                            <p>today</p>
                        </div>
                    </div>
                       
                    
                    <div>
                    </div>
                    </div>
                    <p className="overall">OVERALL UPTIME</p>

                    <div className="last-item">
                        <div className="last-data">
                            <p>100%</p>
                            <p>Last 24 hours</p>
                        </div>
                        <div className="last-data">
                            <p>98.93%</p>
                            <p>Last 7 hours</p>
                        </div>
                        <div>
                            <p>98.93%</p>
                            <p>Last 30 hours</p>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
