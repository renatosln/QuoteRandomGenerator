
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote, getNewValues, backgroundObject, colorObject}) => {
    return (
        <article className='quoteBox'>
            <section className="quoteBox-header">
                <i className='bx bxs-quote-alt-left' style = {colorObject}></i>
                <p style = {colorObject} >{quote.quote}</p>
            </section>
            
            <section className='quoteBox-footer'>
                <section class ="quote-author">
                    <h4  style = {colorObject} >{quote.author}</h4>
                </section>
                
                <QuoteButton getNewValues = {getNewValues} backgroundObject = {backgroundObject}/>
            </section>
        </article>
    )
}

export default QuoteBox