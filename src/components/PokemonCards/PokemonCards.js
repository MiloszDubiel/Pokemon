import React from "react";
import { connect } from "react-redux";
import { pokemonInfo } from "../../actions/pokemonInfo.action";

const PokemonCard = ({name, img, exp, addInfo}) => {

    return(
    <>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={img} className="card-img-top" alt={`${name} image`} />
                <div className="card-body text-center">
                    <h5 className="card-title"><b>Name: </b>{name}</h5>
                    <p className="card-text"><b>Experience: </b> {exp}
                    </p>
                    <input type="button" className="form-control"value="Show details" onClick={ ()=> {
                        document.querySelector('.popup-background').classList.toggle('hidden')
                        addInfo(name, exp) 
                    }}
                    />
                </div>
            </div>
        </div>
    
    </>)}

const mapDispachToProps = dispach =>({
    addInfo: (name, exp) => dispach(pokemonInfo(name, exp))
})
export default connect(null, mapDispachToProps )(PokemonCard)