import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

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
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Hava Durumunu Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="acik">Açık</SelectItem>
              <SelectItem value="parcaliBulutlu">Parçalı Bulutlu</SelectItem>
              <SelectItem value="bulutlu">Bulutlu</SelectItem>
              <SelectItem value="yagisli">Yağışlı</SelectItem>
              <SelectItem value="karli">Karlı</SelectItem>
              <SelectItem value="firtinali">Fırtınalı</SelectItem>
              <SelectItem value="sisli">Sisli</SelectItem>
              <SelectItem value="dolu">Dolu</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Rüzgar Türü */}
        <label className="block mb-2">Rüzgar Türü:</label>
        <div className="mb-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Rüzgar Türünü Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="karayel">Karayel</SelectItem>
              <SelectItem value="poyraz">Poyraz</SelectItem>
              <SelectItem value="lodos">Lodos</SelectItem>
              <SelectItem value="kuzeyRuzgari">Kuzey Rüzgarı</SelectItem>
              <SelectItem value="guneyRuzgari">Güney Rüzgarı</SelectItem>
              <SelectItem value="batiRuzgari">Batı Rüzgarı</SelectItem>
              <SelectItem value="doguRuzgari">Doğu Rüzgarı</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Rüzgar Hızı Gözlemi */}
        <label className="block mb-2">Rüzgar Hızı Gözlemi:</label>
        <div className="mb-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Rüzgar Hızını Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8ms">8 m/s</SelectItem>
              <SelectItem value="8to10ms">8-10 m/s</SelectItem>
              <SelectItem value="10to15ms">10-15 m/s</SelectItem>
              <SelectItem value="15to20ms">15-20 m/s</SelectItem>
              <SelectItem value="20msveUzeri">20 m/s ve üzeri</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Hava Sıcaklık Gözlemi */}
        <label className="block mb-2">Hava Sıcaklık Gözlemi:</label>
        <div className="mb-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sıcaklığı Seçiniz" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0to6">0-6 °C</SelectItem>
              <SelectItem value="6to10">6-10 °C</SelectItem>
              <SelectItem value="10to15">10-15 °C</SelectItem>
              <SelectItem value="15to20">15-20 °C</SelectItem>
              <SelectItem value="20veUzeri">20 °C ve üzeri</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="default">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default WeatherObservationPage;
