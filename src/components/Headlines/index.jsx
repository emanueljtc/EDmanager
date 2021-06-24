import React from 'react'
import { connect } from 'react-redux'
import { Types } from '../../redux/playersDucks';
import field from '../../field.svg';

const Headlines = ({headlines, removeHeadline}) => {
    return (
        <section>
            <h2>Headlines</h2>
            <div className="field">
                {
                    headlines.map(player => (
                        <article className="headline" key={player.id}>
                            <div>
                                <img src={player.photo} alt={player.name} />
                                <button onClick={() => removeHeadline(player)}>X</button>
                            </div>
                            <p>{player.name}</p>
                        </article>
                    ))
                }
                <img src={field} alt="Field" />
            </div>
        </section>
    )
}
const mapStateToProps = ({state}) => ({
  headlines: state.headlines,
});

const mapDispatchToProps = (dispatch) => ({
    removeHeadline(player){
        dispatch({
            type: Types.removeHeadline,
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Headlines)
