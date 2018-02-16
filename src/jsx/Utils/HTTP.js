import axios from 'axios';
import Constants from './Constants';

export default class HTTP {
	static USE_CSRF = true;

	static tokenNameKeyElement = document.querySelector('meta[name="tokenNameKey"]');
	static tokenNameValueElement = document.querySelector('meta[name="tokenNameValue"]');
	static tokenValueKeyElement = document.querySelector('meta[name="tokenValueKey"]');
	static tokenValueValueElement = document.querySelector('meta[name="tokenValueValue"]');

	static tokenNameKey = null;
	static tokenNameValue = null;
	static tokenValueKey = null;
	static tokenValueValue = null;

	static getCSRFTokens() {
		if (!HTTP.USE_CSRF) return;
		if (!HTTP.tokenNameKeyElement) return;

		HTTP.tokenNameKey = HTTP.tokenNameKeyElement.getAttribute('value');
		HTTP.tokenNameValue = HTTP.tokenNameValueElement.getAttribute('value');
		HTTP.tokenValueKey = HTTP.tokenValueKeyElement.getAttribute('value');
		HTTP.tokenValueValue = HTTP.tokenValueValueElement.getAttribute('value');
	}

	static updateCSRFToken(response) {
		if (!HTTP.USE_CSRF) return;

		const responseheader = response.request.getResponseHeader('X-CSRF-Token');
		if (!responseheader) {
			console.info('No X-CSRF-Token found in response header ');
			return;
		}
		const csrfToken = JSON.parse(responseheader);

		if (csrfToken == null) {
			console.warn(
				'WARNING:',
				"POST RESPONSE DIDN'T RETURNED CSRF DATA",
				JSON.parse(response.data)
			);
			return;
		}

		HTTP.tokenNameValueElement.setAttribute('value', csrfToken.csrf_name);
		HTTP.tokenValueValueElement.setAttribute('value', csrfToken.csrf_value);
	}

	static post(url, data = {}) {
		HTTP.getCSRFTokens();

		if (HTTP.USE_CSRF) {
			if (FormData.prototype.isPrototypeOf(data)) {
				data.append(HTTP.tokenNameKey, HTTP.tokenNameValue);
				data.append(HTTP.tokenValueKey, HTTP.tokenValueValue);
			} else {
				data = Object.assign(
					{
						[HTTP.tokenNameKey]: HTTP.tokenNameValue,
						[HTTP.tokenValueKey]: HTTP.tokenValueValue,
					},
					data
				);
			}
		}

		return axios
			.post(url, data, {
				baseURL: Constants.BASE_URL,
			})
			.then(response => {
				const responseData = response.data;

				HTTP.updateCSRFToken(response);

				return responseData;
			});
	}

	static upload(url, data = {}) {
		HTTP.getCSRFTokens();

		if (HTTP.USE_CSRF) {
			data.append(HTTP.tokenNameKey, HTTP.tokenNameValue);
			data.append(HTTP.tokenValueKey, HTTP.tokenValueValue);
		}

		return axios
			.post(url, data, {
				baseURL: Constants.BASE_URL,
			})
			.then(response => {
				const responseData = response.data;

				HTTP.updateCSRFToken(response);

				return responseData;
			});
	}

	static get(url) {
		return axios.get(url, {
			baseURL: Constants.BASE_URL,
		});
	}
}
