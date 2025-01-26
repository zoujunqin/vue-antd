export default {
    extends: ['@commitlint/config-conventional'],
    'type-enum': [
        2,
        'always',
        [
            'feat',
            'fix',
            'docs',
            'style',
            'refactor',
            'perf',
            'test',
            'chore',
            'revert'
        ]
    ]
}
