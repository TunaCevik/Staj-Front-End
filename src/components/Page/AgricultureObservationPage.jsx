import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Shadcn UI Select importları

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
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Fenolojik Evre Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kisGozleri">
                Kış Gözleri Uyanıyor Başlangıç
              </SelectItem>
              <SelectItem value="yesilNokta">
                Yeşil Noktalar Belirginleşti
              </SelectItem>
              <SelectItem value="yaprak">
                Yaprak Yarıp Uçları İki İle Göründü
              </SelectItem>
              <SelectItem value="cicekTomurcugu">
                Çiçek Tomurcukları Belirginleşti
              </SelectItem>
              <SelectItem value="ciceklenme">Çiçeklenme Tamamlandı</SelectItem>
              <SelectItem value="tamCicek">Tam Çiçek</SelectItem>
              <SelectItem value="taneTutumu">Tane Tutumu</SelectItem>
              <SelectItem value="benDusme">Ben Düşme</SelectItem>
              <SelectItem value="hasat">Hasat</SelectItem>
              <SelectItem value="yaprakDokulme">Yaprak Dökülme</SelectItem>
            </SelectContent>
          </Select>
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
