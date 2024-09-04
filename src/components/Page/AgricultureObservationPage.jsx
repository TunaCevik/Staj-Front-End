import React from "react";

function AgricultureObservationPage() {
  return (
    <div className="form-container bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Tarımsal Savaşım Gözlemi</h2>
      <form>
        {/* Kullanılan İlaç İsmi */}
        <label className="block mb-2">Kullanılan İlaç İsmi Giriniz:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Tarih */}
        <label className="block mb-2">Tarih Giriniz:</label>
        <input type="date" className="w-full p-2 mb-4 border rounded" />

        {/* Doz Miktarı */}
        <label className="block mb-2">Kullanılan Doz Miktarını Giriniz:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Fenolojik Evre */}
        <label className="block mb-2">Fenolojik Evre:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="kışGözleri"
              className="mr-2"
            />
            Kış Gözleri Uyanıyor Başlangıç
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="yeşilNokta"
              className="mr-2"
            />
            Yeşil Noktalar Belirginleşti
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="yaprak"
              className="mr-2"
            />
            Yaprak Yarıp Uçları İki İle Göründü
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="çiçekTomurcuğu"
              className="mr-2"
            />
            Çiçek Tomurcukları Belirginleşti
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="çiçeklenme"
              className="mr-2"
            />
            Çiçeklenme Tamamlandı
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="tamÇiçek"
              className="mr-2"
            />
            Tam Çiçek
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="taneTutumu"
              className="mr-2"
            />
            Tane Tutumu
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="benDüşme"
              className="mr-2"
            />
            Ben Düşme
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="hasat"
              className="mr-2"
            />
            Hasat
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="fenolojikEvre"
              value="yaprakDökülme"
              className="mr-2"
            />
            Yaprak Dökülme
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

export default AgricultureObservationPage;
