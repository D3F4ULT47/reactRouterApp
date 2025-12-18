import React, { useEffect, useState } from 'react'
import { Link ,useParams} from 'react-router-dom'
import "../server"
function vanDetail() {
const [detailVan,setDetailVan] = useState(null)
const params =useParams()
useEffect(()=>{
  fetch(`/api/vans/${params.id}`)
  .then(res => res.json())
  .then(data => setDetailVan(data.vans))
  
},[params.id])


  return (
    <div className="van-detail-container">
            {detailVan ? (
                <div className="van-detail">
                    <img alt={detailVan.name} src={detailVan.imageUrl} />
                    <i className={`van-type ${detailVan.type} selected`}>
                        {detailVan.type}
                    </i>
                    <h2>{detailVan.name}</h2>
                    <p className="van-price"><span>${detailVan.price}</span>/day</p>
                    <p>{detailVan.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
  )
}

export default vanDetail
