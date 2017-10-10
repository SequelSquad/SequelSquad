import React from "react"
import {Form, FormGroup, Col, Row, FormControl, Button, Checkbox, DropdownButton, ControlLabel, MenuItem, Modal} from "react-bootstrap"
import Properties from "./properties"

export default class Column extends React.Component {
	constructor (props){
		super(props)
		this.state = {
			validations: [],
			id: this.props.id,
			name: this.props.dataValue ? this.props.dataValue.name : "",
			type: this.props.dataValue ? this.props.dataValue.type : "Choose type"
		}
		this.onHandleChange = this.onHandleChange.bind(this)
		this.addValidate = this.addValidate.bind(this)
		// this.handleSubmit = this.handleSubmit.bind(this)
	}

	onHandleChange(evt) {
		//console.log("CHANGE", evt.target.value)
		this.setState({[evt.target.name]: evt.target.value})
	}

	addValidate() {
		let newValidate = this.state.validations
		//this.props.addDataValue()
		newValidate.push("val")
		this.setState({
			validations: newValidate
		})
		//console.log("adding to the validation array")
	}

	render() {
		console.log("********* TYPE", this.props.dataValue)
		return (
			<div>
				<span>
					<FormGroup>
						<Col componentClass={ControlLabel} sm={6}>New Column</Col>
						<Col smOffset={4} sm={2}>
							<Button className="delete-button" bsSize="small" onClick={() => this.props.handleDelete(this.state.id)}>X</Button>
						</Col>
						<Col sm={12}>
							{/* <h2>{this.state.id}</h2> */}
							<FormControl type="column" placeholder="Enter column name" name="name" defaultValue={this.state.name} onChange = {this.props.onHandleCols(this.state.id)} />
						</Col>
					</FormGroup>
					<FormGroup>
						<Col sm={10}>
							<DropdownButton title={ this.props.dataValue ? this.props.dataValue.type : "Choose Type"} onSelect = {this.props.onHandleColType(this.props.id)} name="type">
								<MenuItem eventKey="STRING">STRING</MenuItem>
								<MenuItem eventKey="TEXT">TEXT</MenuItem>
								<MenuItem eventKey="INTEGER">INTEGER</MenuItem>
								<MenuItem eventKey="INTEGER">INTEGER</MenuItem>
								<MenuItem eventKey="REAL">REAL</MenuItem>
								<MenuItem eventKey="DOUBLE">DOUBLE</MenuItem>
								<MenuItem eventKey="DECIMAL">DECIMAL</MenuItem>
								<MenuItem eventKey="DATE">DATE</MenuItem>
								<MenuItem eventKey="BOOLEAN">BOOLEAN</MenuItem>
								<MenuItem eventKey="JSON">JSON</MenuItem>
								<MenuItem eventKey="BLOB">BLOB</MenuItem>
								<MenuItem eventKey="FLOAT">FLOAT</MenuItem>
								<MenuItem eventKey="RANGE">RANGE</MenuItem>
								<MenuItem eventKey="ARRAY">ARRAY</MenuItem>
								<MenuItem eventKey="GEOMETRY">GEOMETRY</MenuItem>
							</DropdownButton>
						</Col>
					</FormGroup>
					{
						this.props.validations && this.props.validations.map((val, index) => {
							console.log("COLUMN 75", val)
							return <Properties id= {index} columnId={this.state.id} handleValidate={this.props.handleValidate} values={val}/>
						})
					}
					{this.state.validations.length && this.state.validations.map((val, index) => {
						return <Properties id= {this.props.validations ?  this.props.validations.length + index : index} columnId={this.state.id} handleValidate={this.props.handleValidate}/>
					})}
					<Row>
						<Col smOffset={8}>
							<Button onClick={this.addValidate}>+ Add Validation</Button>
						</Col>
					</Row>
				</span>
			</div>
		)
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		//id: state.currRect,
// 		// dataValues: ownProps.dataValues,
// 		// onHandleCols: ownProps.onHandleCols
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onSave(state) {
// 			console.log("^^^^^^^^^^^^^^",state)
// 			dispatch(addColumn(state))
// 		}
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Column)
