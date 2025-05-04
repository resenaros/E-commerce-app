import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Laptop from "./assets/Laptop.jpg";
import Earbuds from "./assets/earbuds.webp";
import Powerbank from "./assets/powerbank.jpg";
import ExternalMonitor from "./assets/external-monitor.jpg";
import DockingStation from "./assets/Docking-station.jpg";
import CableManagementBox from "./assets/Cable-management-box.jpg";

function App() {
  // Only for display, no modifications will be made to this.
  const [products] = useState([
    {
      id: 1,
      image: Laptop,
      name: "Laptop",
      price: 1300,
      description:
        "A high-performance laptop built for speed, multitasking, and demanding development workflows",
    },
    {
      id: 2,
      image: Earbuds,
      name: "Earbuds",
      price: 50,
      description:
        "Wireless earbuds with noise cancelling, 72-hour battery life, and waterproof design for all-day use.",
    },
    {
      id: 3,
      image: Powerbank,
      name: "Power Bank",
      price: 120,
      description:
        "Portable power bank with flashlight, dual USB outputs, and USB-C in/out for versatile charging.",
    },
    {
      id: 4,
      image: ExternalMonitor,
      name: "External Monitor",
      price: 300,
      description:
        "1080p portable monitor with HDMI and USB-C connectivity for flexible dual-screen productivity.",
    },
    {
      id: 5,
      image: DockingStation,
      name: "Docking Station",
      price: 350,
      description:
        "Universal docking station with multiple ports for seamless laptop-to-desktop connectivity and efficient workspace organization.",
    },
    {
      id: 6,
      image: CableManagementBox,
      name: "Cable Management Box",
      price: 25,
      description:
        "Sleek cable management box for organizing and hiding power strips and cords, ensuring a tidy workspace.",
    },
  ]);

  return (
    <>
      <h1>E-commerce Application</h1>
      <div>
        <ProductList allProducts={products} />
      </div>
    </>
  );
}

export default App;
