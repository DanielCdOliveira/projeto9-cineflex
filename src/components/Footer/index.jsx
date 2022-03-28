import axios from "axios";


function Footer (props){
    
    

    return(
        <footer>
            <div className="footer-icon">
                <img src={props.img} alt={props.img} />
            </div>
            
            <div className="footer-text">
                <p>{props.title}</p>
                <p>{props.day}  {props.hour}</p>
            </div>
        </footer>
    )
}

export default Footer;