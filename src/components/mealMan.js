import React, { Component } from 'react';

class MealMan extends Component {
  render() {
    return (
      <div>

	      <div className="container-fluid">
	      	<section>
	        	<div className="row">
		        	<div className="container-fluid">
		        		<div className="menu_header">
							<h1>Meal management</h1>
						</div>
		        	</div>
				</div>

				<div className="row">
					<div className="container-fluid">
						<div class="menu_row">
							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Ugali with Pork</h4>
									<h4>Ksh : <em>80</em></h4>
								</div>

								<div className="row">
									<div className="col-md-12">
										<div className="col-md-6">
											<a href="edit_meal.html">
												<input type="submit" name="Book" value="Edit" className="col-md-12"/>
											</a>
										</div>

										<div className="col-md-6">
											<input type="submit" name="Book" value="Remove" className="col-md-12"/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="add_to_menu col-md-offset-1">
										<input type="submit" name="Book" value="Add to Menu" className="col-md-11"/>
									</div>
								</div>

							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Ugali with Pork</h4>
									<h4>Ksh : <em>80</em></h4>
								</div>

								<div className="row">
									<div className="col-md-12">
										<div className="col-md-6">
											<a href="edit_meal.html">
												<input type="submit" name="Book" value="Edit" className="col-md-12"/>
											</a>
										</div>

										<div className="col-md-6">
											<input type="submit" name="Book" value="Remove" className="col-md-12"/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="add_to_menu col-md-offset-1">
										<input type="submit" name="Book" value="Add to Menu" className="col-md-11"/>
									</div>
								</div>

							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Ugali with Pork</h4>
									<h4>Ksh : <em>80</em></h4>
								</div>

								<div className="row">
									<div className="col-md-12">
										<div className="col-md-6">
											<a href="edit_meal.html">
												<input type="submit" name="Book" value="Edit" className="col-md-12"/>
											</a>
										</div>

										<div className="col-md-6">
											<input type="submit" name="Book" value="Remove" className="col-md-12"/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="add_to_menu col-md-offset-1">
										<input type="submit" name="Book" value="Add to Menu" className="col-md-11"/>
									</div>
								</div>

							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Ugali with Pork</h4>
									<h4>Ksh : <em>80</em></h4>
								</div>

								<div className="row">
									<div className="col-md-12">
										<div className="col-md-6">
											<a href="edit_meal.html">
												<input type="submit" name="Book" value="Edit" className="col-md-12"/>
											</a>
										</div>

										<div className="col-md-6">
											<input type="submit" name="Book" value="Remove" className="col-md-12"/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="add_to_menu col-md-offset-1">
										<input type="submit" name="Book" value="Add to Menu" className="col-md-11"/>
									</div>
								</div>

							</article>

						</div>
					</div>	
				</div>
			</section>
	      </div>

     
      </div>
    );
  }
}

export default MealMan;
