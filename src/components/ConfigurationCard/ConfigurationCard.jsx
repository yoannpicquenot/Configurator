import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';

export default function ConfigurationCard(props) {
  const { title } = props;
  return (
    <Box boxShadow={3}>
      <Card title={title}>
        <CardContent>
          <Typography gutterBottom>
            { title }
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}

ConfigurationCard.propTypes = {
  title: PropTypes.string.isRequired,
};
