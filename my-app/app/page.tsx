"use client";
import supabase from "../config/supaBaseClient";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("supa_base").select().eq("id", 1).single();

      if (error) {
        console.error(error);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     
          <h2>{data.name}</h2>
          <p>{data.password}</p>
        </div>
    

  );
}