import React from 'react';
import './Form.css';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', text: ''};    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.setState({text: this.state.value});
        event.preventDefault();
      }

    render() {        
        return (
          <form className="form">
            <label for="form-in">
              Введите Ваш текст:
            </label>  
            <input id="form-in" className="form__input" type="text" value={this.state.value} onChange={this.handleChange} />            
            <input className="form__button" type="submit" value="Отправить" onClick={this.handleSubmit} />
            <textarea className="form__output" type="text" value={this.state.text} cols="40" rows="5" disabled/>  
          </form>
        );
    }
}

export default Form;