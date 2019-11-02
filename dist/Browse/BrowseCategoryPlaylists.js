import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/browse/categories';

function BrowseCategoryPlaylists(props) {
  var url = BASE_URL + "/".concat(props.id, "/playlists");

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

BrowseCategoryPlaylists.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.shape({
    country: PropTypes.string,
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  children: PropTypes.func.isRequired
};
export default BrowseCategoryPlaylists;