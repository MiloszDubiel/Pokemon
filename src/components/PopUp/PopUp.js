import React from "react";
import './style.css'
import { connect } from "react-redux";
const PopUp = ({ info }) => {


    return(
        <div className="popup-background hidden" >
            <div className="card h-100 shadow-sm position-relative"> 
               <input type="button" className="form-control" value="X" onClick={()=>{
                document.querySelector('.popup-background').classList.toggle('hidden')
               }}/>
               <div className="info">
                    <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Details</h1>
                    <div className="info-div">
                    <table className="table">
                        
                        <tbody>
                            <tr>
                                <td><b>Name: </b></td>
                                <td>{info.name}</td>
                            </tr>
                            <tr>
                                <td><b>Experience:</b></td>
                                <td>{info.exp}</td>
                            </tr>
                            <tr>
                                <td><b>Weight:</b></td>
                                <td>{info.weight}</td>
                            </tr>
                            <tr>
                                <td><b>Height:</b></td>
                                <td>{info.height}</td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{textAlign: 'center'}}><b>Picture</b></td>
                            </tr>
                            <tr>
                                <td colSpan={2} style={{textAlign: 'center'}}><img src={info.img} style={{height: '150px', position: 'relative', top: '-20px'}}/></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                        <div className="picture">
                    </div>
               </div>
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    info: state.pokemonInfo
})
export default connect(mapStateToProps)(PopUp)