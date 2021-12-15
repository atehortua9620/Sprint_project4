import log from '../Images/Subtract.png';
import logo_1 from '../Images/Vector_2.svg'
import logo_3 from '../Images/Vector_3.svg'
import logo_4 from '../Images/Rectangle_81.svg'
import logo_5 from '../Images/Rectangle_88.svg'
import text_1 from '../Images/Vector-1.svg';
import text from '../Images/Vector.svg';

import '../Styles/Logo.css'

export default function Logs (){

    return(

        <div className= "logo">
            
        
       <div class="left">
       <div className="logo_int">
          <img className="frame" src={log} alt="logo" ></img>
          <img className="mid1block" src={logo_1} alt="logo"></img>
          <img className="mid2block" src={logo_3} alt="logo"></img>
          <img className="ext1block" src={logo_4} alt="logo"></img>
          <img className="ext2block" src={logo_5} alt="logo"></img>
        </div>
        <div className="paroles">
            <img src={text_1} alt="paroles"></img>
            <img src={text} alt="paroles"></img>
            </div>
      </div>

        </div>
    );
}