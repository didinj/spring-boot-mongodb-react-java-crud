import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contact: {}
    };
  }

  componentDidMount() {
    axios.get('/contacts/'+this.props.match.params.id)
      .then(res => {
        this.setState({ contact: res.data });
        console.log(this.state.contact);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/contacts/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Contact Details
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.contact.name}</dd>
              <dt>Address:</dt>
              <dd>{this.state.contact.address}</dd>
              <dt>City:</dt>
              <dd>{this.state.contact.city}</dd>
              <dt>Phone Number:</dt>
              <dd>{this.state.contact.phone}</dd>
              <dt>Email Address:</dt>
              <dd>{this.state.contact.email}</dd>
            </dl>
            <Link to={`/edit/${this.state.contact.id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.contact.id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
