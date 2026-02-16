function FoodCard({ name, price, image }) {
  return (
    <div className="food-card">
      <img src={image} alt={name} />
      <div className="food-content">
        <h4>{name}</h4>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default FoodCard
