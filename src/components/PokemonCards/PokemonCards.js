import React from "react";
import { connect } from "react-redux";
import { pokemonInfo } from "../../actions/pokemonInfo.action";

const PokemonCard = ({name, img, exp, weight, height, addInfo}) => {

    return(
    <>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={img} className="card-img-top" alt={`${name} image`} />
                <div className="card-body text-center">
                    <h5 className="card-title"><b>Name: </b>{name}</h5>
                </div>
                <input type="button" className="form-control" style={{borderRadius: '5px 5px 4px 4px', borderBottom: 'none', borderLeft: 'none', borderRight: 'none'}} 
                       value="Show details" 
                       onClick={ ()=> {
                        document.querySelector('.popup-background').classList.toggle('hidden')
                        addInfo(name, exp, height, weight, img) 
                    }}
                    />
            </div>
        </div>
    
    </>)}

const mapDispachToProps = dispach =>({
    addInfo: (name, exp, height, weight, img) => dispach(pokemonInfo(name, exp, height, weight, img))
})
export default connect(null, mapDispachToProps )(PokemonCard)