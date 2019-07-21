import React from "react";
import ReactAutocomplete from "react-autocomplete";

export default class ModelDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
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
          <div
            key={item.id}
            style={DivStyle}
          >
            {item}
          </div>
        )}
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={value => this.setState({ value })}
      />
    );
  }
}

const DivStyle = {
    // backgroundColor: 'red',
    // marginTop: '20px'
}