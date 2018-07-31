import React, { Component } from 'react';
import './Customers.css'

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({ customers }));
  }

  render() {
    const { customers } = this.state;
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {
          customers.map(customer =>
            <li key={customer.id}>
              <h4>{customer.firstName} {customer.lastName}</h4>
            </li>
          )
        }
        </ul>
      </div>
    );
  }
}

export default Customers;
