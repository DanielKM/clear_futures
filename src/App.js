import React, { Component } from 'react';
import {Sunburst} from 'react-vis';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import logo from './logo.svg';
import './App.css';

var data = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  data = {
   "title": "analytics",
   "color": "#12939A",
   "children": [
    {
     "title": "cluster",
     "children": [
      {"title": "AgglomerativeCluster", "color": "#12939A", "size": 3938},
      {"title": "CommunityStructure", "color": "#12939A", "size": 3812},
      {"title": "HierarchicalCluster", "color": "#12939A", "size": 6714},
      {"title": "MergeEdge", "color": "#12939A", "size": 743}
     ]
    },
    {
     "title": "graph",
     "children": [
      {"title": "BetweennessCentrality", "color": "#12939A", "size": 3534},
      {"title": "LinkDistance", "color": "#12939A", "size": 5731},
      {"title": "MaxFlowMinCut", "color": "#12939A", "size": 7840},
      {"title": "ShortestPaths", "color": "#12939A", "size": 5914},
      {"title": "SpanningTree", "color": "#12939A", "size": 3416}
     ]
    },
    {
     "title": "optimization",
     "children": [
      {"title": "AspectRatioBanker", "color": "#12939A", "size": 7074}
     ]
    }
   ]
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Clear Futures</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Career Engine</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Data</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Additional Information
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Business Profile
                  </DropdownItem>
                  <DropdownItem>
                    Contact Information
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Sunburst
          colorType="literal"
          data={data}
          height={300}
          width={350}/>

        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Clear Futures</h1>
          </header>
          <p className="App-intro">
            The Web Application that makes the Canadian Job Market a little bit clearer.
          </p>
        </div>
      </div>
    );
  }
}
