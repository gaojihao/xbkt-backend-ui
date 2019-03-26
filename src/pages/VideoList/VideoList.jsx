import React, { Component } from 'react';
import CustomBreadcrumb from '../../components/CustomBreadcrumb';
import './VideoList.scss';

export default class VideoList extends Component {
  static displayName = 'VideoList';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const breadcrumb = [
      { text: '视频管理', link: '' },
      { text: '视频列表', link: '#/video/list' },
    ];
    return (
      <div className="video-list-page">
        <CustomBreadcrumb dataSource={breadcrumb} />
      </div>
    );
  }
}