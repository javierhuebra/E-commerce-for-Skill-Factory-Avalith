import { BsGithub } from "react-icons/bs";

import '../../StyleSheets/GitHub.css'
const GitHub = () =>{
    return(
        <div className="card-github-container">
            <div className='card-git'>
                
                <p><span className="icon-git"><BsGithub/></span><span>See my GitHub <span className="colorcin">Profile!</span></span></p>
            </div>
        </div>
    )
}
export default GitHub;