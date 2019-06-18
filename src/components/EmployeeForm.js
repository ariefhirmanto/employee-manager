import React, { Component } from 'react';
import { 
	View,
	Text,
	Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';


class EmployeeForm extends Component {
	

	render() {
		return (
			<View>
				<CardSection>
						<Input
							label="Name"
							placeholder="Subakat"
							value={this.props.name}
							onChangeText={text => 
								this.props.employeeUpdate({ prop: 'name', value: text })}
						/>
					</CardSection>

					<CardSection>
						<Input
							label="Phone"
							placeholder="+628"
							value={this.props.phone}
							onChangeText={text => 
								this.props.employeeUpdate({ prop: 'phone', value: text })}
						/>
					</CardSection>

					<CardSection>
						<Text style={styles.pickerTextStyle}>Shift</Text>
						<View style={{ 
							flex: 2,
							paddingLeft: 85
						}}
						>
							<Picker
								style={{ flex: 1 }}
								selectedValue={this.props.shift}
								onValueChange={option => 
									this.props.employeeUpdate({ prop: 'shift', value: option })}
							>
								<Picker.item label="Monday" value="Monday" />
								<Picker.item label="Tuesday" value="Tuesday" />
								<Picker.item label="Wednesday" value="Wednesday" />
								<Picker.item label="Thursday" value="Thursday" />
								<Picker.item label="Friday" value="Friday" />
								<Picker.item label="Saturday" value="Saturday" />
								<Picker.item label="Sunday" value="Sunday" />
							</Picker>
						</View>
					</CardSection>
			</View>
			);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	},
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
