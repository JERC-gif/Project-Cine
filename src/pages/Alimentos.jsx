import FoodCard from "../components/FoodCard"

function Alimentos() {
  return (
    <div className="container">
      <h2>Alimentos</h2>

      <section className="food-section">
        <h3 className="food-category">Bebidas</h3>
        <div className="grid">
          <FoodCard
            name="Refresco Grande"
            price="$80"
            image="https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=600"
          />
          <FoodCard
            name="Agua Natural"
            price="$45"
            image="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600"
          />
        </div>
      </section>

      <section className="food-section">
        <h3 className="food-category">Comestibles</h3>
        <div className="grid">
          <FoodCard
            name="Nachos con queso"
            price="$95"
            image="https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600"
          />
          <FoodCard
            name="Hot Dog"
            price="$75"
            image="https://images.unsplash.com/photo-1612392062422-ef19b42f74df?auto=format&fit=crop&w=600"
          />
        </div>
      </section>

      <section className="food-section">
        <h3 className="food-category">Snacks y dulces</h3>
        <div className="grid">
          <FoodCard
            name="Palomitas Jumbo"
            price="$120"
            image="https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600"
          />
          <FoodCard
            name="Dulces surtidos"
            price="$65"
            image="https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600"
          />
        </div>
      </section>
    </div>
  )
}

export default Alimentos
