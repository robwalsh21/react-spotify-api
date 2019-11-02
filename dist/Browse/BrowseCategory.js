import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import ApiRequest from '../ApiRequest/ApiRequest';
var BASE_URL = 'https://api.spotify.com/v1/browse/categories';

function BrowseCategory(props) {
  var url = BASE_URL + "/".concat(props.id);

  var options = _objectSpread({}, props.options);

  return React.createElement(ApiRequest, {
    url: url,
    options: options
  }, function (data, loading, error) {
    return props.children(data, loading, error);
  });
}

BrowseCategory.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.shape({
    country: PropTypes.string,
    locale: PropTypes.string
  }),
  children: PropTypes.func.isRequired
};
export default BrowseCategory;