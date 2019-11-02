import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  console.log(props)
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.addedPrice}</h4>
    </div>
  );
};
function mapStateToProps(state) {
  return{
    car: state.car,
    addedPrice: state.additionalPrice
  }
}
export default connect(mapStateToProps)(Total);
