import '../Styles/Home.css'
import Title from '../Images/WELCOME.png'


export default function Home (){

    return(
        <div >
            
            <div className= 'homeContainer'>
                <img className= 'homeContainer_parole' src= {Title} alt="title"></img>
                <input className= 'fill' type='text' placeholder='Type your username'></input>
                <p>Select your favorite color</p>
                <div className= 'squres'>
                    <div className= 'Square first'></div>
                    <div className= 'Square second'></div>
                    <div className= 'Square third'></div>
                    <div className= 'Square fourth'></div>
                    <div className= 'Square fith'></div>
                    <div className= 'Square sixth'></div>
                </div>
                <input type="button" value='Continue'></input>
                <p>© 2020 Devs_United - <span>BETA</span></p>
            </div>
        </div>
    );
}