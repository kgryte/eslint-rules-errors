'use strict';

var rules = {};

/**
* RULE: comma-dangle
*	Never allow dangling commas. See [comma-dangle]{@link http://eslint.org/docs/rules/comma-dangle}.
*/
rules[ 'comma-dangle' ] = [ 2, 'never' ];

/**
* RULE: no-cond-assign
*	Never allow assignment in a conditional statement. See [no-cond-assign]{@link http://eslint.org/docs/rules/no-cond-assign}.
*/
rules[ 'no-cond-assign' ] = 2;

/**
* RULE: no-console
*	Warn when using `console` in Node. Use a logger instead. See [no-console]{@link http://eslint.org/docs/rules/no-console}.
*/
rules[ 'no-console' ] = 1;

/**
* RULE: no-constant-condition
*	Never allow constant expressions in conditions. See [no-constant-condition]{@link http://eslint.org/docs/rules/no-constant-condition}.
*/
rules[ 'no-constant-condition' ] = 2;

/**
* RULE: no-control-regex
*	Never allow control characters in regular expressions. See [no-control-regex]{@link http://eslint.org/docs/rules/no-control-regex}.
*/
rules[ 'no-control-regex' ] = 2;

/**
* RULE: no-debugger
*	Never allow the `debugger` statement. See [no-debugger]{@link http://eslint.org/docs/rules/no-debugger}.
*/
rules[ 'no-debugger' ] = 2;

/**
* RULE: no-dupe-args
*	Never allow duplicate parameter names when not in `strict mode`. See [no-dupe-args]{@link http://eslint.org/docs/rules/no-dupe-args}.
*/
rules[ 'no-dupe-args' ] = 2;

/**
* RULE: no-dupe-keys
*	Never allow duplicate keys in object literals, as doing so can lead to unexpected behavior. See [no-dupe-keys]{@link http://eslint.org/docs/rules/no-dupe-keys}.
*/
rules[ 'no-dupe-keys' ] = 2;

/**
* RULE: no-duplicate-case
*	Never allow duplicate case labels. See [no-duplicate-case]{@link http://eslint.org/docs/rules/no-duplicate-case}.
*/
rules[ 'no-duplicate-case' ] = 2;

/**
* RULE: no-empty-character-class
*	Never allow empty character classes in regular expressions. See [no-empty-character-class]{@link http://eslint.org/docs/rules/no-empty-character-class}.
*/
rules[ 'no-empty-character-class' ] = 2;

/**
* RULE: no-empty
*	Never allow empty block statements, including when using `try/catch`. See [no-empty]{@link http://eslint.org/docs/rules/no-empty}.
*/
rules[ 'no-empty' ] = 2;

/**
* RULE: no-ex-assign
*	Never allow reassignment of an exception parameter in a `catch` block. See [no-ex-assign]{@link http://eslint.org/docs/rules/no-ex-assign}.
*/
rules[ 'no-ex-assign' ] = 2;

/**
* RULE: no-extra-boolean-cast
*	Never allow extra boolean casts in an `if` statement. See [no-extra-boolean-cast]{@link http://eslint.org/docs/rules/no-extra-boolean-cast}.
*/
rules[ 'no-extra-boolean-cast' ] = 2;

/**
* RULE: no-extra-parens
*	Never allow unnecessary parentheses around function expressions. See [no-extra-parens]{@link http://eslint.org/docs/rules/no-extra-parens}.
*/
rules[ 'no-extra-parens' ] = [ 2, 'functions' ];

/**
* RULE: no-extra-semi
*	Never allow unnecessary extra semicolons. See [no-extra-semi]{@link http://eslint.org/docs/rules/no-extra-semi}.
*/
rules[ 'no-extra-semi' ] = 2;

/**
* RULE: no-func-assign
*	Never allow reassignment of a FunctionDeclaration. See [no-func-assign]{@link http://eslint.org/docs/rules/no-func-assign}.
*/
rules[ 'no-func-assign' ] = 2;

/**
* RULE: no-inner-declarations
*	Never allow function or variable declarations within inner block scopes. See [no-inner-declarations]{@link http://eslint.org/docs/rules/no-inner-declarations}.
*/
rules[ 'no-inner-declarations' ] = [ 2, 'both' ];

/**
* RULE: no-invalid-regexp
*	Never allow invalid regular expressions. See [no-invalid-regexp]{@link http://eslint.org/docs/rules/no-invalid-regexp}.
*/
rules[ 'no-invalid-regexp' ] = 2;

/**
* RULE: no-irregular-whitespace
*	Never allow irregular whitespace. See [no-irregular-whitespace]{@link http://eslint.org/docs/rules/no-irregular-whitespace}.
*/
rules[ 'no-irregular-whitespace' ] = 2;

/**
* RULE: no-negated-in-lhs
*	Never allow a negated left-hand-side argument when using the `in` operator. See [no-negated-in-lhs]{@link http://eslint.org/docs/rules/no-negated-in-lhs}.
*/
rules[ 'no-negated-in-lhs' ] = 2;

/**
* RULE: no-obj-calls
*	Never allow calling of global objects as functions. See [no-obj-calls]{@link http://eslint.org/docs/rules/no-obj-calls}.
*/
rules[ 'no-obj-calls' ] = 2;

/**
* RULE: no-regex-spaces
*	Never allow multiple consecutive spaces within a regular expression. See [no-regex-spaces]{@link http://eslint.org/docs/rules/no-regex-spaces}.
*/
rules[ 'no-regex-spaces' ] = 2;

/**
* RULE: no-sparse-arrays
*	Never allow a sparse array to be initialized using an array literal and commas. See [no-sparse-arrays]{@link http://eslint.org/docs/rules/no-sparse-arrays}.
*/
rules[ 'no-sparse-arrays' ] = 2;

/**
* RULE: no-unreachable
*	Never allow the presence of unreachable code. See [no-unreachable]{@link http://eslint.org/docs/rules/no-unreachable}.
*/
rules[ 'no-unreachable' ] = 2;

/**
* RULE: use-isnan
*	Never allow direct comparison with `NaN`. See [use-isnan]{@link http://eslint.org/docs/rules/use-isnan}.
*/
rules[ 'use-isnan' ] = 2;

/**
* RULE: valid-jsdoc
*	Require valid JSDoc. See [valid-jsdoc]{@link http://eslint.org/docs/rules/valid-jsdoc}.
*/
rules[ 'valid-jsdoc' ] = 2;

/**
* RULE: valid-typeof
*	Only allow the result of `typeof` to be compared against a select subset of known strings (e.g., 'string', 'undefined', etc.). See [valid-typeof]{@link http://eslint.org/docs/rules/valid-typeof}.
*/
rules[ 'valid-typeof' ] = 2;

/**
* RULE: no-unexpected-multiline
*	Prevent unexpected multiline statements. See [no-unexpected-multiline]{@link http://eslint.org/docs/rules/no-unexpected-multiline}.
*/
rules[ 'no-unexpected-multiline' ] = 2;


// EXPORTS //

module.exports = rules;
