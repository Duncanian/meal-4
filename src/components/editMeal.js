import React, { Component } from 'react';
import HeaderAdmin from './headerAdmin';
import Footer from './footer';

class EditMeal extends Component {
  render() {
    return (
      <div>
      <HeaderAdmin />

    	<div className="container-fluid">
	    	<div className="row">
	    		<section>
					<div class="meal_body">
						<div className="row">
							<div class="meal_header">
								<h1>Edit Meal</h1>
							</div>
						</div>

						<div className="row">
							<div className="col-md-4 col-md-offset-4">
								<div class="meal_form">

									<div className="row">
										<div class="form_input">
											<p>Meal Name : </p>
											<input type="text" name="Username" placeholder="Enter Meal Name" />
										</div>
									</div>

									<div className="row">
										<div class="form_input">
											<p>Meal Price : </p>
											<input type="email" name="Price" placeholder="Enter Meal Price" />
										</div>
									</div>

									<div className="row">
										<div class="form_input">
											<input type="submit" name="Add Meal" value="Add Meal" className="col-md-8"/>
										</div>
									</div>

								</div>
							</div>
						</div>
	
					</div>
				</section>
	    	</div>
    	</div>

    	<Footer />
      </div>
    );
  }
}

export default EditMeal;
