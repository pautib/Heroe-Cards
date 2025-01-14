import {Link} from "react-router-dom";

export const PokemonCard = ({
      id,
      name,
      height,
      weight,
      sprites,
    }) => {

        const pokeFrontImageUrl = sprites.front_default;

        return (
            <div className="col animate__animated animate__fadeIn">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src={ pokeFrontImageUrl } className="card-img" alt={ id } />
                        </div>

                        <div className="col-8">
                            <div className="card-body">
                                <h5 className="card-title">{ name }</h5>
                                <p className="card-text">{ name }</p>
                                <p className="card-text">
                                    <small className="text-muted">{ height } cm</small>
                                    <small className="text-muted">{ weight } Kg</small>
                                </p>

                                <!--<Link to={`/heroe/${ id }`}>Más información</Link> -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}