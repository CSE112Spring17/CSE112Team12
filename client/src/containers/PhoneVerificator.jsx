import React, { PropTypes } from 'react';
import PhoneForm from '../components/PhoneForm.jsx';


class PhoneVerificator extends React.Component {

  
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      test: {
        format: '',
        phoneNumber: ''
      }
    };

    this.re = new RegExp(String.raw`^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$`);

    this.changeTest = this.changeTest.bind(this);
    this.setFormat = this.setFormat.bind(this);
    this.isValidPhoneNumber = this.isValidPhoneNumber.bind(this);
  }

  isValidPhoneNumber(event) {
    const strNumToCheck = encodeURIComponent(this.state.test.phoneNumber);
    var matches = strNumToCheck.match(this.re);
    var formatSetTo = "The phone number is invalid";
    if (matches) {
      formatSetTo = "The phone number is valid";
      alert(formatSetTo);
    } else {
      alert(formatSetTo);
    }
     
  }

  setFormat(event) {
  //var re = new RegExp(String.raw`^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$`);
  const format = encodeURIComponent(this.state.test.format);
    if (format != null && format !="") {
      this.re = new RegExp(String.raw`${format}`);
    }
    var formatSetTo = "Format updated to "+format;
    alert(formatSetTo); 
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeTest(event) {
    const field = event.target.name;
    const test = this.state.test;
    test[field] = event.target.value;

    this.setState({
      test
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <PhoneForm
        onChange={this.changeTest}
        onClickSF={this.setFormat}
        onClickVF={this.isValidPhoneNumber}
        errors={this.state.errors}
        test={this.state.test}
      />
    );
  }

}

export default PhoneVerificator;
