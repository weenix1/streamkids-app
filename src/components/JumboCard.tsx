import Header from "./Header"

const JumboCard = () => {

  return (
    <div className="jumbo-card">
      <Header />
      <div className="jumbo-card__content">
        <h1 className="jumbo-card__title">Hello World</h1>
        <p className="jumbo-card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.</p>
        <button className="jumbo-card__button">Learn More</button>
      </div>
    </div>
  )
}

export default JumboCard