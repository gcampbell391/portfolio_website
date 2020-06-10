import React from "react"
import { Form, Button } from "semantic-ui-react"

const ContactMe = (props) => {
    return (
        <div className="contactMe">
            <h1 id="contactMeTitle">Contact Me</h1>
            <Form size="large" onSubmit={props.handleSendClick}>
                <Form.Input
                    required
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Name"
                    name="inputName"
                    id="inputName"
                />
                <Form.Input
                    required
                    fluid
                    icon="envelope"
                    iconPosition="left"
                    placeholder="Email"
                    name="inputEmail"
                    id="inputEmail"
                />
                <Form.Input
                    required
                    fluid
                    icon="keyboard"
                    iconPosition="left"
                    placeholder="Message"
                    name="inputMessage"
                    id="inputMessage"
                />
                <Button content='Send' icon='paper plane' color='teal' />
            </Form>
        </div>
    )
}

export default ContactMe