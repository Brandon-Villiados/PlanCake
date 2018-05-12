import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react'
import CreateEvent from './CreateEvent.jsx';
import AddTopic from './AddTopic.jsx';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: -1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, titleProps) {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    return (
      <div className="sidebar">
        <CreateEvent
          handleInputChange={this.props.handleInputChange}
          handleCreateEvent={this.props.handleCreateEvent}
          handleCreateEventModalOpenClose={this.props.handleCreateEventModalOpenClose}
          createEventError={this.props.createEventError}
          createEventModalOpen={this.props.createEventModalOpen}
        />
        <Accordion>
          {this.props.events.map((event, i) => {
            return (
              <div key={i}>
                <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  <b>{event.title}</b>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i}>
                  {
                    activeIndex === i
                      ? <AddTopic
                          handleInputChange={this.props.handleInputChange}
                          handleAddTopic={this.props.handleAddTopic}
                          handleAddTopicModalOpenClose={this.props.handleAddTopicModalOpenClose}
                          addTopicModalOpen={this.props.addTopicModalOpen}
                          addTopicError={this.props.addTopicError}
                          eventId={event.id}
                        />
                      : null
                  }
                  <p>Activities</p>
                  <p>Flights</p>
                </Accordion.Content>
              </div>)
          })}
        </Accordion>
      </div>
    )
  }
}
