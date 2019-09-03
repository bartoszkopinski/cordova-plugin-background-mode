
var fs = require("fs");
var path = require("path");
var utilities = require("./utilities");

module.exports = {

    addFabricBuildToolsGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle +=  [
            "",
            "// Cordova-background-mode-plugin - Start ",
            "buildscript {",
            "    repositories {",
            "        mavenCentral()",
            "    }",
            "    dependencies {",
            "        classpath 'me.tatarka:gradle-retrolambda:3.7.0'",
            "    }",
            "}",
            "",
            "apply plugin: 'me.tatarka.retrolambda'",
            "// Cordova-background-mode-plugin - End",
        ].join("\n");

        utilities.writeBuildGradle(buildGradle);
    },

    removeFabricBuildToolsFromGradle: function() {

        var buildGradle = utilities.readBuildGradle();

        buildGradle = buildGradle.replace(/\n\/\/ Cordova-background-mode-plugin - Start[\s\S]*\/\/ Cordova-background-mode-plugin - End/, "");

        utilities.writeBuildGradle(buildGradle);
    }
};
