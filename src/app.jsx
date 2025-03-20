import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./components/Card";
import { Button } from "./components/Button";

const pstList = [
  { name: "Comunicación y Manejo de Datos", file: "/pdfs/comunicacion-manejo-de-datos.pdf" },
  { name: "Configuración Moxa", file: "/pdfs/configuracion-moxa.pdf" },
  { name: "Entrenamiento Toma de Muestras", file: "/pdfs/entrenamiento-toma-de-muestras.pdf" },
  { name: "Identificación de Problemas de Hardware", file: "/pdfs/identificacion-problemas-hardware.pdf" },
  { name: "Instalación de Cable Umbilical", file: "/pdfs/instalacion-cable-umbilical.pdf" },
  { name: "Instalación de Sondas PST", file: "/pdfs/instalacion-sondas-pst.pdf" },
  { name: "Medición de Desgaste PST", file: "/pdfs/medicion-de-desgaste-pst.pdf" },
];

const sonartracList = [
  { name: "Carga de Configuración", file: "/pdfs/carga-configuracion.pdf" },
  { name: "Entrenamiento de Instalación", file: "/pdfs/entrenamiento-instalacion.pdf" },
  { name: "Extraer Snapshot", file: "/pdfs/extraer-snapshot.pdf" },
  { name: "Manual de Instalación", file: "/pdfs/manual-instalacion.pdf" },
  { name: "Procedimiento de Cambio de Ganancia", file: "/pdfs/procedimiento-cambio-ganancia.pdf" },
];

export default function App() {
  const [view, setView] = useState("home");

  const handleViewChange = (newView) => {
    console.log("Cambiando vista a:", newView);
    setView(newView);
  };

  // Calcula las posiciones para los botones en un círculo
  const circleStyle = {
    position: "relative",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    margin: "auto",
  };

  const buttonStyle = (index, totalButtons) => {
    const angle = (index / totalButtons) * (2 * Math.PI);  // Calcular el ángulo para el botón
    const radius = 120; // Radio del círculo

    // Calculamos la posición de cada botón en el círculo
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return {
      position: "absolute",
      top: "50%",  // Centrado verticalmente
      left: "50%", // Centrado horizontalmente
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`, // Ajuste en el círculo
      width: "100px", // Tamaño del botón
      height: "50px", // Tamaño del botón
      borderRadius: "10px",  // Bordes redondeados
      backgroundColor: "#003366",  // Fondo azul más oscuro
      color: "white",  // Color del texto
      border: "2px solid #b38b00", // Borde amarillo más oscuro
      fontWeight: "bold",  // Hacer el texto en negrita
      textAlign: "center",
    };
  };

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/fondocidra.jpg')",
        backgroundSize: "100%",  // Ajuste el tamaño del fondo
        backgroundAttachment: "fixed",
        width: "100vw",  // Asegura que ocupe todo el ancho visible de la pantalla
        height: "100vh", // Asegura que ocupe toda la altura visible de la pantalla
      }}
    >

      {view === "home" && (
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.img
            src="/images/pst.jpg"
            alt="PST"
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",  // Hacemos que el botón sea posicionado de forma absoluta
              left: "30%",  // Mueve el botón un 30% de la pantalla a la derecha
              transform: "translateX(20%) translateY(30%)",  // Desplaza el botón 30% a la derecha y 20% hacia abajo
              borderRadius: "50%", // Hace el botón ovalado
              background: "linear-gradient(to right, #003366, #004d99)", // Degradado más oscuro de azul
              border: "2px solid #b38b00", // Borde amarillo más oscuro
            }}
            className="cursor-pointer"
            onClick={() => handleViewChange("pst")}
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="/images/sonartrac.jpg"
            alt="Sonartrac"
            style={{
              width: "100px", 
              height: "100px",
              position: "absolute",  // Hacemos que el botón sea posicionado de forma absoluta
              left: "50%",  // Mueve el botón a la mitad de la pantalla
              transform: "translateX(120%) translateY(30%)",  // Desplaza el botón 50% a la derecha y 20% hacia abajo
              borderRadius: "50%", // Hace el botón ovalado
              background: "linear-gradient(to right, #003366, #004d99)", // Degradado más oscuro de azul
              border: "2px solid #b38b00", // Borde amarillo más oscuro
            }}
            className="cursor-pointer"
            onClick={() => handleViewChange("sonartrac")}
            whileHover={{ scale: 1.1 }}
          />
        </div>
      )}

      {view === "pst" && (
        <Card className="p-4 flex flex-col gap-4 items-center" style={circleStyle}>
          {pstList.map((proc, index) => (
            <button
              key={index}
              onClick={() => window.open(proc.file, "_blank")}
              style={buttonStyle(index, pstList.length)} // Coloca los botones en el círculo
            >
              {proc.name}
            </button>
          ))}
          <button
            onClick={() => handleViewChange("home")}
            style={{
              width: "100px",  // Reducido a la mitad
              height: "25px",  // Reducido a la mitad
              borderRadius: "10px",
              backgroundColor: "#003366", // Fondo azul más oscuro
              color: "white",
              border: "2px solid #b38b00", // Borde amarillo más oscuro
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Volver
          </button>
        </Card>
      )}

      {view === "sonartrac" && (
        <Card className="p-4 flex flex-col gap-4 items-center" style={circleStyle}>
          {sonartracList.map((proc, index) => (
            <button
              key={index}
              onClick={() => window.open(proc.file, "_blank")}
              style={buttonStyle(index, sonartracList.length)} // Coloca los botones en el círculo
            >
              {proc.name}
            </button>
          ))}
          <button
            onClick={() => handleViewChange("home")}
            style={{
              width: "100px",  // Reducido a la mitad
              height: "25px",  // Reducido a la mitad
              borderRadius: "10px",
              backgroundColor: "#003366", // Fondo azul más oscuro
              color: "white",
              border: "2px solid #b38b00", // Borde amarillo más oscuro
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Volver
          </button>
        </Card>
      )}
    </div>
  );
}
