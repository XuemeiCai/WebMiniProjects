import React from "react";


function Footer(){
    var copyDate=new Date();

    return (
        <footer>
            <p>Copyright©{copyDate.getFullYear()}</p>
        </footer>
        
    )
}

export default Footer;