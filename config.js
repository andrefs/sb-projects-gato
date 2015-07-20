exports.config = {
    project:{
        title         : 'Botões Gato Fedorento',
        description   : 'As melhores frases de Gato Fedorento!',
        url           : 'http://gato.botoes.co',
        //external_link : 'http://www.facebook.com/brunoaleixo',
        facebook: {
        },
        google: {
        }
    },
    partials: {
        footer: '<a href="mailto:andrefs@andrefs.com">andré santos, joão ferreira <i class="fa fa-envelope"></i></a>'
    },
    manifest : {
        version: 'v1',
        filePath: './',
        fileName: 'manifest.json'
    },
    sourcesPath       : './sources',
    soundsPath        : './sounds',
    tmpPath           : './tmp',
    defaultClipMargin : '2',
    soundEditCommand  : 'audacity'
};
