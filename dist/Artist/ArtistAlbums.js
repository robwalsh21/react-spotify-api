import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/artists';

function ArtistAlbums(props) {
  var url = BASE_URL + "/".concat(props.id, "/albums");

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

ArtistAlbums.propTypes = {
  options: PropTypes.shape({
    include_groups: PropTypes.string,
    market: PropTypes.string,
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  id: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};
ArtistAlbums.defaultProps = {
  options: {}
};
export default ArtistAlbums;