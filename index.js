var fs = require('fs');

function makeDir(dir) {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}

function MakeDirWebpackPlugin(options) {
  if(!options || !options.dirs)
    throw new Error('options and options.dirs must be specified');
  
  this.dirs = options.dirs;
}

MakeDirWebpackPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', () => {
    this.dirs.forEach((dirSpec) => {
      makeDir(dirSpec.path);
    });
  });
};

module.exports = MakeDirWebpackPlugin;