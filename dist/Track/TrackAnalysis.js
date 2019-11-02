import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

function TrackAnalysis(props) {
  var url = "https://api.spotify.com/v1/audio-analysis/".concat(props.id);
  return React.createElement(ApiRequest, {
    url: url
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

TrackAnalysis.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};
export default TrackAnalysis;