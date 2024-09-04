import React from "react";

function PlantObservationPage() {
  return (
    <div className="form-container bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Bitki Gözlemi</h2>
      <form>
        {/* Sürgün Boyu */}
        <label className="block mb-2">Sürgün Boyu (Cm):</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Salkım Uzunluğu */}
        <label className="block mb-2">Salkım Uzunluğu (Cm):</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Salkımdaki Ortalama Tane Sayısı */}
        <label className="block mb-2">Salkımdaki Ortalama Tane Sayısı:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Bin Tane Ağırlığı */}
        <label className="block mb-2">Bin Tane Ağırlığı (gr):</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Bağda Meyve Var mı? */}
        <label className="block mb-2">Bağda Meyve Var mı?</label>
        <div className="mb-4">
          <label className="mr-4">
            <input type="radio" name="meyve" value="evet" className="mr-1" />
            Evet
          </label>
          <label>
            <input type="radio" name="meyve" value="hayır" className="mr-1" />
            Hayır
          </label>
        </div>

        {/* Besin Elementi Eksikliği */}
        <label className="block mb-2">Besin Elementi Eksikliği Var mı?</label>
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="besinEksik"
              value="evet"
              className="mr-1"
            />
            Evet
          </label>
          <label>
            <input
              type="radio"
              name="besinEksik"
              value="hayır"
              className="mr-1"
            />
            Hayır
          </label>
        </div>
        <label className="block mb-2">Eksik Besin Elementini Giriniz:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Bitki Hastalık Gözlemi */}
        <label className="block mb-2">Bitki Hastalık Gözlemi:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="checkbox"
              name="hastalik"
              value="hastalikYok"
              className="mr-2"
            />
            Hastalık Yok
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="hastalik"
              value="bagKullemesi"
              className="mr-2"
            />
            Bağ Küllemesi
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="hastalik"
              value="bagMildiyosu"
              className="mr-2"
            />
            Bağ Mildiyosu
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="hastalik"
              value="oleKol"
              className="mr-2"
            />
            Ölü Kol
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="hastalik"
              value="kursuniKur"
              className="mr-2"
            />
            Kurşuni Küf
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="hastalik"
              value="salkimGuvesi"
              className="mr-2"
            />
            Salkım Güvesi
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="hastalik"
              value="kirmiziOrumcek"
              className="mr-2"
            />
            Kırmızı Örümcek
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="hastalik"
              value="bagSirkeSinegi"
              className="mr-2"
            />
            Bağ Sirke Sineği
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="hastalik"
              value="bagTirtli"
              className="mr-2"
            />
            Bağ Tırtılı
          </label>
        </div>

        {/* Homojen Gelişme Var mı? */}
        <label className="block mb-2">Homojen Gelişme Var mı?</label>
        <div className="mb-4">
          <label className="mr-4">
            <input type="radio" name="gelisme" value="yok" className="mr-1" />
            Yok
          </label>
          <label className="mr-4">
            <input type="radio" name="gelisme" value="az" className="mr-1" />
            Az
          </label>
          <label className="mr-4">
            <input type="radio" name="gelisme" value="orta" className="mr-1" />
            Orta
          </label>
          <label>
            <input
              type="radio"
              name="gelisme"
              value="cokIyi"
              className="mr-1"
            />
            Çok İyi
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

export default PlantObservationPage;
