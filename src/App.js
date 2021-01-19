import React from 'react';
import { connect} from 'react-redux'
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
    const {strings} = this.props.data
    return (
    <div className="App">
      {this.state.formData && this.state.formData.map((item,index) => {
        switch(item.type) {
          case "textbox-text":
            return (
              <div className="container">
                <label><b>{strings.en.s8} :</b></label> 
                <input 
                  type="text"  
                  className="inputfield"
                  value={strings.en.s9?strings.en.s9:""}
                  required = {item.isMandatory}
                  onChange={this.handleInputChange}
                  >
                </input>
              </div>
            )
          case "radio-group" :
            return(
              <div>
                {Object.keys(item.items).length === 3 
                  ? 
                  <div>
                    <div className="radio">
                      <h3> {strings.en.s1}</h3>
                      <label>
                        <input
                          type="radio"
                          value={strings.en.s2}
                          checked={strings.en.s10 === "Yes"}
                          onChange={this.onCovidValueChange}
                        />
                        {strings.en.s2}
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={strings.en.s3}
                          checked ={strings.en.s10 === "No"}
                          onChange={this.onCovidValueChange}
                        />
                        {strings.en.s3}
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={strings.en.s4}
                          checked ={strings.en.s10 === "Not sure"}
                          onChange={this.onCovidValueChange}
                        />
                        {strings.en.s4}
                      </label>
                    </div>
                  </div>
                  :<div>
                    <div className="radio">
                      <h3>  {strings.en.s5}</h3>
                      <label>
                        <input
                          type="radio"
                          value={strings.en.s6}
                          checked ={strings.en.s11 === "Yes"}
                          onChange={this.onTraveledValueChange}
                        />
                        {strings.en.s6}
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          value={strings.en.s7}
                          checked ={strings.en.s11 === "No"}
                          onChange={this.onTraveledValueChange}
                        />
                        {strings.en.s7}
                      </label>
                    </div>
                  </div>
                }
              </div>
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

