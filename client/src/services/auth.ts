import http from "../utils/http";

import config from "./../config";

import * as tokenService from "../services/token";

/**
 * Log out of the system.
 *
 * @param {string} refreshToken
 */
export async function logout(body = {}) {
  tokenService.clear();

  // const url = `${config.baseUrl}${config.endPoints.auth.logout}`;

  // return http.post(url, { body: { ...body, from: window.location.href } });
}

/**
 * Login of the system.
 *
 * @param {object} body
 */
export async function login(body: { email: string; password: string }) {
  tokenService.clear();
  const url = `${config.baseUrl}${config.endPoints.auth.login}`;
  return http.post(url, body);
}