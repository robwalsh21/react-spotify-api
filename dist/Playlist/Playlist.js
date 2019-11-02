import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

function Playlist(props) {
  var url = "https://api.spotify.com/v1/playlists/".concat(props.id);

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

Playlist.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  options: PropTypes.shape({
    fields: PropTypes.string,
    market: PropTypes.string
  })
};
Playlist.defaultProps = {
  options: {}
};
export default Playlist;