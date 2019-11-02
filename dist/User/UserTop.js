import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/me/top';

function UserTop(props) {
  var url = BASE_URL + "/".concat(props.type);

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

UserTop.propTypes = {
  options: PropTypes.shape({
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    time_range: PropTypes.string
  }),
  type: PropTypes.oneOf(['artists', 'tracks']).isRequired,
  children: PropTypes.func.isRequired
};
UserTop.defaultProps = {
  options: {}
};
export default UserTop;