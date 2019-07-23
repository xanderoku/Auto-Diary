import React from "react";
import ReactAutocomplete from "react-autocomplete";
import { connect } from "react-redux";
import { selectModel } from '../../actions/actions'

class ModelDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      
    };
  }

  setModel = (value) => {
    this.setState({ value });
    this.props.selectModel(value);
  }

  render() {
    return (
      <ReactAutocomplete
      items={this.props.models}
        shouldItemRender={(item, value) =>
          item.toLowerCase().indexOf(value.toLowerCase()) > -1
        }
        getItemValue={item => item}
        renderItem={(item, highlighted) => (
          <div id="need-id"
            key={item}
            style={DivStyle}
          >
            {item}
          </div>
        )}
        value={this.state.value}
        onChange={e => this.setModel( e.target.value )}
        onSelect={this.setModel}
      />
    );
  }
}

const DivStyle = {
    // backgroundColor: 'red',
    // marginTop: '20px'
}

const mapDispatchToProps = dispatch => {
  return {
    selectModel: text => dispatch(selectModel(text))
  };
};

export default connect(null, mapDispatchToProps)(ModelDropdown);
