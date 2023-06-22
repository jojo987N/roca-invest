import "./header.css";
import { useState } from "react";
export default function Header () {
    const [isMobile, setIsMobile] = useState(false);
     
        window.onresize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true)
            } 
            
        }

    return isMobile?(<div className="message">Mobile version comming soon !</div>):
        <div className="container">
            <div className="block-1 coolvetica">
                <span className="logo">roca<span className="logo-1">inv</span>.</span>
            </div>
            {/* <div className="block-2"></div> */}
            <div className="container-1">
                <ul className="menu">
                    <li>ABOUT US</li>
                    <li>DEVELOPMENTS</li>
                    <li>INVESTOR RELATIONS</li>
                    <li>CONTACT</li>
                    <i class="fa fa-search" aria-hidden="true"></i>
                </ul>
                <button type="button" className="button1">VIEW OUR DEVELOPMENTS <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
            <div className="brand">
                <ul>
                    <li><span>Welcome to</span></li>
                </ul>
                <h1>ROCA INVESTMENTS</h1>
                <p>It is a long established fact that reader type specimen </p>
                <p>distracted by the readable content of Lorem Ipsum. </p>
                <p>looking at its layout. The point using years old </p>
                <button type="button" className="button">ABOUT US <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                    
            </div>
        </div>
    
}