import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1';

function UserPlaylists(props) {
  var url = BASE_URL;

  var options = _objectSpread({}, props.options);

  if (props.id) {
    url += "/users/".concat(props.id, "/playlists");
  } else {
    url += "/me/playlists";
  }

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

UserPlaylists.propTypes = {
  id: PropTypes.string,
  options: PropTypes.shape({
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  children: PropTypes.func.isRequired
};
UserPlaylists.defaultProps = {
  options: {}
};
export default UserPlaylists;