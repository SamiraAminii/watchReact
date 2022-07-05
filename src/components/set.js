import React, { useState, useEffect } from "react";
function Set() {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let d = new Date();
      var h = d.getHours();
      var m = d.getMinutes().toString();
      var s = d.getSeconds().toString();
      h = h % 12 || 12;
      h = h.toString();
      var z =
        d.getDate().toString().padStart(2, "0") +
        " / " +
        (d.getMonth() + 1).toString().padStart(2, "0") +
        " / " +
        setHours(h.padStart(2, "0"));
      setMinutes(m.padStart(2, "0"));
      setSeconds(s.padStart(2, "0"));

      return () => clearInterval(intervalId);
    }, 1000);
  }, [seconds, minutes, hours]);

  return (
    <div>
      <span>
        {hours}:{minutes}:{seconds}
      </span>
    </div>
  );
}

export default Set;
