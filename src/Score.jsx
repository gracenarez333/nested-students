

const Score = (props) => {
    const { date, score } = props
    return (
        <>
            <p>Date: {date}</p>
            <p>Score: {score}</p>
        </>
    )
}

export default Score