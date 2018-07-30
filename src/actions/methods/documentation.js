const package = require('../../../package.json');

module.exports = {
    
    documentation: () => {
        console.log(`
        ________  _______  _________  ________  ________     
        |\\   __  \\|\\  ___ \\|\\___   ___\\\\   __  \\|\\   __  \\    
        \\ \\  \\|\\  \\ \\   __/\\|___ \\  \\_\\ \\  \\|\\  \\ \\  \\|\\  \\   
         \\ \\   _  _\\ \\  \\_|/__  \\ \\  \\ \\ \\   _  _\\ \\  \\\\\\  \\  
          \\ \\  \\\\  \\\\ \\  \\_|\\ \\  \\ \\  \\ \\ \\  \\\\  \\\\ \\  \\\\\\  \\ 
           \\ \\__\\\\ _\\\\ \\_______\\  \\ \\__\\ \\ \\__\\\\ _\\\\ \\_______\\
            \\|__|\\|__|\\|_______|   \\|__|  \\|__|\\|__|\\|_______|

            
Package Version: ${package.version}

Convert styles from web to mobile with CSS to JSON for React Native
Enter "retro-react-native create" to start your strucutred styling with easy tools for generating files
Enter "retro-react-native generate" for any file to create that should be entered into your stylesheet creator
Enter "retro-react-native keyword-sort" remove keywords from a large file into a new one in a existing directory
The other folders like mixins are wrapper functions you can create over the styles in your other files

retro-react-native : Commands
├── documentation
├── create
├── generate <name-for-structured-styles-folder> <name-for-structured-styles-filename>
├── css-to-json <source-path-to-css-file> <destintation-path-to-json>
├── css-to-js <source-path-to-css-file> <destintation-path-to-js>
├── js-to-json <source-path-to-js-file> <destintation-path-to-json>
├── js-to-css <source-path-to-js-file> <destintation-path-to-css>
├── json-to-css <source-path-to-json-file> <destintation-path-to-css>
├── json-to-js <source-path-to-json-file> <destintation-path-to-js>
└── keyword-sort <keyword> <source-path-to-sort-js-file> <destintation-path-to-js>

retro-react-native : Alias Commands
├── docs ===  documentation
├── c ===  create
├── g ===  generate
├── c2j ===  css-to-json
├── c2js ===  css-to-js
├── j2c ===  json-to-css
├── js2c ===  js-to-css 
├── json2js ===   json-to-js
├── js2json ===  js-to-json
└── ks ===  keyword-sort
        `);
    }

};
