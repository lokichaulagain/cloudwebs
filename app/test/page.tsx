"use client";
import { supabase } from "@/utils/supabase/supabaseClient";
import React, { useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const [refreshNow, setRefreshNow] = useState(false);
  const [categories, setCategories] = React.useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const vendor1 = "667a754e-0244-4993-aa01-57a0ff27107e";
  const vendor2 = "1497d29d-fcf1-447c-9adc-9d95a0fae757";

  React.useEffect(() => {
    setIsFetching(true);
    const fetch = async () => {
      let { data, error } = await supabase.from("Category").select("*").eq("vendor", `${process.env.NEXT_PUBLIC_VENDOR_ID}`).order("created_at", { ascending: false });

      if (error) {
        console.log(error.message);
        setIsFetching(false);
      }

      if (data) {
        setCategories(data || []);
        setRefreshNow(false);
        setIsFetching(false);
      }
    };
    fetch();
  }, [vendor1]);

  return (
    <div>
      <div>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <h1>{category.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
