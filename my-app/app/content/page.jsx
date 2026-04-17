"use client";
import React, { useState } from "react";
import supabase from "../../config/supaBaseClient";

function Content() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!name || !password) {
      alert("Please fill in all fields");
      return;
    }
    const result = await supabase.from("supa_base").insert({ name, password });
    console.log(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <p>{name}</p>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
}

export default Content;