# Retro React Native

## Convert CSS styles into React native styles

### How is that possible

Retro will turn your css into json then filter the json for React native styles only

![YAP](https://i.kym-cdn.com/entries/icons/original/000/023/967/obiwan.jpg)

- Well slightly Oboe Wan, no transforms supported at this time
- Any styles that do not fit React Native will be deleted
- Check out Bootstrap 4 conversion into React Native Styles

Check React Native Styling
- https://github.com/vhpoet/react-native-styling-cheat-sheet

### To Install
```
npm install
npm install -g @lfaler/retro-react-native
```

## Documentation
```
retro
```

## To Run

- You can choose to use JSON format or a JS exported Object
```
// JSON to JS
retro js-to-json <full-created-js-path> <full-destintation-path-json>

// JS to JSON
retro json-to-js <full-created-json-path> <full-destintation-path-js>
```

### CSS to JS
```
retro css-to-js <full-path-to-css> <full-destintation-path-json>

// Then import your js json object in your Stylesheet creator
import retro from '<YOUR-FILE-PATH>';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create(retro);

```

### JS to CSS
```
retro js-to-css <full-path-to-json> <full-destintation-path-css>
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
