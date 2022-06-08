import React, { Component } from 'react';
import Score from './Score'

class Student extends Component {
    render() {
        const scoresComponents = this.props.scores.map((score, index) => {
            return(
                <>
                    <Score 
                        date={score.date}
                        score={score.score}
                    />
                </>
            )
        })
        return(
            <>
                <h1>{this.props.name}</h1>
                <p>{this.props.bio}</p>
                {scoresComponents}
            </>
        )
    }
}

export default Student