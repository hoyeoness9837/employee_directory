import React, { Component } from 'react';
import Table from './components/Table';
import './App.css';
const employeesDB = [
  {
    id: 1,
    first_name: 'Tore',
    last_name: 'Birkenshaw',
    email: 'tbirkenshaw0@twitter.com',
  },
  {
    id: 2,
    first_name: 'Skip',
    last_name: 'Helm',
    email: 'shelm1@bbb.org',
  },
  {
    id: 3,
    first_name: 'Wayland',
    last_name: 'Hoopper',
    email: 'whoopper2@prlog.org',
  },
  {
    id: 4,
    first_name: 'Sherry',
    last_name: 'Maddie',
    email: 'smaddie3@bloomberg.com',
  },
  {
    id: 5,
    first_name: 'Miranda',
    last_name: 'Stallworthy',
    email: 'mstallworthy4@mapquest.com',
  },
  {
    id: 6,
    first_name: 'Urban',
    last_name: 'Bruntjen',
    email: 'ubruntjen5@blog.com',
  },
  {
    id: 7,
    first_name: 'Lanie',
    last_name: 'Gouly',
    email: 'lgouly6@weather.com',
  },
  {
    id: 8,
    first_name: 'Myranda',
    last_name: 'Coulthard',
    email: 'mcoulthard7@studiopress.com',
  },
  {
    id: 9,
    first_name: 'Shelton',
    last_name: 'Gounod',
    email: 'sgounod8@nationalgeographic.com',
  },
  {
    id: 10,
    first_name: 'Maximilianus',
    last_name: 'Chasemore',
    email: 'mchasemore9@un.org',
  },
];

class App extends Component {
  state = {
    last_name: '',
    employees: [],
  };
  handleInputChange = (event) => {
    this.setState({ last_name: event.target.value });
  };
  componentDidMount() {
    this.setState({ employees: employeesDB });
  }

  // cars.sort(function(a, b){
  //   var x = a.type.toLowerCase();
  //   var y = b.type.toLowerCase();
  //   if (x < y) {return -1;}
  //   if (x > y) {return 1;}
  //   return 0;
  // });
  sortByLastName() {
    this.setState({
      employees: this.state.employees.sort((A, B) => {
        let x = A.last_name.toLowerCase();
        let y = B.last_name.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      }),
    });
  }

  // points.sort(function(a, b){return a - b});
  sortById() {
    this.setState({
      employees: this.state.employees.sort((A, B) => {
        return A.id - B.id;
      }),
    });
  }

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.sortByLastName()}>
            Sory Last Name A-Z
          </button>
        </div>
        <div>
          <button onClick={() => this.sortById()}>Sory By Id Low-High</button>
        </div>
        <form>
          <label htmlFor='filter'>Search by Last Name: </label>
          <input
            type='text'
            value={this.state.last_name}
            onChange={this.handleInputChange}
          />
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees
              .filter((employee) => {
                return employee.last_name
                  .toUpperCase()
                  .includes(this.state.last_name.toUpperCase());
              })
              .map((employee) => (
                <Table key={employee.id} employee={employee} />
              ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default App;
