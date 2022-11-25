

const QuoteButton = ({getNewValues, backgroundObject}) => {
    return (
        <button class = "quote-button" onClick={getNewValues} style = {backgroundObject}>
            <i className='bx bx-chevron-right'></i>
        </button>
    )
}

export default QuoteButton