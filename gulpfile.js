var gulp = require('gulp');
// var argv = require('yargs').argv;
var paths = require('./gulp/gulp.config.json');

//checar con load plugins
// var jpegoptim = require('imagemin-jpegoptim');
// var pngquant = require('imagemin-pngquant');
// var optipng = require('imagemin-optipng');
// var imageResize = require('gulp-image-resize');
// var uncss = require('gulp-uncss');
// var minify = require('gulp-minify');
//checar con load plugins

// var sass = require('gulp-sass');
var $ = require('gulp-load-plugins')();
// var htmlreplace = require('gulp-html-replace');


gulp.task('default', ['watch','jade','sass']);

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.jade, ['jade', 'sass']);
});

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe($.plumber())
    .pipe($.sass({sourceComments:'normal'}))
    .pipe($.autoprefixer('last 2 version'))
    .pipe(gulp.dest(function(file) {
      return file.base; 
    }))
    .pipe($.size());
});

gulp.task('jade', function () {
  return gulp.src(paths.jade)
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest(function(file) {
      return file.base; 
    }))
});

// gulp.task('styles', function () {
//   return gulp.src([
//       'src/client/bower_components/pure/pure-min.css',
//       'src/client/bower_components/pure/grids-responsive-min.css',
//       'src/client/bower_components/components-font-awesome/css/font-awesome.min.css',
//       'src/client/common/css/fontface.css',
//       'src/client/common/css/loading/loading.css',
//       'src/client/common/css/buttons.css',
//       'src/client/common/css/above-the-fold.css',
//       'src/client/common/css/main.css',
//       'src/client/common/css/media-query.css',
//       'src/client/common/css/loading/loading.css'
//     ])
//     .pipe($.concat('main.css'))
//     .pipe($.rename({suffix: '.min'}))
//     .pipe(uncss({
//         html: ['index.html', 'dist/app/**/*.html']
//     }))
//     .pipe($.minifyCss())
//     .pipe(gulp.dest('dist/common/css'))
//     // .pipe($.minifyCss())
//     // .pipe(gulp.dest('dist/common/css'))
//     .pipe($.notify({message: 'Styles task complete'}));
// });

// gulp.task('above', function () {
//   return gulp.src([
//       'src/client/common/css/above-the-fold.css',
//     ])
//     .pipe($.concat('above.css'))
//     .pipe($.rename({suffix: '.min'}))
//     .pipe($.minifyCss())
//     .pipe(gulp.dest('dist/common/css'))
//     .pipe($.notify({message: 'Above task complete'}));
// });
  
// gulp.task('scripts-above',function(){
//   var aboveList = [
//   "src/client/bower_components/angular/angular.js",
//   "src/client/bower_components/angular-loader/angular-loader.js",
//     "src/client/bower_components/underscore/underscore-min.js",
//   "src/client/bower_components/ng-underscore/build/ng-underscore.min.js",
//   "src/client/bower_components/angular-ui-router/release/angular-ui-router.min.js",
//   "src/client/bower_components/angular-resource/angular-resource.min.js",
//   "src/client/bower_components/angular-animate/angular-animate.min.js",
//   "src/client/bower_components/restangular/dist/restangular.min.js",
//   "src/client/bower_components/angular-local-storage/dist/angular-local-storage.min.js",
//   "src/client/app/layout/layout.module.js",
//   "src/client/app/app.module.js",
//   "src/client/app/core/core.module.js",
//   "src/client/app/layout/shell.js",
//   "src/client/app/core/config.js",
//   "src/client/app/splash/splash.controller.js"
//   ];

//   return gulp.src(aboveList)
//         .pipe($.concat('above.js'))
//         // .pipe($.rename({suffix: '.min'}))
//         .pipe($.minify())
//         .pipe(gulp.dest('dist/common/js'))
//         .pipe($.notify({message: 'Scripts Above task complete'}));


// });

// //Scripts
// gulp.task('scripts', function () {
//     var scriptList = [ 
//     "src/client/app/storage/storage.module.js",
//     "src/client/app/core/initialize.js",
//     "src/client/common/js/ng-file-upload.min.js",
//     "src/client/common/js/moment.js",
//     "src/client/app/core/conekta/conekta.factory.js",
//     "src/client/app/core/parse/production.headers.factory.js",
//     "src/client/app/core/parse/parse.factory.js",
//     "src/client/app/core/parse/sepomex.factory.js",
//     "src/client/app/core/user/user.api.factory.js",
//     "src/client/app/core/order/order.api.js",
//     "src/client/app/storage/storage.service.js",
//     "src/client/app/login/loginForms.directive.js",
//     "src/client/app/login/login.controller.js",
//     "src/client/app/logout/logout.controller.js",
//     "src/client/app/login/register.controller.js",
//     "src/client/app/registration/registration.controller.js",
//     "src/client/app/registration/profile/profile.controller.js",
//     "src/client/app/registration/baby/baby.controller.js",
//     "src/client/app/registration/bask/bask.controller.js",
//     "src/client/app/registration/shipping/shipping.controller.js",
//     "src/client/app/registration/mobile/mobile.controller.js",
//     "src/client/app/registration/confirmation/confirmation.controller.js",
//     "src/client/app/registration/response/response.controller.js",
//     "src/client/app/registration/charge/charge.controller.js",
//     "src/client/app/address/newAddress.directive.js",
//     "src/client/app/address/fields.directive.js",
//     "src/client/app/baby/baby.directive.js",
//     "src/client/app/payment/cardForm.directive.js",
//     "src/client/app/payment/validateCard.directive.js",
//     "src/client/app/steps/registration.buttons.directive.js",
//     "src/client/app/core/baby/baby.api.js",
//     "src/client/app/core/address/address.api.js",
//     "src/client/app/core/review/review.api.js",
//     "src/client/app/core/mobile/mobile.api.js",
//     "src/client/app/core/invoice/invoice.api.js",
//     "src/client/app/core/kit/kit.api.js",
//     "src/client/app/home/home.controller.js",
//     "src/client/app/dashboard/dashboard.controller.js",
//     "src/client/app/dashboard/profile/profile.controller.js",
//     "src/client/app/dashboard/babies/babies.controller.js",
//     "src/client/app/dashboard/baby/baby.controller.js",
//     "src/client/app/dashboard/bask/bask.controller.js",
//     "src/client/app/dashboard/coupon/coupon.controller.js",
//     "src/client/app/dashboard/friends/friends.controller.js",
//     "src/client/app/dashboard/history/history.controller.js",
//     "src/client/app/dashboard/invoice/invoice.controller.js",
//     "src/client/app/dashboard/mobile/mobile.controller.js",
//     "src/client/app/dashboard/payment/payment.controller.js",
//     "src/client/app/dashboard/shipping/shipping.controller.js",
//     "src/client/app/dashboard/subscription/subscription.controller.js",
//     "src/client/app/conditions/conditions.controller.js",
//     "src/client/app/privacy/privacy.controller.js",
//     "src/client/app/dashboard/avatar/avatar.directive.js",
//     "src/client/app/mobile/mobile.directive.js",
//     "src/client/app/coupon/coupon.directive.js",
//     "src/client/app/mobile/code.directive.js",
//     "src/client/app/invoice/invoice.directive.js",
//     "src/client/app/upload/upload.directive.js",
//     ];
//     return gulp.src(scriptList)
//         .pipe($.concat('main.js'))
//         .pipe($.rename({suffix: '.min'}))
//         .pipe($.uglify({mangle:false}))
//         .pipe(gulp.dest('dist/common/js'))
//         .pipe($.notify({message: 'Scripts task complete'}));
// });

// //Images
// gulp.task('images', function () {
//   return gulp.src('src/client/common/images/*')
//     .pipe($.cache($.imagemin({optimizationLevel: 3, progressive: true, interlaced: true})))
//     .pipe(gulp.dest('dist/common/images'))
//     .pipe($.notify({message: 'Images task complete'}));
// });

// gulp.task('copyfiles', function () {
//   gulp.src('src/client/app/**/*.html')
//     .pipe(gulp.dest('dist/app'));
//   gulp.src('src/client/app/lang/*.json')
//     .pipe(gulp.dest('dist/app/lang'));
//   gulp.src('src/client/common/css/fonts/**')
//     .pipe(gulp.dest('dist/css/fonts'));
//   gulp.src('src/client/common/css/css-images/**')
//     .pipe(gulp.dest('dist/common/css/css-images'));
//   gulp.src('src/client/bower_components/components-font-awesome/fonts/*')
//     .pipe(gulp.dest('dist/fonts'));
// });

// gulp.task('indexhtml', function () {
//   gulp.src('src/client/index.html')
//       .pipe(htmlreplace({
//           'css': 'common/css/main.min.css',
//           'js': 'common/js/main.min.js',
//           'above-js': 'common/js/above-min.js'
//       }))
//       .pipe(gulp.dest('dist/'));
// });


// // gulp.task('critical', function () {
// //   critical.generate({
// //       base: 'dist/',
// //       src: 'index.html',
// //       dest: 'common/css/critical.css',
// //       minify: true
// //     }, function(err, output){
// //       critical.inline({
// //           base: 'dist/',
// //           src: 'index.html',
// //           dest: 'index-critical.html',
// //           minify: true
// //       });        
// //     });
// // });

// // Clean
// gulp.task('clean', function () {
//   return gulp.src(['dist'], { read: false }).pipe($.clean());
// });

// gulp.task('build', ['clean'], function () {
//   gulp.start('styles','above', 'scripts','scripts-above', 'images','copyfiles','indexhtml');
// });




