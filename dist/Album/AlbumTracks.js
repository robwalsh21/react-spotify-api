import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

function AlbumTracks(props) {
  var url = "https://api.spotify.com/v1/albums/".concat(props.id, "/tracks");

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

AlbumTracks.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.shape({
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    market: PropTypes.string
  }),
  children: PropTypes.func.isRequired
};
AlbumTracks.defaultProps = {
  options: {}
};
export default AlbumTracks;