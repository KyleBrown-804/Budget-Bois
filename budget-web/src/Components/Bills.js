import { useEffect, useState } from "react";

function Bills() {
  useEffect(() => {
    fetch("/api/bills")
      .then((res) => res.json())
      .then((data) => setBills(data))
      .catch((err) => console.log(err));
  }, []);

  const [bills, setBills] = useState([]);

  return (
    <div>
      {bills.map((item) => (
        <div key={item.bill_id}>
          <h1>{`${item.name} (${item.frequency})`}</h1>
          <p>{item.amount}</p>
          <p>{item.bill_type}</p>
          <p>{item.frequency}</p>
        </div>
      ))}
    </div>
  );
}

export default Bills;
