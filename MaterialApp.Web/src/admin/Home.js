import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import withRoot from '../withRoot';

const styles = theme => ({ root: {} });

class Home extends React.Component {

    render() {
        return (
            <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        );
    }

}

export default withRoot(withStyles(styles)(Home));