import  { useState , useEffect } from 'react';


function Header(){


    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });


    return (
        
        <div className="row" id="date">    
           <div className="col-md-6 col-sm-12 col-xs-12">
            <p> Time : {date.toLocaleTimeString()}</p>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
            <p> Date : {date.toLocaleDateString()}</p>
            </div>
        </div>
        
    )
}


export default Header;