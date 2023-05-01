import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "pages/main/App";
import Nav from "pages/nav/nav.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

const Detail = lazy(() => import("pages/items/detail"));
const Cart = lazy(() => import("pages/cart/cart"));

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <Nav></Nav>
        <Suspense fallback={<div>로딩 중...</div>}>
          <Routes>
            <Route path="/" element={<App />} />

            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<div>없는 페이지</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>
);
