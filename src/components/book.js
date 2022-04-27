import './book.css'

function Book(props){
   const { book } = props;
   const imgUrls = [
    "https://bookfetishist.files.wordpress.com/2020/12/images-14.jpg",
    "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/7/30/1406719709641/7e11c283-6f2b-4847-83bd-f1de6bf3735d-1360x2040.jpeg?width=700&quality=85&auto=format&fit=max&s=d0904fe58cf158cf1c17417692855aaa",
    "http://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg",
    "https://images.squarespace-cdn.com/content/v1/58faa30ee6f2e151cda11af0/1521488917720-NDWVJEBRQI4ZPO7FFYMH/Graylings+book+cover+art.jpg",
    "https://thebookcoverdesigner.com/wp-content/uploads/2019/05/Book-Cover-11aa.jpg",
    "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/32582/image/Book%20Cover%20Template%20for%20Crime%20Thriller%20Novel%20copy.jpg",
  ]

  const randomImg = imgUrls[Math.floor(Math.random() * imgUrls.length)];

    return (
      <section className="BookWrapper">
        <div className='imgPart'>
          <img src={randomImg} alt={ book.title } />
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
