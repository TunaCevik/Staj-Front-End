import React from "react";

function PlantObservationPage() {
  return (
    <div className="form-container bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Toprak Gözlemi</h2>
      <form>
        <label className="block mb-2">Soru 1:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        <label className="block mb-2">Soru 2:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        <label className="block mb-2">Soru 3:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        <label className="block mb-2">Soru 4:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        <label className="block mb-2">Soru 5:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        <label className="block mb-2">Soru 5:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default PlantObservationPage;
