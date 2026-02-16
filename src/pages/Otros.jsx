import OtherCard from "../components/OtherCard"

function Otros() {
  return (
    <div className="container">
      <h2>Otros</h2>

      <div className="grid">

        <OtherCard
          title="Promociones 2x1"
          image="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600"
        />

        <OtherCard
          title="Membresía CineClub"
          image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600"
        />

        <OtherCard
          title="Preventas Exclusivas"
          image="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600"
        />

        <OtherCard
          title="Formatos especiales"
          image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600"
        />

      </div>
    </div>
  )
}

export default Otros
