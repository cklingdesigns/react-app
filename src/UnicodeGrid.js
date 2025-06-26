import React, { useEffect, useState } from "react";

const UnicodeGrid = ({ docUrl }) => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(docUrl);
        const text = await response.text();

        const regex = /\((\d+),\s*(\d+)\):\s*U\+([0-9A-Fa-f]{4})/g;
        const coordinates = [];
        let match;

        while ((match = regex.exec(text)) !== null) {
          const x = parseInt(match[1], 10);
          const y = parseInt(match[2], 10);
          const char = String.fromCharCode(parseInt(match[3], 16));
          coordinates.push({ x, y, char });
        }

        if (coordinates.length === 0) return;

        const maxX = Math.max(...coordinates.map((c) => c.x));
        const maxY = Math.max(...coordinates.map((c) => c.y));

        // Create a grid filled with spaces
        const tempGrid = Array.from({ length: maxY + 1 }, () =>
          Array.from({ length: maxX + 1 }, () => " ")
        );

        coordinates.forEach(({ x, y, char }) => {
          tempGrid[y][x] = char;
        });

        setGrid(tempGrid);
      } catch (err) {
        console.error("Failed to load document", err);
      }
    };

    fetchData();
  }, [docUrl]);

  return (
    <div style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
      {grid.map((row, idx) => (
        <div key={idx}>{row.join("")}</div>
      ))}
    </div>
  );
};

export default UnicodeGrid;
