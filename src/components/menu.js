import React, { Component } from 'react';
import HeaderUser from './headerUser';
import Footer from './footer';
import './css/mealman.css';

class Menu extends Component {
  render() {
    return (
      <div>
      <HeaderUser />

        <section>
			<div className="container-fluid page-fit">

				<div className="row">
		        	<div className="container-fluid">
		        		<div className="menu_header">
							<h1>Menu</h1>
							<h3><em>Fair day</em></h3>
						</div>
		        	</div>
				</div>


				<div className="row">
					<div className="container-fluid">
						<div class="menu_row">

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Black Tea with Mandazi</h4>
									<h4>Ksh : <em>50</em></h4>
								</div>

								<div className="row">
									<div className="add_to_menu col-md-offset-2">
										<input type="submit" name="Book" value="Book Meal" className="col-md-10"/>
									</div>
								</div>
							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Black Tea with Mandazi</h4>
									<h4>Ksh : <em>50</em></h4>
								</div>

								<div className="row">
									<div className="add_to_menu col-md-offset-2">
										<input type="submit" name="Book" value="Book Meal" className="col-md-10"/>
									</div>
								</div>
							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Black Tea with Mandazi</h4>
									<h4>Ksh : <em>50</em></h4>
								</div>

								<div className="row">
									<div className="add_to_menu col-md-offset-2">
										<input type="submit" name="Book" value="Book Meal" className="col-md-10"/>
									</div>
								</div>
							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Black Tea with Mandazi</h4>
									<h4>Ksh : <em>50</em></h4>
								</div>

								<div className="row">
									<div className="add_to_menu col-md-offset-2">
										<input type="submit" name="Book" value="Book Meal" className="col-md-10"/>
									</div>
								</div>
							</article>

							<article className="col-md-3">
								<div className="row meal_header">
									<h4>Black Tea with Mandazi</h4>
									<h4>Ksh : <em>50</em></h4>
								</div>

								<div className="row">
									<div className="add_to_menu col-md-offset-2">
										<input type="submit" name="Book" value="Book Meal" className="col-md-10"/>
									</div>
								</div>
							</article>

						</div>
					</div>
				</div>

			</div>
		</section>

		<Footer />
      </div>
    );
  }
}

export default Menu;
