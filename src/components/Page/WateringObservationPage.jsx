import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function WateringObservationPage() {
  const [waterGiven, setWaterGiven] = useState(null); // State for 'Bitkiye Su Verildi mi?'
  const [fertigationDone, setFertigationDone] = useState(null); // State for 'Fertigasyon Yapıldı mı?'

  const renderWateringQuestion = (question, answer, setAnswer, dateLabel) => (
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
              <Label htmlFor={`${question}-date`}>{dateLabel}</Label>
              <Input type="date" id={`${question}-date`} />
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

  const renderFertigationQuestion = (
    question,
    answer,
    setAnswer,
    dateLabel,
    fertilizerLabel,
    amountLabel
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
                <Label htmlFor={`${question}-date`}>{dateLabel}</Label>
                <Input type="date" id={`${question}-date`} />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${question}-fertilizer`}>
                  {fertilizerLabel}
                </Label>
                <Input
                  type="text"
                  id={`${question}-fertilizer`}
                  placeholder="Kullanılan Gübre/Besleyici Giriniz"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${question}-amount`}>{amountLabel}</Label>
                <Input
                  type="text"
                  id={`${question}-amount`}
                  placeholder="Kullanılan gübre miktarı ve birim giriniz"
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

  return (
    <div className="form-container bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">
        Sulama ve Bitki Besleme Gözlemi
      </h2>
      <form className="flex flex-col items-start">
        <Accordion type="single" collapsible className="w-full mb-4">
          {/* Bitkiye Su Verildi mi? */}
          {renderWateringQuestion(
            "Bitkiye Su Verildi mi?",
            waterGiven,
            setWaterGiven,
            "Tarih Giriniz"
          )}
          {/* Fertigasyon Yapıldı mı? */}
          {renderFertigationQuestion(
            "Fertigasyon Yapıldı mı?",
            fertigationDone,
            setFertigationDone,
            "Tarih Giriniz",
            "Kullanılan Gübre/Besleyici Giriniz",
            "Kullanılan Gübre Miktarı ve Birim Giriniz"
          )}
        </Accordion>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default WateringObservationPage;
