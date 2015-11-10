var both = ['client', 'server'];
var client = 'client';
var server = 'server';

Package.describe({
    name: "wieldo:api-check",
    summary: "Validate the api to your functions to help people use them correctly. This is pretty much React's propTypes without React.",
    version: "7.5.5",

    documentation: 'README.md',
    git: 'https://github.com/wieldo/api-check.git'
});

Package.onUse(function (api) {

    api.versionsFrom("METEOR@1.0");

    api.addFiles([
        'dist/api-check.js'
    ], client);

});