import React, { Component } from 'react';
import { Input, Menu, Segment, Card, List, Icon } from 'semantic-ui-react';
import ActiveList from './ActiveList.jsx';

export default class RightSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Pins'
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item name='Pins' active={activeItem === 'Pins'} onClick={this.handleItemClick} />
          <Menu.Item name='Active' active={activeItem === 'Active'} onClick={this.handleItemClick} />
        </Menu>
        {activeItem === 'Pins'
          ? <Segment attached='bottom'>
              <Card>hello</Card>
              <Card>im working</Card>
              {/* //TODO: insert likes/dislikes cards here */}
            </Segment>
          : <Segment attached='bottom'>
              <ActiveList
                currentEvent={this.props.currentEvent}
                activeEventsUsers={this.props.activeEventsUsers}
                eventAttendees={this.props.eventAttendees}
              />
            </Segment>
        }

      </div>
    )
  }
}
