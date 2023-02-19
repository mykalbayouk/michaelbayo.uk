import { Linkedin, Github, FileEarmarkPerson} from "react-bootstrap-icons"
import resume from '../assets/documents/resumeMichael.pdf'

export const SocialBar = () => {
    return (        
        <div className="social-media">
            <ul>
                <div className="social-div">
                    <a href = "https://www.linkedin.com/in/michaelbayouk/" target = "_blank" className = "fab fa-linkedin"><Linkedin className = "icons" /></a>
                    <br />
                    <a href = "https://github.com/mykalbayouk" target = "_blank" className = "fab fa-github"><Github className = "icons"/></a>
                    <br />
                    <a href = {resume} target = "_blank" className = "resume"><FileEarmarkPerson className = "icons"/></a>
                </div>
            </ul>
        </div>
         
    )
            
}
