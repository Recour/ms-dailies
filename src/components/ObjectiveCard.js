import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {images} from "../data/images";

// Material UI imports
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    Box,
} from '@material-ui/core';

const styles = {
    card: {
        backgroundColor: 'rgb(240,240,240)',
        borderRadius: '5%',
        height: '100%'
    },
    cardMedia: {
        borderRadius: '5%'
    },
    cardContent: {
        position: 'relative'
    },
    completedStamp: {
        top: '20%',
        left: '0',
        position: 'absolute'
    },
    fullHeight: {
        height: '100%'
    }
}

class ObjectiveCard extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { classes } = this.props
        return(
            <Card
            className={classes.card}>
                <CardActionArea
                onClick={this.handleClick}
                className={classes.fullHeight}>
                    <Box
                    mt={1/2}
                    mx={1/2}>
                        <CardMedia
                        component="img"
                        image={this.props.objective.image}
                        alt={this.props.objective.name}
                        className={classes.cardMedia}/>
                    </Box>

                    <CardContent
                    className={classes.cardContent}>
                        <Typography 
                        variant="h6" 
                        noWrap>
                            {this.props.objective.name}
                        </Typography>

                        <Typography 
                        variant="body2" 
                        noWrap>
                            {this.props.objective.subtext}
                        </Typography>
                        
                        <Box
                        display={this.props.isCompleted ? 'inline' : 'none'}>
                            <CardMedia
                            component="img"
                            image={images.completedStamp}
                            alt={"Completed"}
                            className={classes.completedStamp}/>
                        </Box>
                        
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    handleClick() {
        this.props.toggleObjectiveCompleted(this.props.objective.name, this.props.objective.resetType);
    }
}

export default withStyles(styles)(ObjectiveCard)