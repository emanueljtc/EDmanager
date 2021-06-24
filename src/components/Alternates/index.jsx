import React from 'react'
import { connect } from 'react-redux';
import { Types } from '../../redux/playersDucks';

const Alternates = ({alternates, removeAlternate}) => {
    return (
        <section>
            <h2>Alternates</h2>
            <div className="alternates">
                {
                    alternates.map(player => (
                        <article className="alternate" key={player.id}>
                            <div>
                                <img src={player.photo} alt={player.name} />
                                <button onClick={() => removeAlternate(player)}>X</button>
                            </div>
                            <p>{player.name}</p>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}

const mapStateToProps = ({state}) => ({
  alternates: state.alternates,
});

const mapDispatchToProps = (dispatch) => ({
    removeAlternate(player){
        dispatch({
            type: Types.removeAlternate,
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Alternates)
