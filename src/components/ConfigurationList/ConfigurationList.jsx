import React from 'react';
import Grid from '@material-ui/core/Grid';
import ConfigurationCard from '../ConfigurationCard/ConfigurationCard';

import './ConfigurationList.css';

export default class ConfigurationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
    };
  }

  renderList() {
    const { list } = this.state;

    if (!list || list.length === 0) {
      return 'No profile';
    }

    return list.map((element) => (
      <Grid className="configuration-item" key={`configuration-${element.title}`} item>
        <ConfigurationCard title={element.title} />
      </Grid>
    ));
  }

  render() {
    return (
      <div className="configuration-list">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={4}>
              { this.renderList() }
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
