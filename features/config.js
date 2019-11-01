/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
const express = require('express');
const path = require('path');


module.exports = function (controller) {

    // make public/index.html available as localhost/index.html
    // by making the /public folder a static/public asset
    controller.publicFolder('/', path.join(__dirname, '..', 'public'));
    var version = process.env.npm_package_version;
    controller.webserver.get('/info', (req, res) => {
        res.send('{"version": "$version"}'.replace('$version',version));
    });
    console.log('Chat with me: http://localhost:' + (process.env.PORT || 3000));
}