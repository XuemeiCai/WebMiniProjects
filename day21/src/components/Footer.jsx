import React from "react";


function Footer(){
    var copyDate=new Date();

    return (
        <footer>
            <p>CopyrightÂ©{copyDate.getFullYear()}</p>
        </footer>
        
    )
}

export default Footer;