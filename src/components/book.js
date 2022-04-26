import './book.css'

function Book(props){
   const { book } = props;
   console.log(book);

    return (
      <section className="BookWrapper">
        <p>{book.author}</p>
        <p>{book.title}</p>
        <p>{book.description}</p>
        <section className="RatingAndPrice">
          <p>{book.rating}★</p>
          <p>{book.price} Sek</p>
        </section>
      </section>

    )
}

export default Book;
