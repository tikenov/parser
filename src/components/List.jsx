import React, { Component } from "react";
import Row from "./Row";
import { Table } from "react-bootstrap";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        state: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(item) {
    const { schema } = this.props;
    const { filter } = this.state;
    for (let { name } of schema) {
      // const name = idx.name;
      // console.log(name, filter[name]);
      if (filter[name] && !item[name].includes(filter[name])) return false;
    }
    return true;
  }

  handleChange(event) {
    const filter = { ...this.state.filter, state: event.target.value };
    this.setState({ filter });
  }

  render() {
    const { schema, data } = this.props;
    const { filter } = this.state;
    return (
      <div className="list">
        <Table striped bordered hover>
          <thead>
            <tr>
              {schema.map((item) => (
                <th key={item.name}>{item.desc}</th>
              ))}
            </tr>
            <tr>
              <th>
                <input type="text" />
              </th>
              <th>
                <input type="text" />
              </th>
              <th>
                <input type="text" />
              </th>
              <th>
                <input type="text" />
              </th>
              <th>
                <input type="text" />
              </th>
              <th>
                <input type="text" />
              </th>
              <th>
                <input
                  type="text"
                  value={filter.state}
                  onChange={this.handleChange}
                />
              </th>
              <th>
                <input type="text" />
              </th>
              <th>
                <input type="text" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.data.filter(this.handleFilter).map((row, i) => (
              <Row row={row} schema={schema} filter={filter} key={i} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default List;
