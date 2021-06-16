// @ts-check

/**
 * Add or delete a label for all the issues of a repository
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {object} options
 * @param {string} options.label Select the label you want to be added (or removed)
 * @param {boolean} [options.remove] Select if you want the label to be removed (instead of added)
 */
export async function script(octokit, repository, { label, remove }) {}
