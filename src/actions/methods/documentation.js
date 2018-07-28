module.exports = {
    
    documentation: () => {
        console.log(`

RETRO CLI

Convert styles from web to mobile with CSS to JSON for React Native
Enter "retro create" to start your strucutred styling with easy tools for generating files
Enter "retro generate" for any file to create that should be entered into your stylesheet creator
Enter "retro keyword-sort" remove keywords from a large file into a new one in a existing directory
The other folders like mixins are wrapper functions you can create over the styles in your other files

// Commands
retro documentation
retro create
retro generate <name-for-structured-styles-folder> <name-for-structured-styles-filename>
retro css-to-json <source-path-to-css-file> <destintation-path-to-json>
retro css-to-js <source-path-to-css-file> <destintation-path-to-js>
retro js-to-json <source-path-to-js-file> <destintation-path-to-json>
retro js-to-css <source-path-to-js-file> <destintation-path-to-css>
retro json-to-css <source-path-to-json-file> <destintation-path-to-css>
retro json-to-js <source-path-to-json-file> <destintation-path-to-js>
retro keyword-sort <keyword> <source-path-to-sort-js-file> <destintation-path-to-js>

// Alias
retro docs === retro documentation
retro c === retro create
retro g === retro generate
retro c2j === retro css-to-json
retro c2js === retro css-to-js
retro j2c === retro json-to-css
retro js2c === retro js-to-css 
retro json2js ===  retro json-to-js
retro js2json === retro js-to-json
retro ks === retro keyword-sort
    
        `);
    }

};
