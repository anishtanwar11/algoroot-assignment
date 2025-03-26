import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateTask from "./components/CreateTask";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/create-task" element={<CreateTask />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
