// Tarea para minimizar y ofuscar archivos HTML
gulp.task('minify:html', () => {
  return gulp
    .src('**/*.html', { cwd: './' }) // Carpeta de origen: carpeta raíz
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist')); // Carpeta de destino: dist
});

// Tarea para minimizar y ofuscar archivos CSS
gulp.task('minify:css', () => {
  return gulp
    .src('**/*.css', { cwd: './' }) // Carpeta de origen: carpeta raíz
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist')); // Carpeta de destino: dist
});

// Tarea para minimizar y ofuscar archivos JavaScript
gulp.task('minify:js', () => {
  return gulp
    .src('**/*.js', { cwd: './' }) // Carpeta de origen: carpeta raíz
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist')); // Carpeta de destino: dist
});
