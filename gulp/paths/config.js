// =========================== Пути к файлам =============================



const path = {

    options: {
        sass : true,                     // Использовать sass
        pug  : true,                     // Использовать pug
    },    

    source: { // Пути исходников

        folder: 'src', // Папка где лежат исходника
        pug: 'pug', // Папка с шаблонами 
        sass: 'sass', // Папка со стилями
        css: 'css', // Папка со стилями
        libs: 'libs', // Папка с библиотеками
        js: 'js', // Папка с модулями js
        sprite: 'sprite', // Папка с svg для спрайта
        fonts: 'fonts', // Папка со шрифтами
        img: 'images', // Папка с изображениями
        tasks: 'gulp/tasks', // Папка с gulp тасками

        jsLibs() {

	    	var path = this.folder + '/' + this.libs + '/';

	        return [
	            path + 'jquery-3.3.1.min.js',

                path + 'imagesloaded.pkgd.min.js',       
	            path + 'masonry.pkgd.min.js',
                path + 'noframework.waypoints.min.js',
                path + 'picturefill.min.js',
	            path + 'velocity.min.js'
	        ];               
	    },
        cssLibs() {

            var path = this.folder + '/' + this.libs + '/';


            return [
                path + 'animate.css'
            ]
        }
    },

    temp: { // Пути готовых файлов

        folder: 'temp', // Папка где лежат готовые файлы
        css: 'css', // Папка со стилями
        js: 'js', // Папка со скриптами
        sprite: 'img', // Папка с готовым svg спрайтом
        fonts: 'fonts', // Папка со шрифтами
        img: 'images' // Папка с изображениями

    },


    dist: { // Файлы для продакшена
        folder: 'dist', // Папка где лежат файлы продакшена
        css: 'css', // Папка со стилями
        js: 'js', // Папка со скриптами
        img: 'images', // Папка со картинками
        fonts: 'fonts', // Папка со шрифтами
        mobile: 'mobile', // В эту папку будет складываться мобильная версия
        desktop: 'desktop', // В эту папку будет складываться десктопная версия
        sep: 'asia', // В эту папку будут складываться папки с мобильной и десктопной версией
        resp: 'responsive', // В эту папку будет складываться адаптивная версия
    }    
};


module.exports = path;