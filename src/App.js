import React from 'react';
import { connect} from 'react-redux'
import InputField from './components/inputField'
import RadioButton from './components/radioButton'
import './App.css';

class  App extends React.Component {
  constructor(props){
  super(props);
  this.state={
   }
  }

  componentDidMount() {
    const {data} = this.props
    const formData = data.flows.main.map(item => {
      return (
        data.components[item]
      )
    })
    this.setState({formData})
  }

  handleInputChange = (e) => {
    this.props.updateInputField(e.target.value)
  }
  onCovidValueChange = (e) => {
    this.props.updateCovidField(e.target.value)
  }

  onTraveledValueChange = (e) => {
    this.props.updateTraveledField(e.target.value)
  }

  handleShowData = () => {
    const data = JSON.stringify(this.props.data)
    alert(data);
  }

  render() {
    return (
    <div className="App">
      {this.state.formData && this.state.formData.map((item,index) => {
        switch(item.type) {
          case "textbox-text":
            return (
              <InputField item={item} strings={this.props.data.strings} handleInputChange = {this.handleInputChange}/>
            )
          case "radio-group" :
            return(
              <RadioButton item={item} strings={this.props.data.strings} onCovidValueChange = {this.onCovidValueChange} onTraveledValueChange = {this.onTraveledValueChange} />
            )
          }
        })
      }
      <div className="submit">
        <input
          className="submit_button"
          type = "button"
          value="submit"
          onClick={this.handleShowData}
        >
        </input>
      </div>
    </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    data: state.data
   };
  }


  function mapDispatchToProps(dispatch) {
    return {
      updateInputField: (value) => dispatch({type: 'UPDATEINPUT',data:value}),
      updateCovidField: (value) => dispatch({type: 'UPDATECOVIDTEST',data:value}),
      updateTraveledField: (value) => dispatch({type: 'UPDATETRAVELEDFIELD',data:value})
     };
     
    }
    
export default connect(mapStateToProps,mapDispatchToProps)(App);

