import React, { useState } from "react";
import Button from "../src/components/Button"

const App: React.FC = () => {
  const [showRandom, setShowRandom] = useState(false);

  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column", padding: "20px" }}>
      {/* Truyền màu */}
      <Button label="Save" color="#1d3557" onClick={() => alert("Save clicked")} />

      {/* Không truyền màu → random */}
      <Button label="Random Button" onClick={() => alert("Random clicked")} />

      {/* Nút đổi trạng thái */}
      <Button
        label="Toggle Random Button"
        color={showRandom ? "#06d6a0" : "#ef476f"}
        onClick={() => setShowRandom(!showRandom)}
      />
    </div>
  );
};

export default App;
