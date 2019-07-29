import React from "react";
import ReactAutocomplete from "react-autocomplete";
import { connect } from "react-redux";
import { selectModel, getModelBrand } from "../../actions/actions";

class ModelDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""      
    };
  }

  setModel = (value) => {
    this.setState({ value });
    this.props.selectModel(value);
  }

  render() {
    return (
      <>
        <h1>{this.props.cars.brand}</h1>
        <ReactAutocomplete
          items={this.props.cars.models}
          shouldItemRender={(item, value) =>
            item.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          getItemValue={item => item}
          renderItem={(item, highlighted) => (
            <div id="need-id" key={item} style={DivStyle}>
              {item}
            </div>
          )}
          value={this.props.model}
          onChange={e => this.props.selectModel(e.target.value)}
          onSelect={this.props.selectModel}
        />
        {console.log("value of selected input", this.props.selectModel)}
      </>
    );
  }
}

const DivStyle = {
    color: "black"
}

const mapStateToProps = state => {
  return {
    cars: state.chooseCar,
    model: state.reducer.model
  };
}

const mapDispatchToProps = dispatch => {
  return {
    selectModel: text => dispatch(getModelBrand(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelDropdown);
