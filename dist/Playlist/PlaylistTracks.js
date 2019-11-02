import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

function PlaylistTracks(props) {
  var url = "https://api.spotify.com/v1/playlists/".concat(props.id, "/tracks");

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

PlaylistTracks.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.shape({
    fields: PropTypes.string,
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    market: PropTypes.string
  }),
  children: PropTypes.func.isRequired
};
PlaylistTracks.defaultProps = {
  options: {}
};
export default PlaylistTracks;