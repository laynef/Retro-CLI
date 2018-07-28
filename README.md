# Retro React Native

Retro React Native is a quick easy way to have structured styling in your React Native code base.
It will convert web CSS to React Native styles in JSON. You can generate a structured directory for yourself
through 'retro-react-native create'

Once this is done you can generate files into the structured styling folder with auto-imports for your file names.
These must be files that will enter your stylesheet creators while the other files that you use can be used to 
add mixin functions for your styling like SASS frameworks do. Those files can be imported into your styling files to
wrap your values to change and morph. The freedom is yourself to do what you will with this file structure. However
their are tools that may help.

## Structured Styles

### Create your style folder
```
retro-react-native create
```

### Generate a file with auto-imports
```
retro-react-native generate <folder-in-styles> <new-file-name>
```

If you don't want to import a path to this file into your style creator don't use 'generate'


## Convert CSS styles into React native styles

Retro will turn your css into json then filter the json for React native styles only

### How is that possible

![YAP](https://i.kym-cdn.com/entries/icons/original/000/023/967/obiwan.jpg)

- Well slightly Oboe Wan, any styles that do not fit React Native will be deleted
- Check out Bootstrap 4 conversion into React Native Styles

Check React Native Styling
- https://github.com/vhpoet/react-native-styling-cheat-sheet

### To Install
```
npm install -g @lfaler/retro-react-native
```

## Documentation
```
retro-react-native
```

## To Run

- You can choose to use JSON format or a JS exported Object
```
// JSON to JS
retro-react-native js-to-json <full-created-js-path> <full-destintation-path-json>

// JS to JSON
retro-react-native json-to-js <full-created-json-path> <full-destintation-path-js>
```

### CSS to JS
```
retro-react-native css-to-js <full-path-to-css> <full-destintation-path-js>

// Then import your js json object in your Stylesheet creator
import retro from '<YOUR-FILE-PATH>';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(retro);

```

### JS to CSS
```
retro-react-native js-to-css <full-path-to-js> <full-destintation-path-css>
```

## What do I do with this huge file?

I had this same problem. I generated a new file using 'generate' then filtered out styles
from the large conversion into the new small file I generated from one single styling purpose.
You can pull out the styles from that large file with keywords in that file into their new destintion file.

### Sort Out Big Style Files By Keyword
```
retro-react-native keyword-sort <keyword> <big-source-file-of-react-native-styles> <already-created-destitination-file-name>
```

## Examples

### Bootstrap 4

- Bootstrap 4 CSS File: https://github.com/laynef/Retro-CLI/blob/master/test/bootstrap4.css
- Retro JSON File: https://github.com/laynef/Retro-CLI/blob/master/test/retro-bootstrap.json

To test it on an existing example
```
git clone https://github.com/laynef/Retro-CLI.git
cd example
yarn install
react-native run-ios
```

The bootstrap library is now used on React Native
Happy coding!
