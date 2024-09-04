import React from "react";

function WeatherObservationPage() {
  return (
    <div className="form-container bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Hava Gözlemi</h2>
      <form>
        {/* Gözlem için gün sayısı */}
        <label className="block mb-2">Gözlem için gün sayısı:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        {/* Hava Durumu */}
        <label className="block mb-2">Hava Durumu:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="checkbox"
              name="havaDurumu"
              value="acik"
              className="mr-2"
            />
            Açık
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="havaDurumu"
              value="parcaliBulutlu"
              className="mr-2"
            />
            Parçalı Bulutlu
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="havaDurumu"
              value="bulutlu"
              className="mr-2"
            />
            Bulutlu
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="havaDurumu"
              value="yagisli"
              className="mr-2"
            />
            Yağışlı
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="havaDurumu"
              value="karlı"
              className="mr-2"
            />
            Karlı
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="havaDurumu"
              value="firtinali"
              className="mr-2"
            />
            Fırtınalı
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="havaDurumu"
              value="sisli"
              className="mr-2"
            />
            Sisli
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="havaDurumu"
              value="dolu"
              className="mr-2"
            />
            Dolu
          </label>
        </div>

        {/* Rüzgar Türü */}
        <label className="block mb-2">Rüzgar Türü:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="checkbox"
              name="ruzgarTuru"
              value="karayel"
              className="mr-2"
            />
            Karayel
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="ruzgarTuru"
              value="poyraz"
              className="mr-2"
            />
            Poyraz
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="ruzgarTuru"
              value="lodos"
              className="mr-2"
            />
            Lodos
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="ruzgarTuru"
              value="kuzeyRuzgari"
              className="mr-2"
            />
            Kuzey Rüzgarı
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="ruzgarTuru"
              value="guneyRuzgari"
              className="mr-2"
            />
            Güney Rüzgarı
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="ruzgarTuru"
              value="batıRuzgari"
              className="mr-2"
            />
            Batı Rüzgarı
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="ruzgarTuru"
              value="doguRuzgari"
              className="mr-2"
            />
            Doğu Rüzgarı
          </label>
        </div>

        {/* Rüzgar Hızı Gözlemi */}
        <label className="block mb-2">Rüzgar Hızı Gözlemi:</label>
        <div className="mb-4">
          <label className="block">
            <input
              type="radio"
              name="ruzgarHizi"
              value="8ms"
              className="mr-2"
            />
            8 m/s
          </label>
          <label className="block">
            <input
              type="radio"
              name="ruzgarHizi"
              value="8to10ms"
              className="mr-2"
            />
            8-10 m/s
          </label>
          <label className="block">
            <input
              type="radio"
              name="ruzgarHizi"
              value="10to15ms"
              className="mr-2"
            />
            10-15 m/s
          </label>
          <label className="block">
            <input
              type="radio"
              name="ruzgarHizi"
              value="15to20ms"
              className="mr-2"
            />
            15-20 m/s
          </label>
          <label className="block">
            <input
              type="radio"
              name="ruzgarHizi"
              value="20msveUzeri"
              className="mr-2"
            />
            20 m/s ve üzeri
          </label>
        </div>

        {/* Hava Sıcaklık Gözlemi */}
        <label className="block mb-2">Hava Sıcaklık Gözlemi:</label>
        <div className="mb-4">
          <label className="block">
            <input type="radio" name="sicaklik" value="0to6" className="mr-2" />
            0-6 °C
          </label>
          <label className="block">
            <input
              type="radio"
              name="sicaklik"
              value="6to10"
              className="mr-2"
            />
            6-10 °C
          </label>
          <label className="block">
            <input
              type="radio"
              name="sicaklik"
              value="10to15"
              className="mr-2"
            />
            10-15 °C
          </label>
          <label className="block">
            <input
              type="radio"
              name="sicaklik"
              value="15to20"
              className="mr-2"
            />
            15-20 °C
          </label>
          <label className="block">
            <input
              type="radio"
              name="sicaklik"
              value="20veUzeri"
              className="mr-2"
            />
            20 °C ve üzeri
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

export default WeatherObservationPage;
