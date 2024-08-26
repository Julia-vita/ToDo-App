import React, { Component } from "react";
import PropTypes from "prop-types";

import "./FilterItem.css";

export default class FilterItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, onFilterChange, selected } = this.props;

    let classNames = selected ? "selected" : "";

    return (
      <button
        className={classNames}
        onClick={() => {
          onFilterChange(label);
        }}
      >
        {label}
      </button>
    );
  }
}

FilterItem.defaultProps = {
  label: "All",
  onFilterChange: () => {},
  selected: false,
};

FilterItem.propTypes = {
  label: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};
