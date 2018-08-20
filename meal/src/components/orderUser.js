import React, { Component } from 'react';

class OrderUser extends Component {
  render() {
    return (
      <div>
       	<div className="container-fluid">
       		<div className="row">
       			<div className="col-md-5 col-md-offset-3">

       				<table class="table table-hover">
					  <thead>
					    <tr>
					    	<th scope="col">#</th>
					  		<th scope="col">Food</th>
					  		<th scope="col">Price(Ksh)</th>
					  		<th scope="col">Date</th>
					  		<th scope="col">Time</th>
					  		<th scope="col">Quantity</th>
					  		<th scope="col">U.Id</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      	<th scope="row">1</th>
					      	<td>Chapati with Beans</td>
					      	<td>140.00</td>
					    	<td>12/07/2018</td>
					    	<td>11:58</td>
						    <td>1</td> 
						    <td>8</td>
					    </tr>
					    <tr>
					      	<th scope="row">1</th>
					      	<td>Chapati with Beans</td>
					      	<td>140.00</td>
					    	<td>12/07/2018</td>
					    	<td>11:58</td>
						    <td>1</td> 
						    <td>8</td>
					    </tr>
					    <tr>
					      	<th scope="row">1</th>
					      	<td>Chapati with Beans</td>
					      	<td>140.00</td>
					    	<td>12/07/2018</td>
					    	<td>11:58</td>
						    <td>1</td> 
						    <td>8</td>
					    </tr>
					  </tbody>
					</table>

       			</div>
       		</div>
       	</div>
      </div>
    );
  }
}

export default OrderUser;
