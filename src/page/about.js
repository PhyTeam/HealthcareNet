import React from 'react';

import { Page, Panel, Breadcrumbs } from 'react-blur-admin';
import { Link } from 'react-router';
import { App } from './../App';

export class About extends React.Component {

  renderBreadcrumbs() {
    return (
      <Breadcrumbs>
        <Link to='/'>
          Home
        </Link>
          About
      </Breadcrumbs>
    );
  }

  render() {
    return (
      <Page actionBar={this.renderBreadcrumbs()} title='About'>
        <Panel title='The Team'>
          <div>
            
          </div>
        </Panel>
      </Page>
    );
  }
}
