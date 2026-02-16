import React from 'react'

const SingleDoctor = ({doctor}) => {
    const {id, name, specialty, image, education, experience} = doctor;
    
  return (
    <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
     
    </h2>
    <p>{education}</p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  )
}

export default SingleDoctor