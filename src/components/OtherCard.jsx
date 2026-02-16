function OtherCard({ title, image }) {
  return (
    <div className="other-card">
      <img src={image} alt={title} />
      <div className="other-content">
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default OtherCard
