import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import React from 'react';
import { serialize } from '../utils';
import { SpotifyApiContext } from '../';

function useApiRequest(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      error = _React$useState4[0],
      setError = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      data = _React$useState6[0],
      setData = _React$useState6[1];

  var token = React.useContext(SpotifyApiContext);
  React.useEffect(function () {
    function loadData() {
      return _loadData.apply(this, arguments);
    }

    function _loadData() {
      _loadData = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
        var res, _data;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                setLoading(true);
                _context.next = 4;
                return fetch(url + serialize(options), {
                  method: 'GET',
                  headers: {
                    Authorization: "Bearer ".concat(token)
                  }
                });

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                _data = _context.sent;
                setLoading(false);

                if (_data.error) {
                  setError(_data.error);
                } else if (!res.ok) {
                  setError({
                    status: res.status,
                    message: res.statusText
                  });
                } else {
                  setData(_data);
                  setError(null);
                }

                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                setLoading(false);
                setError(_context.t0);
                setData(null);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 12]]);
      }));
      return _loadData.apply(this, arguments);
    }

    loadData();
  }, [url, options.ids, options.q, token]);
  return {
    data: data,
    loading: loading,
    error: error
  };
}

export default useApiRequest;