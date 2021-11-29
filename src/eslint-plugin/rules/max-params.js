export default {
  meta: {
    docs: {
      description: 'enforce a maximum number of parameters in function definitions',
    },
    messages: {
      excced: 'has too many parameters ({{count}}). Maximum allowed is {{max}}.',
    },
  },
  create: (context) => ({
    [['FunctionDeclaration', 'ArrowFunctionExpression', 'FunctionExpression']](node) {
      const max = context.options[0]?.max || 3;
      const count = node.params.length;
      if (count > max) {
        context.report({
          node,
          messageId: 'excced',
          data: { count, max },
        });
      }
    },
  }),
};