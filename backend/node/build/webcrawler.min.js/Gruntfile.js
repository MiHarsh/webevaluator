module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    copy: {
      build: {
        src: ["**"],
        dest: "build/<%= pkg.name %>.min.js",
        expand: true,
      },
    },
    clean: {
      build: {
        src: "build",
      },
    },
  });
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.registerTask(
    "build",
    "Compiles all the assets and copies the file to build directory",
    ["clean", "copy"]
  );
};
