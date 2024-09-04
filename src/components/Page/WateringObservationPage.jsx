import React from "react";

function WateringObservationPage() {
  return (
    <div className="form-container bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">
        Sulama ve Bitki Besleme Gözlemi
      </h2>
      <form>
        {/* Bitkiye Su Verildi mi? */}
        <label className="block mb-2">Bitkiye Su Verildi mi?</label>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="bitkiyeSu"
              value="evet"
              className="mr-1"
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              name="bitkiyeSu"
              value="hayir"
              className="mr-1"
            />
            Hayır
          </label>
        </div>
        <label className="block mb-2">Tarih Giriniz:</label>
        <input type="date" className="w-full p-2 mb-4 border rounded" />

        {/* Fertigasyon Yapıldı mı? */}
        <label className="block mb-2">Fertigasyon Yapıldı mı?</label>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="fertigasyon"
              value="evet"
              className="mr-1"
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              name="fertigasyon"
              value="hayir"
              className="mr-1"
            />
            Hayır
          </label>
        </div>
        <label className="block mb-2">Tarih Giriniz:</label>
        <input type="date" className="w-full p-2 mb-4 border rounded" />
        <label className="block mb-2">
          Kullanılan Gübre Miktarı ve Birim Giriniz:
        </label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default WateringObservationPage;
