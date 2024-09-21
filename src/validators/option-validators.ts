import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "black" },

  { label: "Blue", value: "blue", tw: "blue-900" },
  { label: "Rose", value: "rose", tw: "rose-900" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iphonex",
      value: "iphonex",
    },
    { label: "iphone11", value: "iphone11" },
    { label: "iphone12", value: "iphone12" },
    { label: "iphone13", value: "iphone13" },
    { label: "iphone14", value: "iphone14" },
    { label: "iphone15", value: "iphone15" },
  ],
} as const;

export const MATERIALS = {
  name: "material",

  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;
export const FINISHES = {
  name: "finish",

  options: [
    {
      label: "Smooth finish ",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured finish ",
      value: "textured",
      description: "Soft grippy texture ",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
