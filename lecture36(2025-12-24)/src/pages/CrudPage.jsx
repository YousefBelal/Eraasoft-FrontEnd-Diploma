import { useLocalStorage } from "../components/UseLocalStorage";

export default function CrudPage() {
  const [phones, setPhones] = useLocalStorage("phones", []);

  const addNewPhone = () => {
    let newPhone = {
      name: prompt("Please Enter NEw Phone Name"),
      price: +prompt("Please Enter New Phone Price"),
      qty: +prompt("Please Enter New Phone Qty"),
    };
    let copy = [...phones];
    copy.push(newPhone);
    setPhones(copy);
  };

  const removePhone = (index) => {
    let confirmDelete = confirm("Are You Sure ?");
    if (confirmDelete) {
      let copy = [...phones];
      copy.splice(index, 1);
      setPhones(copy);
    }
  };

  const editPhoneData = (index) => {
    let newPhone = {
      name: prompt("Please Enter NEw Phone Name"),
      price: +prompt("Please Enter NEw Phone Price"),
      qty: +prompt("Please Enter NEw Phone Qty"),
    };
    let copy = [...phones];
    copy[index] = newPhone;
    setPhones(copy);
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={addNewPhone}>
        Add New Phone
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>-</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Qty</th>
            <th>Item Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {phones.map((el, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.qty}</td>
                <td>{el.qty * el.price}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => editPhoneData(index)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => removePhone(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
