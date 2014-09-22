/* jshint node: true */
module.exports = function(grunt){
    "use strict";

    grunt.registerTask("release", [
        "package",
        "s3:release",
        "changelog",
        //"generate_blog",
    ]);

};

