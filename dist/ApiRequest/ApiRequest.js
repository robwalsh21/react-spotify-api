import PropTypes from 'prop-types';
import useApiRequest from './useApiRequest';

function ApiRequest(props) {
  var _useApiRequest = useApiRequest(props.url, props.options),
      data = _useApiRequest.data,
      loading = _useApiRequest.loading,
      error = _useApiRequest.error;

  return props.children(data, loading, error);
}

ApiRequest.propTypes = {
  options: PropTypes.object,
  url: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};
ApiRequest.defaultProps = {
  options: {}
};
export default ApiRequest;