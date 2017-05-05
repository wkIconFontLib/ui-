var gulp = require('gulp');
var sftp = require('gulp-sftp');
// 自动化发布  执行命令 发布买五金测试环境
gulp.task('publish', function () {
  return gulp.src('src/**')
    .pipe(sftp({
      host: '192.168.2.74',
      user: 'root',
      port: 22,
      pass: 'wk99114*(',
      remotePath: '/usr/local/nginx/dptwx/mcUILib' // 饶商测试环境目录
    }));
});

// sass 打包编译

