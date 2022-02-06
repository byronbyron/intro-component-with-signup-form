import JustValidate from '/node_modules/just-validate/dist/just-validate.es.js';

const validation = new JustValidate('#form');

validation
  .addField('#first-name', [
    {
      rule: 'required',
      errorMessage: 'First name cannot be empty',
    },
  ])
  .addField('#last-name', [
    {
      rule: 'required',
      errorMessage: 'Last name cannot be empty',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Email cannot be empty',
    },
    {
      rule: 'email',
      errorMessage: 'Looks like this is not an email',
    },
  ])
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Password cannot be empty',
    },
  ]);
