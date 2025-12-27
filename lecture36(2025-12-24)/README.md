# CommerceHub

A modern, full-featured React web application for managing client products and e-wallets. CommerceHub provides a centralized platform that combines structured product inventory management with secure financial transaction tracking, all powered by local storage persistence.

## 🚀 Features

### Product Management (CRUD Operations)
- **Create**: Add new products with name, price, and quantity
- **Read**: View all products in a structured table format
- **Update**: Edit existing product details
- **Delete**: Remove products with confirmation prompts
- **Automatic Calculations**: Real-time total price calculations (quantity × price)

### E-Wallet System
- **Balance Management**: Track wallet balance with persistent storage
- **Deposit Transactions**: Add funds to the wallet
- **Withdraw Transactions**: Deduct funds with balance validation
- **Transaction History**: View complete transaction log with before/after balance tracking
- **Transaction Types**: Categorized deposits and withdrawals

### Technical Features
- **Local Storage Persistence**: Custom `useLocalStorage` hook ensures data persists across sessions
- **React Router**: Multi-page navigation with clean routing
- **Responsive Design**: Modern UI built with Tailwind CSS and DaisyUI components
- **Fast Development**: Powered by Vite for lightning-fast HMR and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.11.0
- **Styling**: Tailwind CSS 4.1.18
- **UI Components**: DaisyUI 5.5.14
- **Code Quality**: ESLint, Prettier

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd commercehub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
commercehub/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx      # Landing page hero section
│   │   └── UseLocalStorage.jsx  # Custom hook for localStorage persistence
│   ├── pages/
│   │   ├── CrudPage.jsx         # Product CRUD operations
│   │   └── InstaPage.jsx        # E-Wallet management
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Global styles
├── public/                      # Static assets
├── package.json
└── vite.config.js
```

## 📖 Usage

### Product Management
1. Navigate to the **Products** page from the navigation menu
2. Click **Add New Phone** to create a new product entry
3. Enter product name, price, and quantity when prompted
4. Use **Edit** to modify existing products
5. Use **Remove** to delete products (with confirmation)

### E-Wallet
1. Navigate to the **E-Wallet** page from the navigation menu
2. View your current balance at the top
3. Enter an amount in the input field
4. Click **Deposit Amount** to add funds
5. Click **Withdraw Amount** to deduct funds (validates sufficient balance)
6. Click **Show Transactions** to view complete transaction history

## 💾 Data Persistence

All data (products, wallet balance, and transactions) is automatically saved to the browser's local storage. This means:
- Data persists across browser sessions
- No backend server required
- Data is stored locally on the user's device

## 🎨 UI/UX

- Clean, modern interface using DaisyUI components
- Responsive design that works on all screen sizes
- Intuitive navigation with a professional navbar
- Clear visual feedback for all user actions

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ using React and Vite
