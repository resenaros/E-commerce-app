# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- additional Notes -->

Assignment summary: This project is a simple React-based e-commerce application that displays a list of products with the ability to adjust the quantity of items in a cart. It consists of three main components: App (manages state and passes data), ProductList (renders a grid of products), and ProductItem (displays individual product details and cart controls). Custom CSS ensures a responsive design with a grid layout that adapts to screen sizes. Throughout the project, challenges such as syntax errors and directory management were addressed, providing valuable learning opportunities in React and Bash commands.
Requirements:

1. Plan Your Components:
   o App (Parent) → ProductList (Child) → ProductItem (Child of the Child): Three components were created.
2. Component Breakdown & Tasks:
   o App Component (Parent Component):
   a. Manages the state holding an array of 6 products:
    Each product includes an id, image, name, price, and description.
   b. Passes the products as a prop to the ProductList component:
    The ProductList receives the products array as a prop.
    It maps through the products and renders each product using the ProductItem component.
   c. App.css:
    Global styles are applied to root, body, #root, h1, p, and \* tags via index.css and App.css.
   o ProductList Component (Receives products as props):
   a. A ProductList component was created to take the products array as a prop and, using .map(), iterates over the array to render each product item.
   b. Custom CSS was applied via a module.css file, most notably leveraging a grid layout for the product display.
   o ProductItem Component (Receives individual product data as props):
   a. Renders each product with its corresponding image, name, price, and a short description.
   b. Additional CSS was applied via the previously mentioned module.css file. Two buttons were added to simulate the desired item count to be added to the cart.
   c. Note: A cart count can be implemented to simulate the total item count.
   o Optional Features (Bonus Challenges):
   a. Product images were added and rendered appropriately.

---

Tools Used:
• GitHub Copilot: To implement concepts from the module, perform research, and work with starter code.
• Disco: Video walkthroughs by Jacob and Jacob.
• Bing: To find product images.
• W3Schools: For React documentation.

---

Learning and Opportunities:

1. I frequently encountered issues where my React components broke and caused the page to fail to render content due to minor spelling or syntax errors. Repetition and becoming more familiar with React will help me better identify and resolve such issues.
2. I need to become more proficient in using Bash commands, particularly for manipulating directories. Repetition, consistent knowledge checks, and exposure will help me improve in this area.
3. Added additional configurations to the `vite.config.js` file to automate the `npm run dev` function. This eliminates the need to manually click to run the server, and now automatically opens the browser. The configuration added is:

export default defineConfig({
plugins: [react()],

  <!-- server: {
    open: true,
  }, -->

## });
