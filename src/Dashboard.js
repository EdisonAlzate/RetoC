
import { useEffect, useState } from "react"
import "./styles/dashboard.css"

export const Dashboard = () => {
   
    const [state, setState] = useState({ data: null, error: false, loading: true ,})
    const url ="https://us-central1-cm-devops-294019.cloudfunctions.net/status"
    
    useEffect(() => {
        /* const intervalId = setInterval(() => { */  
          setState(state => ({ data: state.data, error: false, loading: true }))
          
          fetch(url)
            .then(data => data.json())
          
           .then(newData => setState({ data: newData, error: false, loading: false }))
           .catch(function(error) {
              
              setState({ data: null, error: true, loading: false })
            })
            /* }, 2000)
            
            return () => clearInterval(intervalId); */ 
            
        }, [url, useState])
        
        
        if (state.loading) {
            return(
                <div className="animate__animated animate__bounce loader">
                    please wait 
                </div>                
            )
        }
      
    

    return (
        <>
       
        
        <div >
        
                <img 
                   src="https://userscontent2.emaze.com/images/b628b504-6713-4ef8-a7b8-410257bd9f84/71ea9d526454c264840cba5e6464a4c2.jpg" alt="logoCoordinadora"
                   className="head-logo"
                />
                 <div className="loading">
                
            </div> 

            <div>
            
            
            </div>

            <div>
            
            </div>


            </div>    
            
            <div className="header">
                <div>
                    <p header-span>All systems operational</p>
                </div>
              
                <div className="time-update">
                <p >Refreshed  :</p>
                {state.data&&

                    <div>
                    {
                        state.data.last_updated
                    }
                    </div>
                 } 
                </div>
              
            </div>


            <div className="content-main">
                <div className="uptime">
                    <p>UPTIME Last 30 days</p>
                </div>

                
                    <div className="content-first">
                        <div className="line-one">
                            <div >
                                <p>Sigo App</p>
                            </div>
                            
                            <div>
                                <p>up</p>
                         </div>
                    </div>
                    
                    
                
                    
                   <div >
                   {state.data&&
                       
                    state.data.status.apis.map((dat)=>{
                        return(
                
                      Object.keys(dat).map(key => {
                      let newData = key
                      
                      /* console.log(newData.title)
                      newData.key = key */
                      return dat[key]
                    })
                   
                
                        )
                        } ).map((data)=>{
                        console.log({data})

                            /* //hayar promedio 
                            var suma = 0;

                            for(var x = 0; x < data.length; x++){
                                suma += data[x];
                             }
                            var promedio = suma / data.length;
                             console.log(data)
                             console.log(promedio) */

                             /* var sumatoria = data.reduce(function(acumulador, siguienteValor){
                                return acumulador + siguienteValor;
                              }, 0); */
                              
                                /* let sum = data.reduce((previous, current) => current += previous);
                                let avg = sum / data.length; */
                                    


                        return(
                            <div>{data.map((dat)=>{
                                
                                
                               
                                
                                return(
                                    <div>
                                    
                                    <div className="up-current-status">
                                    {dat.current_status}
                                    </div>
                                    <div>


                                    <div className="container" >
                                    <div className="row "  >
                                    <div className="box ">


                                    
                                    
                                    <div className="box-responsive ">
                                    {
                                        dat.days.map((day)=>{
                                            
                                            if (day<60) {
                                                
                                                return(
                                                
                                                    <div 
                                                     className="box-60 "
                                                     key={day}>
                                                     {day}
                                                    </div>                               
                                                   
                                                   ) 
                                                }else if(day<80) {
                                                    
                                                    return(
                                                
                                                        <div 
                                                         className="box-60-80"
                                                         key={day}>
                                                        {day}
                                                        </div>                               
                                                       
                                                       ) 
                                                }else if (day>=80) {
                                                    
                                                    return(
                                                
                                                        <div 
                                                         className="box-100"
                                                         key={day}>
                                                        {day}
                                                        </div>                               
                                                       
                                                       ) 
                                                
                                                } 
                                            

                                                
                                            })
                                           
                                    }
                                    </div>
                                        </div>
                                        </div>
                                    </div>


                                    </div>
                                    </div>
                                )
                    }   )}</div>
                    )})
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
                       
                    

                 {/* <div >
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
                    </div> */}
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
