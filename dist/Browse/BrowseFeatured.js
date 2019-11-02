import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/browse';

function BrowseFeatured(props) {
  var url = BASE_URL + "/featured-playlists";

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

BrowseFeatured.propTypes = {
  options: PropTypes.shape({
    locale: PropTypes.string,
    country: PropTypes.string,
    timestamp: PropTypes.string,
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  children: PropTypes.func.isRequired
};
export default BrowseFeatured;