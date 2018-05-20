import React, { Component } from 'react';
import { Card, Icon, Message, Grid, Segment, List, Header } from 'semantic-ui-react';
import Todo from './Todo.jsx';
import GroupStatusTable from './GroupStatusTable.jsx';
import AddPlan from './AddPlan.jsx';
import ItineraryList from './ItineraryList.jsx';
import axios from 'axios';

export default class EventSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="event-cards">
        <Card fluid>
          <Card.Content header={this.props.event.title} />
          <Card.Content>
            <Grid columns='equal'>
              <Grid.Column>
                <Segment>
                  <Header>Itinerary
                  <AddPlan
                    handleInputChange={this.props.handleInputChange}
                    handleAddPlan={this.props.handleAddPlan}
                    addPlanError={this.props.addPlanError}
                    handleAddPlanModalOpenClose={this.props.handleAddPlanModalOpenClose}
                    addPlanModalOpen={this.props.addPlanModalOpen}
                  />
                  </Header>
                  <hr className="hr-card"/>
                  <ItineraryList
                    itinerary={this.props.itinerary}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column >
                <Segment>
                  <b>Todo</b>
                  <Todo
                    todos={this.props.todos}
                    event={this.props.event}
                  />
                </Segment>
              </Grid.Column>
            </Grid>

          </Card.Content>
          <Card.Content extra>
            <Icon name='map pin' />
            {this.props.event.location}
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content header="Group Status Table" />
          {
            this.props.groupTodos.length === 0
              ? <Card.Content>
                <Message info>
                  <Message.Header>
                    Want to see what everyone has accomplished?
                  </Message.Header>
                  <p>
                    Assign a group task by clicking on the todo icon.
                  </p>
                </Message>
              </Card.Content>
              : <Card.Content className="table-container">
                <GroupStatusTable className="table" groupTodos={this.props.groupTodos} />
              </Card.Content>
          }
        </Card>
      </div>
    )
  }



}