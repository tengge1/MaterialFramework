import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Card, CardActions, CardHeader, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import withRoot from '../withRoot';

const styles = theme => ({
    root: {

    }
});

class Login extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader
                    title="URL Avatar"
                    subtitle="Subtitle"
                    avatar="images/jsa-128.jpg"
                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src="images/nature-600-337.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
                <CardActions>
                    <Button label="Action1" />
                    <Button label="Action2" />
                </CardActions>
            </Card>
        );
    }
}

export default withRoot(withStyles(styles)(Login));