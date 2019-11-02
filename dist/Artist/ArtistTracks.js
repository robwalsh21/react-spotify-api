import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/artists';

function ArtistTracks(props) {
  var url = BASE_URL + "/".concat(props.id, "/top-tracks");

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

ArtistTracks.propTypes = {
  options: PropTypes.shape({
    market: PropTypes.string.isRequired
  }),
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};
ArtistTracks.defaultProps = {
  options: {
    market: 'from_token'
  }
};
export default ArtistTracks;