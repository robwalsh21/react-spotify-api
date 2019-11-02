import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/me/following';

function UserArtists(props) {
  var url = BASE_URL;

  var options = _objectSpread({}, props.options, {
    type: 'artist'
  });

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

UserArtists.propTypes = {
  options: PropTypes.shape({
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    after: PropTypes.string
  }),
  children: PropTypes.func.isRequired
};
UserArtists.defaultProps = {
  options: {}
};
export default UserArtists;