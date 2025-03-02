# Slider Play

## 📌 Overview
This project is a simple **React application** built using **TypeScript** and **React Aria Components**. It features a **custom form** that includes:
- A **slider** for selecting a numeric value.
- A **number input field** to manually enter values.
- **Buttons** for submitting and clearing the form.
- Various **button variants** showcasing different styles.

## 🚀 Features
- **Interactive Slider & Number Input**
- **Controlled State Synchronization**
- **Accessible Button Components**
- **Form Handling with Reset & Submission**
- **Styled Using CSS Modules**

## 📂 Project Structure
```
📦 src
 ┣ 📂 components
 ┃ ┣  📂 Button
 ┃    ┣ 📜 index.tsx
 ┃    ┣ 📜 index.module.css
 ┃ ┣  📂 Input
 ┃    ┣ 📜 index.tsx
 ┃    ┣ 📜 index.module.css
 ┃ ┣  📂 NumberInput
 ┃    ┣ 📜 index.tsx
 ┃    ┣ 📜 index.module.css
 ┃ ┗  📂 Slider
 ┃    ┣ 📜 index.tsx
 ┃    ┣ 📜 index.module.css
 ┣ 📜 App.tsx
 ┗ 📜 app.module.css
```


### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Development Server
```sh
npm run dev
```
This will start the application at `http://localhost:5173/`

## 🛠️ Components Breakdown

### **🔹 Button Component** (`Button`)
A reusable button component with multiple variations.
#### Props:
| Prop      | Type                          | Description                          |
|-----------|------------------------------|--------------------------------------|
| `size`    | `'small'` \| `'medium'`      | Sets the button size                |
| `variant` | `'contained'` \| `'outlined'` | Defines button styling              |
| `theme`   | `'primary'` \| `'secondary'`  | Changes button color                |
| `onPress` | `() => void`                 | Click handler function               |
| `icon`    | `ReactNode`                   | Optional icon to display             |
| `disabled` | `boolean`                     | Disables the button when `true`      |

### **🔹 NumberInput Component** (`NumberInput`)
A numeric input field allowing users to enter a number manually or increment/decrement it using buttons.
#### Props:
| Prop       | Type                           | Description                           |
|------------|--------------------------------|---------------------------------------|
| `value`    | `number`                       | Current numeric value                |
| `onChange` | `(value: number) => void`      | Callback function for value changes  |
| `range`    | `[number, number]`             | Defines min-max range                |

### **🔹 Slider Component** (`Slider`)
An interactive slider for selecting a numeric value.
#### Props:
| Prop       | Type                           | Description                           |
|------------|--------------------------------|---------------------------------------|
| `value`    | `number`                       | Current slider value                  |
| `onChange` | `(value: number) => void`      | Callback function for value changes   |
| `range`    | `[number, number]`             | Defines min-max range                 |

## ✅ Running Tests
This project includes **unit tests** using **Vitest** and **React Testing Library**.
To run the tests:
```sh
npm run test
```



