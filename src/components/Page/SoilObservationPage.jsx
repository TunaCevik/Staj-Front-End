import React from "react";

function SoilObservationPage() {
  return (
    <div className="form-container bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Toprak Gözlemi</h2>
      <form>
        {/* Toprak Nem Gözlemi */}
        <label className="block mb-2">Toprak Nem Gözlemi:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="toprakNem"
              value="kuru"
              className="mr-2"
            />
            Kuru
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakNem"
              value="nemli"
              className="mr-2"
            />
            Nemli
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakNem"
              value="cokNemli"
              className="mr-2"
            />
            Çok Nemli
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakNem"
              value="balçık"
              className="mr-2"
            />
            Balçık
          </label>
        </div>

        {/* Toprak Nem İçeriği (Volümetrik Su İçeriği) */}
        <label className="block mb-2">
          Toprak Nem İçeriği (Volümetrik Su İçeriği):
        </label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Toprak Göbre Kirlilik Gözlemi */}
        <label className="block mb-2">Toprak Göbre Kirlilik Gözlemi:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="toprakGobreKirlilik"
              value="yok"
              className="mr-2"
            />
            Yok
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakGobreKirlilik"
              value="az"
              className="mr-2"
            />
            Az
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakGobreKirlilik"
              value="orta"
              className="mr-2"
            />
            Orta
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakGobreKirlilik"
              value="cok"
              className="mr-2"
            />
            Çok
          </label>
        </div>

        {/* Toprak Sıcaklık Gözlemi */}
        <label className="block mb-2">Toprak Sıcaklık Gözlemi:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="toprakSicaklik"
              value="0to6"
              className="mr-2"
            />
            0-6 °C
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakSicaklik"
              value="6to10"
              className="mr-2"
            />
            6-10 °C
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakSicaklik"
              value="10to15"
              className="mr-2"
            />
            10-15 °C
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakSicaklik"
              value="15to20"
              className="mr-2"
            />
            15-20 °C
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakSicaklik"
              value="20veUzeri"
              className="mr-2"
            />
            20 °C ve üzeri
          </label>
        </div>

        {/* Toprak Su Doygunluk Gözlemi */}
        <label className="block mb-2">Toprak Su Doygunluk Gözlemi:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="toprakSuDoygunluk"
              value="doymamış"
              className="mr-2"
            />
            Doymamış
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakSuDoygunluk"
              value="doymuş"
              className="mr-2"
            />
            Doymuş
          </label>
          <label className="block">
            <input
              type="radio"
              name="toprakSuDoygunluk"
              value="aşırıDoymuş"
              className="mr-2"
            />
            Aşırı Doymuş
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SoilObservationPage;
