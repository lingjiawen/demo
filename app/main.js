//main.js
import React from 'react';
import ReactDom from 'react-dom';
// import Component1 from './components/Component.jsx';
import LoginControl from './components/Greeting.jsx';
import FilterableProductTable from './components/FilterableProductTable.jsx';

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDom.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('content')
);


/***********/
// ReactDom.render(
//     <Component1 />,
//     document.getElementById('content')
// );

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}！
//   </h1>
// );
// ReactDom.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('content')
//   );

//  ReactDom.render(
//   <LoginControl />,
//   document.getElementById('content')
// );


/***********************以函数方式声明******************
******************************************************
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
******************************************************
*****************************************************/

/***********************以类的方式声明******************/


// class Clock extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {date: new Date()}
// 	}

// 	// 组件已经上线
// 	componentDidMount() {
// 		this.timeID = setInterval(
// 			()=>this.tick(), 1000
// 			)
// 	}

// 	componentWillUnmount() {
// 		clearInterval(this.timerID)
// 	}

// 	tick() {
// 	    this.setState({
// 	      date: new Date()
// 	    });
//   	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, world!</h1>
// 		    	<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
// 		    </div>
// 			)
// 	}
// }

// ReactDom.render(
//     <Clock />,
//     document.getElementById('content')
//  );
