import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

function Track(props) {
  var url = 'https://api.spotify.com/v1/tracks';

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

Track.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string.isRequired)]).isRequired,
  options: PropTypes.shape({
    market: PropTypes.string
  })
};
Track.defaultProps = {
  options: {}
};
export default Track;