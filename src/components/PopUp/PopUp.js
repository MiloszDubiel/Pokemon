import React from "react";
import './style.css'
import { connect } from "react-redux";
const PopUp = ({ info }) => {


    return(
        <div className="popup-background hidden" >
            <div className="card h-100 shadow-sm position-relative"> 
                <p>{info.name} {info.exp}</p>
               <input type="button" className="form-control" onClick={()=>{
                document.querySelector('.popup-background').classList.toggle('hidden')
               }}/>
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    info: state.pokemonInfo
})
export default connect(mapStateToProps)(PopUp)