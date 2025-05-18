### Enhance E-commerce Web Application with Redux for Cart Management

[It is relevant to task Week 10]

**Objective:**

Enhance the existing e-commerce web application you did in Week 10 by integrating Redux to manage the cart functionality. You will implement actions to add, delete, and edit the amount of products in the cart.

## **Requirements:**

### Page 1: Product Listing Page

- **Display Products:** Show a list of products fetched from `https://dummyjson.com/products`.
- **Add to Cart:**
    - Clicking the "Add to Cart" button should add the product to the cart.
    - The cart state should be managed using Redux.
    - Notify the user when a product is added to the cart (e.g., with a toast or success message).
- **Redux Actions for Product Listing:**
    - **FETCH_PRODUCTS:** Fetch products from the API and store them in Redux.
    - **ADD_TO_CART:** Add a product to the cart state in Redux.

### Page 2: Cart Page

- **Display Cart Items:**
    - Fetch and display the cart items from Redux.
    - Each item should show the product image, title, quantity, and price.
- **Edit Quantity:**
    - Implement buttons to increase and decrease the quantity of each product.
    - Update the cart state in Redux accordingly.
    - Notify the user when the quantity is updated.
- **Delete Product:**
    - Implement a button to remove a product from the cart.
    - Update the cart state in Redux accordingly.
    - Notify the user when a product is removed from the cart.
- **Show Total Price:** Display the total price of all items in the cart.
- **Redux Actions for Cart Management:**
    - **INCREASE_QUANTITY:** Increase the quantity of a product in the cart.
    - **DECREASE_QUANTITY:** Decrease the quantity of a product in the cart.
    - **REMOVE_FROM_CART:** Remove a product from the cart state in Redux.

### Implementation Details:

### 1. Set Up Redux:

- Create a Redux store and configure it with the necessary reducers for managing products and the cart state.

### 2. Define Redux Actions and Reducers:

- **Actions:**
    - **FETCH_PRODUCTS:** Fetch products from the API and store them in Redux.
    - **ADD_TO_CART:** Add a product to the cart state in Redux.
    - **INCREASE_QUANTITY:** Increase the quantity of a product in the cart.
    - **DECREASE_QUANTITY:** Decrease the quantity of a product in the cart.
    - **REMOVE_FROM_CART:** Remove a product from the cart state in Redux.
- **Reducers:**
    - Create reducers to handle the defined actions and update the Redux state accordingly.

### 3. Connect Components to Redux:

- Use React-Redux's `useSelector` and `useDispatch` hooks to connect components to the Redux store and dispatch actions. If you want to use `mapStateToProps` *and* `mapDispatchToProps` no problem with that.

### 4. Implement Cart Functionality:

- **Product Listing Page:**
    - Fetch products from the API and display them.
    - Implement the "Add to Cart" button to dispatch the `ADD_TO_CART` action.
- **Cart Page:**
    - Display cart items from the Redux state.
    - Implement buttons to increase and decrease quantity, and dispatch the `INCREASE_QUANTITY` and `DECREASE_QUANTITY` actions.
    - Implement the "Remove" button to dispatch the `REMOVE_FROM_CART` action.
    - Show the total price of items in the cart.

### Expected Redux Actions:

1. **Fetching Products:**
    - **FETCH_PRODUCTS_REQUEST:** Initiates the API call to fetch products.
    - **FETCH_PRODUCTS_SUCCESS:** Dispatched when products are successfully fetched and payload includes the list of products.
    - **FETCH_PRODUCTS_FAILURE:** Dispatched when there is an error in fetching products.
2. **Cart Management:**
    - **ADD_TO_CART:** Adds a product to the cart.
    - **INCREASE_QUANTITY:** Increases the quantity of a product in the cart.
    - **DECREASE_QUANTITY:** Decreases the quantity of a product in the cart.
    - **REMOVE_FROM_CART:** Removes a product from the cart.
