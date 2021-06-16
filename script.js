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
export async function script(octokit, repository, { label, remove }) {
	const owner = repository.owner.login
	const repo = repository.name

	const issues = await octokit.request('GET /repos/{owner}/{repo}/issues', {
		repo,
		owner,
	});
	
	for (const issue of issues.data) {
		const issueNumber = issue.number
		
		if(remove) {
			await octokit.request('DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}', {
				issue_number: issueNumber,
				name: label,
				owner,
				repo,
			})
		} else {
			await octokit.request('POST /repos/{owner}/{repo}/issues/{issue_number}/labels', {
				issue_number: issueNumber,
				labels: [label],
				owner,
				repo,
			})
		}
	}	
}