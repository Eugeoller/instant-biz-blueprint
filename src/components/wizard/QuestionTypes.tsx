
import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

// Pregunta de selección única
interface SingleChoiceQuestionProps {
  question: string;
  options: string[];
  onChange: (value: string) => void;
  value?: string;
}

export const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({
  question,
  options,
  onChange,
  value
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <RadioGroup 
        value={value} 
        onValueChange={onChange} 
        className="space-y-3"
      >
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={`option-${index}`} />
            <Label htmlFor={`option-${index}`} className="text-base cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

// Pregunta de selección múltiple
interface MultiChoiceQuestionProps {
  question: string;
  options: string[];
  onChange: (value: string[]) => void;
  value?: string[];
}

export const MultiChoiceQuestion: React.FC<MultiChoiceQuestionProps> = ({
  question,
  options,
  onChange,
  value = []
}) => {
  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter(item => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Checkbox 
              id={`option-${index}`} 
              checked={value.includes(option)} 
              onCheckedChange={() => toggleOption(option)}
            />
            <Label htmlFor={`option-${index}`} className="text-base cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

// Pregunta con escala
interface ScaleQuestionProps {
  question: string;
  min: number;
  max: number;
  minLabel: string;
  maxLabel: string;
  onChange: (value: number) => void;
  value?: number;
}

export const ScaleQuestion: React.FC<ScaleQuestionProps> = ({
  question,
  min,
  max,
  minLabel,
  maxLabel,
  onChange,
  value
}) => {
  const options = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div>
        <div className="flex justify-between mb-2 text-sm text-bizplan-gray">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
        <div className="flex justify-between">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors
                ${value === option 
                  ? 'bg-bizplan-blue text-white' 
                  : 'bg-bizplan-gray-light text-bizplan-gray hover:bg-bizplan-blue-light'
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Pregunta con texto libre
interface TextQuestionProps {
  question: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value?: string;
  multiline?: boolean;
}

export const TextQuestion: React.FC<TextQuestionProps> = ({
  question,
  placeholder,
  onChange,
  value = "",
  multiline = false
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      {multiline ? (
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
          rows={5}
        />
      ) : (
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full"
        />
      )}
    </div>
  );
};
