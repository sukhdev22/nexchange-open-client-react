import React from 'react';
import { connect } from 'react-redux';


const ErrorAlert = (props) => (
	<div className={props.error.show ? "alert alert-warning" : "alert alert-warning hidden"}>
		 <div className="container">
			<div className="alert-icon">
				<i className="material-icons">error_outline</i>
			</div>
			<button type="button" className="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true"><i className="material-icons">clear</i></span>
			</button>

		    <b>Warning:</b> {props.error.message}
		</div>
	</div>
);


function mapStateToProps(state) {
	return {
		error: state.error
	}
}

export default connect(mapStateToProps)(ErrorAlert);