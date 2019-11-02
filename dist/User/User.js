import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

function User(props) {
  var url = 'https://api.spotify.com/v1';
  var options = {};

  if (props.id) {
    url += "/users/".concat(props.id);
  } else {
    url += "/me";
  }

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

User.propTypes = {
  id: PropTypes.string,
  children: PropTypes.func.isRequired
};
export default User;