import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function PlantObservationPage() {
  // State for 'Bağda Meyve Var mı?'
  const [fruitAnswer, setFruitAnswer] = useState(null);

  // State for 'Besin Elementi Eksikliği'
  const [nutrientDeficiency, setNutrientDeficiency] = useState(null);

  // State for diseases
  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const diseases = [
    { id: "hastalik-yok", label: "Hastalık yok" },
    { id: "bag-kullemesi", label: "Bağ Küllemesi" },
    { id: "bag-mildiyosu", label: "Bağ Mildiyosu" },
    { id: "olu-kol", label: "Ölü Kol" },
    { id: "kursuni-kuf", label: "Kurşuni Küf" },
    { id: "salkim-guvesi", label: "Salkım Güvesi" },
    { id: "bag-tirtili", label: "Bağ Tırtılı" },
    { id: "bag-sirke-sinegi", label: "Bağ Sirke Sineği" },
  ];

  const handleDiseaseChange = (diseaseId) => {
    setSelectedDiseases((prev) => {
      if (diseaseId === "no-disease") {
        if (prev.includes("no-disease")) {
          return [];
        } else {
          return ["no-disease"];
        }
      } else {
        const newSelection = prev.includes(diseaseId)
          ? prev.filter((id) => id !== diseaseId)
          : [...prev.filter((id) => id !== "no-disease"), diseaseId];
        return newSelection;
      }
    });
  };

  const renderQuestion = (
    question,
    answer,
    setAnswer,
    integerLabel1,
    integerLabel2
  ) => (
    <AccordionItem value={question}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`${question}-yes`}
              checked={answer === true}
              onCheckedChange={(checked) => setAnswer(checked ? true : null)}
            />
            <Label htmlFor={`${question}-yes`}>Evet</Label>
          </div>
          {answer === true && (
            <>
              <div className="space-y-2">
                <Label htmlFor={`${question}-integer-1`}>{integerLabel1}</Label>
                <Input
                  type="number"
                  id={`${question}-integer-1`}
                  placeholder="Salkımdaki tane sayısını giriniz"
                  step="1"
                  min="0"
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${question}-integer-2`}>{integerLabel2}</Label>
                <Input
                  type="number"
                  id={`${question}-integer-2`}
                  placeholder="Bin tane ağırlığını giriniz"
                  step="0.01"
                  min="0"
                  onKeyPress={(e) => {
                    if (!/[0-9.]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                />
              </div>
            </>
          )}
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`${question}-no`}
              checked={answer === false}
              onCheckedChange={(checked) => setAnswer(checked ? false : null)}
              disabled={answer === true}
            />
            <Label htmlFor={`${question}-no`}>Hayır</Label>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );

  const renderNutrientDeficiencyQuestion = (
    question,
    answer,
    setAnswer,
    inputLabel
  ) => (
    <AccordionItem value={question}>
      <AccordionTrigger>{question}</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`${question}-yes`}
              checked={answer === true}
              onCheckedChange={(checked) => setAnswer(checked ? true : null)}
            />
            <Label htmlFor={`${question}-yes`}>Evet</Label>
          </div>
          {answer === true && (
            <div className="space-y-2">
              <Label htmlFor={`${question}-input`}>{inputLabel}</Label>
              <Input
                type="text"
                id={`${question}-input`}
                placeholder="Eksik Besin Elementini Giriniz"
              />
            </div>
          )}
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`${question}-no`}
              checked={answer === false}
              onCheckedChange={(checked) => setAnswer(checked ? false : null)}
              disabled={answer === true}
            />
            <Label htmlFor={`${question}-no`}>Hayır</Label>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );

  return (
    <div className="form-container bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Bitki Gözlemi</h2>
      <form className="flex flex-col items-start">
        {/* Sürgün Boyu */}
        <label className="block mb-2">Sürgün Boyu (Cm):</label>
        <input type="number" className="w-full p-2 mb-4 border rounded" />

        {/* Salkım Uzunluğu */}
        <label className="block mb-2">Salkım Uzunluğu (Cm):</label>
        <input type="number" className="w-full p-2 mb-4 border rounded" />
        <Accordion type="single" collapsible className="w-full mb-6">
          {renderQuestion(
            "Bağda Meyve Var mı?",
            fruitAnswer,
            setFruitAnswer,
            "Salkımdaki Ortalama Tane sayısını giriniz.",
            "Bin Tane Ağırlığını Giriniz."
          )}
          {renderNutrientDeficiencyQuestion(
            "Besin Elementi Eksikliği",
            nutrientDeficiency,
            setNutrientDeficiency,
            "Eksik Besin Elementini Giriniz."
          )}
        </Accordion>

        {/* Bitki Hastalık Gözlemi */}
        <div className="mb-6 w-full">
          <label className="block mb-2 font-semibold">
            Bitki Hastalık Gözlemi:
          </label>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="disease-observation">
              <AccordionTrigger>Bitki Hastalık Gözlemi</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {diseases.map((disease) => (
                    <div
                      key={disease.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={disease.id}
                        checked={selectedDiseases.includes(disease.id)}
                        onCheckedChange={() => handleDiseaseChange(disease.id)}
                        disabled={
                          disease.id !== "no-disease" &&
                          selectedDiseases.includes("no-disease")
                        }
                      />
                      <Label htmlFor={disease.id}>{disease.label}</Label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Homojen Gelişme Var mı? */}
        <div className="mb-6 w-full">
          <label className="block mb-2 font-semibold">
            Homojen Gelişme Var mı?
          </label>
          <div className="mb-4 w-full">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Homojen Gelişme Durumunu Seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yok">Yok</SelectItem>
                <SelectItem value="az">Az</SelectItem>
                <SelectItem value="orta">Orta</SelectItem>
                <SelectItem value="cokIyi">Çok İyi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="w-full">
          <Button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PlantObservationPage;
