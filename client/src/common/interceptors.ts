import HttpStatus from "http-status-codes";

import config from "../config";
import * as tokenService from "../services/token";
import RoutingList from "../utils/RoutingList";

const AUTHORIZATION_HEADER = "authorization";

/**
 * Build authorization header
 *
 * @param {string} accessToken
 * @returns {string}
 */
function getAuthorizationHeader(accessToken: string) {
  return `${accessToken}`;
}

/**
 * Interceptor to add Access Token header for all requests.
 *
 * @param {object} request
 * @returns {object}
 */
export function authorizationInterceptor(request: any) {
  const accessToken = tokenService.getAccessToken();

  if (accessToken && !request.headers[AUTHORIZATION_HEADER]) {
    request.headers[AUTHORIZATION_HEADER] = getAuthorizationHeader(accessToken);
  }

  return request;
}

/**
 * Interceptor to refresh Authorization header.
 *
 * @param {object} error
 * @returns {object}
 */
export async function unauthorizedResponseHandlerInterceptor(error: any) {
  if (!error.response) {
    return Promise.reject(error);
  }

  const  status  = error.response.status;

  if (status === HttpStatus.UNAUTHORIZED) {
    tokenService.clear();
    return redirectToLogin();
  }

  return Promise.reject(error);
}

/**
 * Redirects to the login page.
 *
 * @param {*} error
 */
export function redirectToLogin() {
  const loginUrl = `${config.authUrl}${RoutingList.login.index}`;

  window.location.href = loginUrl;
}
