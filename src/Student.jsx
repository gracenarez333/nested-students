import Score from './Score'

const Student = (props) => {
    const { name, bio, scores } = props
    const scoresComponents = scores.map((sco, index) => {
        const { score, date } = sco
        return (
            <>
                <Score
                    date={date}
                    score={score}
                />
            </>
        )
    })
    return (
        <>
            <h1>{name}</h1>
            <p>{bio}</p>
            {scoresComponents}
        </>
    )
}

export default Student