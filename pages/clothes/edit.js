import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const EditClothes = () => {
  const router = useRouter();
  const { id } = router.query;
  const [clothes, setClothes] = useState({});
  const [editedClothes, setEditedClothes] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setClothes(data);
        setEditedClothes(data);
      })
      .catch((error) =>
        console.error("Error occurred while fetching data:", error)
      );
  }, [id]);

  const handleChange = (e) => {
    setEditedClothes({ ...editedClothes, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedClothes),
      });

      if (response.ok) {
        console.log("Data updated successfully");
        router.push(`/clothes/${id}`);
      } else {
        console.log("Failed to update data");
      }
    } catch (error) {
      console.error("Error occurred while updating data:", error);
    }
  };

  return (
    <div>
      <h1>Edit Clothes</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedClothes.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="desc">Description:</label>
          <textarea
            id="desc"
            name="desc"
            value={editedClothes.desc || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditClothes;
