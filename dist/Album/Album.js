import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

function Album(props) {
  var url = 'https://api.spotify.com/v1/albums';

  var options = _objectSpread({}, props.options);

  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += "/".concat(props.id);
  }

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

Album.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string.isRequired)]).isRequired,
  options: PropTypes.shape({
    market: PropTypes.string
  }),
  children: PropTypes.func.isRequired
};
Album.defaultProps = {
  options: {}
};
export default Album;