import React, { useState, useEffect } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./home.css";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "",
    telCode: ""
  });
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/countries")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleAdd = () => {
    if (!formData.name || !formData.countryCode || !formData.telCode) return;

    if (editIndex !== null) {
      
      const country = { ...data[editIndex], ...formData };
      axios
        .put(`http://localhost:8080/api/countries/${country.id}`, country)
        .then((res) => {
          const updated = [...data];
          updated[editIndex] = res.data;
          setData(updated);
          setEditIndex(null);
          setFormData({ name: "", countryCode: "", telCode: "" });
        })
        .catch((err) => console.error("Error updating country:", err));
    } 
    else 
      {
      axios
        .post("http://localhost:8080/api/countries", formData)
        .then((res) => {
          setData([...data, res.data]);
          setFormData({ name: "", countryCode: "", telCode: "" });
        })
        .catch((err) => console.error("Error adding country:", err));
    }
  };

  
  const handleClear = () => {
    setFormData({ name: "", countryCode: "", telCode: "" });
    setEditIndex(null);
  };

  
  const handleEdit = (index) => {
    setFormData(data[index]);
    setEditIndex(index);
  };

  
  const handleDelete = (index) => {
    const country = data[index];
    axios
      .delete(`http://localhost:8080/api/countries/${country.id}`)
      .then(() => {
        setData(data.filter((_, i) => i !== index));
      })
      .catch((err) => console.error("Error deleting country:", err));
  };

  return (
    <div className="container">
      {/* Input Form */}
      <div className="form">
        <div className="input1">
          <h3>Country Name</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter Country Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input2">
          <h3>Country Code</h3>
          <input
            type="text"
            name="countryCode"
            placeholder="Enter Country Code"
            value={formData.countryCode}
            onChange={handleChange}
          />
        </div>
        <div className="input3">
          <h3>Telephone Code</h3>
          <input
            type="text"
            name="telCode"
            placeholder="Enter Telephone Code"
            value={formData.telCode}
            onChange={handleChange}
          />
        </div>
        <div className="button">
          <button className="btn add" onClick={handleAdd}>
            {editIndex !== null ? "Update" : "Add"}
          </button>
          <button className="btn clear" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>

      {/* Data Grid */}
      <table className="datagrid">
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Country Code</th>
            <th>Telephone Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4">No Data Available</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.countryCode}</td>
                <td>{item.telCode}</td>
                <td>
                  <button className="btn edit" onClick={() => handleEdit(index)}>
                    <EditIcon />
                  </button>
                  <button
                    className="btn delete"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
