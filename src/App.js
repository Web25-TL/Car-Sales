import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from './actions/addFeature';
import { removeFeat } from './actions/removeFeat';


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  console.log(props)
 
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.remove(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.add(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeItem={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures addItem={buyItem} />
        <Total  />
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return{
    state
  };
}
const mapDispatchToProps = {
  add: addFeature,
  remove: removeFeat
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
