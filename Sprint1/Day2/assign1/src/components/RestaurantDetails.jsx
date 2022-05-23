import React from 'react';
import styles from './Restaurant.module.css'

const RestaurantDetails = ({votes,reviews,rating,image,cost,categories,cardPayment,title1}) => {
    // const {vote,review,rating,image,cost,category,cardPayment}=props
  return (
    <div className={styles.container}>
      <div>
        <img src={image} className={styles.pic} alt={title1}></img>
      </div>
      <div className={styles.container2}>
        <h3>{categories}</h3>
        <h4>${cost}</h4>
        <p>Card Payment</p>
        <p>{cardPayment}</p>
      </div>
      <div>
        <h2>{rating}</h2>
        <h4>Reviews: {votes}</h4>
        <h4>votes:{reviews}</h4>
       
      </div>

    </div>
  )
}

export default RestaurantDetails
