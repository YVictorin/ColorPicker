# Color Picker


_🎨 A simple React color picker component_

## Install Packages

```bash
npm install
```

## Features

- Simple and lightweight 🎨
- Uses React hooks
- Displays selected color dynamically
- Easy to integrate

## Example Usage

```jsx
import ColorPicker from "./ColorPicker";

function App() {
    return (
        <div>
            <h1>Pick a Color</h1>
            <ColorPicker />
        </div>
    );
}

export default App;
```

## Components

### `ColorPicker`
A simple color picker component that allows users to select a color using an input field.

#### Props

- `amount` (optional, number) – Currently unused but available for extension.

### `ColorDisplay`
A display component that shows the selected color.

#### Props

- `color` (string) – The selected color, used to set the background color dynamically.

## Development

To run the project locally:

```bash
git clone https://github.com/YVictorin/ColorPicker.git
cd color-picker-react
npm install
npm run dev
```

## Contributing

All contributions are welcome! Please submit a pull request or open an issue.



