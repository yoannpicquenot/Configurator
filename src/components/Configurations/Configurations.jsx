import React from 'react';
import ConfigurationList from '../ConfigurationList/ConfigurationList';

import './Configurations.css';

export default function Configurations() {
  const configurations = [{
    title: 'First configuration',
  }, {
    title: 'Second configuration',
  }, {
    title: 'Thirst configuration',
  }, {
    title: 'Four configuration',
  }];
  return (
    <main className="Page ConfigurationsPage">
      <ConfigurationList list={configurations} />
    </main>
  );
}
