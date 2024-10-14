# Inventory Management System

## Overview

This Inventory Management System is a React-based application designed to help businesses efficiently manage their inventory and supplier information. It provides a responsive user interface for adding, updating, and tracking inventory items, as well as managing supplier details.

## Features

1. **Inventory Dashboard**

   - Display a list of inventory items
   - Show item names, quantities, categories, and supplier information
   - Color-coded stock level indicators (red for low stock, green for sufficient stock)

2. **Inventory Item Management**

   - Add new inventory items
   - Update existing items
   - Delete items
   - Search functionality
   - Filter items by category or supplier

3. **Supplier Management**
   - Add new suppliers
   - Edit existing supplier information
   - Display supplier details (name, contact information)
   - Show items supplied by each supplier

## Technologies Used

- React
- React Router DOM
- Redux (with Redux Toolkit)
- Ant Design (antd)
- Custom Hooks

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/mrprogrammer2624/inventory-management
   ```

2. Navigate to the project directory:

   ```
   cd inventory-management
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Project Structure

```
inventory-management-system/
├── src/
│   ├── page/
│   │   ├── InventoryDashboard.jsx
│   │   ├── InventoryItemForm.jsx
│   │   └── SupplierManagement.jsx
│   ├── hooks/
│   │   ├── useInventory.ts
│   │   └── useSuppliers.ts
│   ├── store/
│   │   ├── index.ts
│   │   ├── inventorySlice.ts
│   │   └── suppliersSlice.ts
│   ├── App.jsx
│   └── index.jsx
├── package.json
└── README.md
```

## Usage

### Inventory Dashboard

The Inventory Dashboard displays a list of all inventory items. Each item shows its name, quantity, category, supplier, and a color-coded stock level indicator. You can search for items or filter them by category or supplier using the controls at the top of the dashboard.

### Adding/Editing Inventory Items

To add a new inventory item:

1. Click the "Add Item" button on the dashboard.
2. Fill in the item details in the form (name, quantity, category, supplier).
3. Click "Add Item" to save the new item.

To edit an existing item:

1. Click the edit icon next to the item in the dashboard.
2. Update the item details in the form.
3. Click "Update Item" to save the changes.

### Managing Suppliers

To view and manage suppliers:

1. Navigate to the Suppliers section using the navigation menu.
2. Here you can view all suppliers, add new ones, or edit existing supplier information.

To add a new supplier:

1. Click the "Add Supplier" button.
2. Fill in the supplier details (name, contact information).
3. Click "Add Supplier" to save the new supplier.

## Custom Hooks

The project uses two custom hooks to manage inventory and supplier data:

- `useInventory`: Provides functions for adding, updating, deleting, searching, and filtering inventory items.
- `useSuppliers`: Provides functions for adding, updating, and deleting supplier information.

## Redux Store

The Redux store is organized into two slices:

- `inventorySlice`: Manages the state of inventory items, categories, and filtered items.
- `suppliersSlice`: Manages the state of supplier information.
- `uiSlice`: Manages the state of the application's UI, including the search and filter.
- `loadingSlice`: Manages the state of loading indicators.
- `errorSlice`: Manages the state of error messages.
