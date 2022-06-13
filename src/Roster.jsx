import Student from './Student'

const Roster = (props) => {
    const studentsComponents = props.students.map((student, index) => {
        const { scores: { score, date }, name, bio, scores } = student
        return (
            <Student
                scores={scores}
                key={`Student-${index}`}
                name={name}
                bio={bio}
                date={date}
                score={score}
            />
        )
    })
    return (
        <>
            {studentsComponents}
        </>
    )
}

export default Roster