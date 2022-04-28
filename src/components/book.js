import './book.css'

function Book(props){
   const { book } = props;

    return (
      <section className="BookWrapper">
        <div className='imgPart'>
          <img src={ book.imageLink } alt={ book.title } />
        </div>
        <div className='bookInfo'>
          <div className='mainText'>
            <h4>{book.title}</h4>
            <h6>{book.author}</h6>
            <p>{book.description}</p>
          </div>
          <section className="RatingAndPrice">
            <p>{book.rating}★</p>
            <p>{book.price} Sek</p>
          </section>
        </div>
      </section>

    )
}

export default Book;
