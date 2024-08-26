import React, { Component } from "react";
import PropTypes from "prop-types";

import TasksFilter from "../TasksFilter";

import "../TasksFilter/TasksFilter.css";

export default class Footer extends Component {
  render() {
    const { filterItems, setFilter, count } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{count} item left</span>
        <TasksFilter filterItems={filterItems} onFilterChange={setFilter} />
        <button className="clear-completed" onClick={this.props.clearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}

Footer.defaultProps = {
  clearCompleted: () => {},
  filterItems: [],
  setFilter: () => {},
  count: 0,
};

Footer.propTypes = {
  clearCompleted: PropTypes.func,
  filterItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setFilter: PropTypes.func,
  count: PropTypes.number,
};