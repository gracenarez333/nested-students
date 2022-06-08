import React, { Component } from 'react';
import Student from './Student'

class Roster extends Component {
    render() {
        const studentsComponents = this.props.students.map((student, index) => {
            return(
                <Student 
                    scores={student.scores}
                    key={`Student-${index}`}
                    name={student.name}
                    bio={student.bio}
                    date={student.scores.date}
                    score={student.scores.score}
                />
            )
        })
    return (
        <>
            {studentsComponents}
        </>
    )
    }
}

export default Roster