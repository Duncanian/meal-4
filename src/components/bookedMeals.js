import React, { Component } from 'react';

class BookedMeals extends Component {
  render() {
    return (
      <div>

     	<div className="container-fluid page-fit">
	      	<section>
	        	<div className="row">
		        	<div className="container-fluid">
		        		<div className="menu_header">
							<h1>My meal orders</h1>
							<h3>Today : <em>Monday</em></h3>
						</div>
		        	</div>
				</div>

				<div className="row">
					<div className="container-fluid">
						<div class="menu_row">
							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Black Tea with Mandazi</h4>
									<div className="col-md-offset-1">
										<p>Qty : </p><input type="number" name="Quantity" value="1" min="1" max="5" />
										<p><em>Ksh : </em>50</p>
									</div>
								</div>

								<div className="row">
									<div className="col-md-12">
										<div className="col-md-6">
											<input type="submit" name="Book" value="Edit" className="col-md-12"/>
										</div>

										<div className="col-md-6">
											<input type="submit" name="Book" value="Remove" className="col-md-12"/>
										</div>

									</div>
								</div>

							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Black Tea with Mandazi</h4>
									<div className="col-md-offset-1">
										<p>Qty : </p><input type="number" name="Quantity" value="1" min="1" max="5" />
										<p><em>Ksh : </em>50</p>
									</div>
								</div>

								<div className="row">
									<div className="col-md-12">
										<div className="col-md-6">
											<input type="submit" name="Book" value="Edit" className="col-md-12"/>
										</div>

										<div className="col-md-6">
											<input type="submit" name="Book" value="Remove" className="col-md-12"/>
										</div>

									</div>
								</div>

							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Black Tea with Mandazi</h4>
									<div className="col-md-offset-1">
										<p>Qty : </p><input type="number" name="Quantity" value="1" min="1" max="5" />
										<p><em>Ksh : </em>50</p>
									</div>
								</div>

								<div className="row">
									<div className="col-md-12">
										<div className="col-md-6">
											<input type="submit" name="Book" value="Edit" className="col-md-12"/>
										</div>

										<div className="col-md-6">
											<input type="submit" name="Book" value="Remove" className="col-md-12"/>
										</div>

									</div>
								</div>

							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Black Tea with Mandazi</h4>
									<div className="col-md-offset-1">
										<p>Qty : </p><input type="number" name="Quantity" value="1" min="1" max="5" />
										<p><em>Ksh : </em>50</p>
									</div>
								</div>

								<div className="row">
									<div className="col-md-12">
										<div className="col-md-6">
											<input type="submit" name="Book" value="Edit" className="col-md-12"/>
										</div>

										<div className="col-md-6">
											<input type="submit" name="Book" value="Remove" className="col-md-12"/>
										</div>

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

export default BookedMeals;
