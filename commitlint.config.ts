import { RuleConfigSeverity, type UserConfig } from "@commitlint/types"

const Configuration: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "header-max-length": () => [0, "always", 72],
        "subject-case": [0],
        "scope-enum": [
            RuleConfigSeverity.Error,
            "always",
            [
                "components",
                "styles",
                "types",
                "tests",
                "docs",
                "assets",
                "hooks",
                "routes",
                "config",
                "utils",
                "api",
                "perf",
                "ci",
                "deps"
            ]
        ]
    }
}

export default Configuration