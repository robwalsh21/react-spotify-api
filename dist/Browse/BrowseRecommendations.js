import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/recommendations';

function BrowseRecommendations(props) {
  var url = BASE_URL;

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

BrowseRecommendations.propTypes = {
  options: PropTypes.shape({
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    market: PropTypes.string,
    seed_artists: PropTypes.string,
    seed_genres: PropTypes.string,
    seed_tracks: PropTypes.string
  }),
  children: PropTypes.func.isRequired
};
export default BrowseRecommendations;