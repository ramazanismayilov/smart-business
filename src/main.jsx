import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/main.scss"
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './App';
import { SaleProvider } from './context/SaleProvider';
import { DebtProvider } from './context/DebtProvider';
import { StoreProvider } from './context/StoreProvider';
import { CashboxesProvider } from './context/CashboxesProvider';
import { UserProvider } from './context/UserProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <SaleProvider>
        <DebtProvider>
          <StoreProvider>
            <CashboxesProvider>
              <App />
            </CashboxesProvider>
          </StoreProvider>
        </DebtProvider>
      </SaleProvider>
    </UserProvider>
  </React.StrictMode>
);