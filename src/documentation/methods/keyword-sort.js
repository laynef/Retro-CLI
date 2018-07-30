module.exports = {

    keywordSortDocumentation: () => {
        console.log(`
Filter out the large file that was converted in .js into smaller files.
Type in a keyword that you what to filter out of your large file and into a smaller destintion file that is already created.
This command will delete the styles with the keyword from the large file and put them into the destintation file.

Command:
retro-react-native keyword-sort <keyword> <source-path-to-large-js-file> <destintation-path-to-js-file>
        `);
    },

};
