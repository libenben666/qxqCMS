import React from 'react';
import styles from './style.scss';
import WarpTop from '@/comm/WarpTop';

class HomeLayout extends React.Component {
  render() {
    return (
      <div id={styles.root}>
        <WarpTop />
        {
          this.props.children
        }
        <div>bar</div>
      </div>
    )
  }
}

export default HomeLayout;
