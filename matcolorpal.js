var mColorPalettes = new Palettes();
function Palettes() {
    this.red = {
        Main50: "#ffebee",
        Main100: "#ffcdd2",
        Main200: "#ef9a9a",
        Main300: "#e57373",
        Main400: "#ef5350",
        Main500: "#f44336",
        Main600: "#e53935",
        Main700: "#d32f2f",
        Main800: "#c62828",
        Main900: "#b71c1c",
        Accent100: "#ff8a80",
        Accent200: "#ff5252",
        Accent400: "#ff1744",
        Accent700: "#d50000"
    };
    this.pink = {
        Main50: "#fce4ec",
        Main100: "#f8bbd0",
        Main200: "#f48fb1",
        Main300: "#f06292",
        Main400: "#ec407a",
        Main500: "#e91e63",
        Main600: "#d81b60",
        Main700: "#c2185b",
        Main800: "#ad1457",
        Main900: "#880e4f",
        Accent100: "#ff80ab",
        Accent200: "#ff4081",
        Accent400: "#f50057",
        Accent700: "#c51162"
    };
    this.purple = {
        Main50: "#f3e5f5",
        Main100: "#e1bee7",
        Main200: "#ce93d8",
        Main300: "#ba68c8",
        Main400: "#ab47bc",
        Main500: "#9c27b0",
        Main600: "#8e24aa",
        Main700: "#7b1fa2",
        Main800: "#6a1b9a",
        Main900: "#4a148c",
        Accent100: "#ea80fc",
        Accent200: "#e040fb",
        Accent400: "#d500f9",
        Accent700: "#aa00ff"
    };
    this.deepPurple = {
        Main50: "#ede7f6",
        Main100: "#d1c4e9",
        Main200: "#b39ddb",
        Main300: "#9575cd",
        Main400: "#7e57c2",
        Main500: "#673ab7",
        Main600: "#5e35b1",
        Main700: "#512da8",
        Main800: "#4527a0",
        Main900: "#311b92",
        Accent100: "#b388ff",
        Accent200: "#7c4dff",
        Accent400: "#651fff",
        Accent700: "#6200ea"
    };
    this.indigo = {
        Main50: "#e8eaf6",
        Main100: "#c5cae9",
        Main200: "#9fa8da",
        Main300: "#7986cb",
        Main400: "#5c6bc0",
        Main500: "#3f51b5",
        Main600: "#3949ab",
        Main700: "#303f9f",
        Main800: "#283593",
        Main900: "#1a237e",
        Accent100: "#8c9eff",
        Accent200: "#536dfe",
        Accent400: "#3d5afe",
        Accent700: "#304ffe"
    };
    this.blue = {
        Main50: "#e3f2fd",
        Main100: "#bbdefb",
        Main200: "#90caf9",
        Main300: "#64b5f6",
        Main400: "#42a5f5",
        Main500: "#2196f3",
        Main600: "#1e88e5",
        Main700: "#1976d2",
        Main800: "#1565c0",
        Main900: "#0d47a1",
        Accent100: "#82b1ff",
        Accent200: "#448aff",
        Accent400: "#2979ff",
        Accent700: "#2962ff"
    };
    this.lightBlue = {
        Main50: "#e1f5fe",
        Main100: "#b3e5fc",
        Main200: "#81d4fa",
        Main300: "#4fc3f7",
        Main400: "#29b6f6",
        Main500: "#03a9f4",
        Main600: "#039be5",
        Main700: "#0288d1",
        Main800: "#0277bd",
        Main900: "#01579b",
        Accent100: "#80d8ff",
        Accent200: "#40c4ff",
        Accent400: "#00b0ff",
        Accent700: "#0091ea"
    };
    this.cyan = {
        Main50: "#e0f7fa",
        Main100: "#b2ebf2",
        Main200: "#80deea",
        Main300: "#4dd0e1",
        Main400: "#26c6da",
        Main500: "#00bcd4",
        Main600: "#00acc1",
        Main700: "#0097a7",
        Main800: "#00838f",
        Main900: "#006064",
        Accent100: "#84ffff",
        Accent200: "#18ffff",
        Accent400: "#00e5ff",
        Accent700: "#00b8d4"
    };
    this.teal = {
        Main50: "#e0f2f1",
        Main100: "#b2dfdb",
        Main200: "#80cbc4",
        Main300: "#4db6ac",
        Main400: "#26a69a",
        Main500: "#009688",
        Main600: "#00897b",
        Main700: "#00796b",
        Main800: "#00695c",
        Main900: "#004d40",
        Accent100: "#a7ffeb",
        Accent200: "#64ffda",
        Accent400: "#1de9b6",
        Accent700: "#00bfa5"
    };
    this.green = {
        Main50: "#e8f5e9",
        Main100: "#c8e6c9",
        Main200: "#a5d6a7",
        Main300: "#81c784",
        Main400: "#66bb6a",
        Main500: "#4caf50",
        Main600: "#43a047",
        Main700: "#388e3c",
        Main800: "#2e7d32",
        Main900: "#1b5e20",
        Accent100: "#b9f6ca",
        Accent200: "#69f0ae",
        Accent400: "#00e676",
        Accent700: "#00c853"
    };
    this.lightGreen = {
        Main50: "#f1f8e9",
        Main100: "#dcedc8",
        Main200: "#c5e1a5",
        Main300: "#aed581",
        Main400: "#9ccc65",
        Main500: "#8bc34a",
        Main600: "#7cb342",
        Main700: "#689f38",
        Main800: "#558b2f",
        Main900: "#33691e",
        Accent100: "#ccff90",
        Accent200: "#b2ff59",
        Accent400: "#76ff03",
        Accent700: "#64dd17"
    };
    this.lime = {
        Main50: "#f9fbe7",
        Main100: "#f0f4c3",
        Main200: "#e6ee9c",
        Main300: "#dce775",
        Main400: "#d4e157",
        Main500: "#cddc39",
        Main600: "#c0ca33",
        Main700: "#afb42b",
        Main800: "#9e9d24",
        Main900: "#827717",
        Accent100: "#f4ff81",
        Accent200: "#eeff41",
        Accent400: "#c6ff00",
        Accent700: "#aeea00"
    };
    this.yellow = {
        Main50: "#fffde7",
        Main100: "#fff9c4",
        Main200: "#fff59d",
        Main300: "#fff176",
        Main400: "#ffee58",
        Main500: "#ffeb3b",
        Main600: "#fdd835",
        Main700: "#fbc02d",
        Main800: "#f9a825",
        Main900: "#f57f17",
        Accent100: "#ffff8d",
        Accent200: "#ffff00",
        Accent400: "#ffea00",
        Accent700: "#ffd600"
    };
    this.amber = {
        Main50: "#fff8e1",
        Main100: "#ffecb3",
        Main200: "#ffe082",
        Main300: "#ffd54f",
        Main400: "#ffca28",
        Main500: "#ffc107",
        Main600: "#ffb300",
        Main700: "#ffa000",
        Main800: "#ff8f00",
        Main900: "#ff6f00",
        Accent100: "#ffe57f",
        Accent200: "#ffd740",
        Accent400: "#ffc400",
        Accent700: "#ffab00"
    };
    this.orange = {
        Main50: "#fff3e0",
        Main100: "#ffe0b2",
        Main200: "#ffcc80",
        Main300: "#ffb74d",
        Main400: "#ffa726",
        Main500: "#ff9800",
        Main600: "#fb8c00",
        Main700: "#f57c00",
        Main800: "#ef6c00",
        Main900: "#e65100",
        Accent100: "#ffd180",
        Accent200: "#ffab40",
        Accent400: "#ff9100",
        Accent700: "#ff6d00"
    };
    this.deepOrange = {
        Main50: "#fbe9e7",
        Main100: "#ffccbc",
        Main200: "#ffab91",
        Main300: "#ff8a65",
        Main400: "#ff7043",
        Main500: "#ff5722",
        Main600: "#f4511e",
        Main700: "#e64a19",
        Main800: "#d84315",
        Main900: "#bf360c",
        Accent100: "#ff9e80",
        Accent200: "#ff6e40",
        Accent400: "#ff3d00",
        Accent700: "#dd2c00"
    };
    this.brown = {
        Main50: "#efebe9",
        Main100: "#d7ccc8",
        Main200: "#bcaaa4",
        Main300: "#a1887f",
        Main400: "#8d6e63",
        Main500: "#795548",
        Main600: "#6d4c41",
        Main700: "#5d4037",
        Main800: "#4e342e",
        Main900: "#3e2723"
    };
    this.grey = {
        Main50: "#fafafa",
        Main100: "#f5f5f5",
        Main200: "#eeeeee",
        Main300: "#e0e0e0",
        Main400: "#bdbdbd",
        Main500: "#9e9e9e",
        Main600: "#757575",
        Main700: "#616161",
        Main800: "#424242",
        Main900: "#212121"
    };
    this.blueGrey = {
        Main50: "#eceff1",
        Main100: "#cfd8dc",
        Main200: "#b0bec5",
        Main300: "#90a4ae",
        Main400: "#78909c",
        Main500: "#607d8b",
        Main600: "#546e7a",
        Main700: "#455a64",
        Main800: "#37474f",
        Main900: "#263238"
    };

    this.colorArray = [this.red, this.pink, this.purple,
        this.deepPurple, this.indigo, this.blue,
        this.lightBlue, this.cyan, this.teal,
        this.green, this.lightGreen, this.lime,
        this.yellow, this.amber,this.orange,
        this.deepOrange, this.brown, this.blueGrey, this.grey];
}

