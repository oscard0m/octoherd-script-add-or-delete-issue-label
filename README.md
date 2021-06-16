# octoherd-script-add-or-delete-issue-label

> Add or delete a label for all the issues of a repository

[![@latest](https://img.shields.io/npm/v/octoherd-script-add-or-delete-issue-label.svg)](https://www.npmjs.com/package/octoherd-script-add-or-delete-issue-label)
[![Build Status](https://github.com/oscard0m/octoherd-script-add-or-delete-issue-label/workflows/Test/badge.svg)](https://github.com/oscard0m/octoherd-script-add-or-delete-issue-label/actions?query=workflow%3ATest+branch%3Amain)

## Usage

Minimal usage

```js
npx octoherd-script-add-or-delete-issue-label \
  --label my-awesome-label
```

Pass all options as CLI flags to avoid user prompts

```js
npx octoherd-script-add-or-delete-issue-label \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "oscard0m/*" \
  --label my-awesome-label \
  --remove undefined
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                 |
| ---------------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--label`                    | string           | **Required.** Select the label you want to be added (or removed)                                                                                                                                                                            |
| `--remove` or `--no-remove`  | boolean          | Select if you want the label to be removed (instead of added)                                                                                                                                                                               |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                         |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                 |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
