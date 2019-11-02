import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';

function Search(props) {
  var url = 'https://api.spotify.com/v1/search';

  var options = _objectSpread({}, props.options);

  var type = [];
  if (props.album) type.push('album');
  if (props.artist) type.push('artist');
  if (props.playlist) type.push('playlist');
  if (props.track) type.push('track');
  options.type = type.join(',');
  options.q = props.query;
  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  album: PropTypes.bool,
  artist: PropTypes.bool,
  playlist: PropTypes.bool,
  track: PropTypes.bool,
  options: PropTypes.shape({
    market: PropTypes.string,
    limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    include_external: PropTypes.string
  }),
  children: PropTypes.func.isRequired
};
Search.defaultProps = {
  options: {}
};
export default Search;