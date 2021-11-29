import { Linter } from 'eslint';

const SEVERITY = ['success', 'warning', 'error'];

const checkRules = (name, rule) => {
  const linter = new Linter();
  linter.defineRule(name, rule);

  return (code, rulesOpt) => {
    const results = linter.verify(code, {
      parserOptions: { ecmaVersion: 2018 },
      rules: rulesOpt,
    });
    return results[0] ? `${SEVERITY[results[0].severity]}: ${results[0].message}` : SEVERITY[0];
  }
}

const testTitle = (rule, code) => `\nrule: ${JSON.stringify(rule, null, 2)},\ncode: ${code}`;

const runTest = (title, rulePlugin, { valid, inValid }) => {
  // set verify eco
  const verify = checkRules(title, rulePlugin);

  describe(`${title} #rule`, () => {
    // valid case
    for (const { code, rule } of valid) {
      const st = testTitle(rule, code);
      test(st, () => {
        // Act
        const result = verify(code, rule);
        // Assert
        expect(result).toEqual(SEVERITY[0]);
      })
    }
    // invalid case
    for (const { code, rule } of inValid) {
      const st = testTitle(rule, code);
      test(st, () => {
        // Act
        const result = verify(code, rule);
        // Assert
        expect(result).not.toEqual(SEVERITY[0]);
      })
    }
  });
}

export { runTest };
