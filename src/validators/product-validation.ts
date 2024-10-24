import { z } from "zod";
import {
  minimumString,
  maximumString,
  nonnegative,
} from "./validation-message";

export class ProductValidation {
  static readonly CREATE = z.object({
    code: z
      .string()
      .min(1, { message: minimumString(1, "Code") })
      .max(10, { message: maximumString(10, "Code") }),
    name: z
      .string()
      .min(1, { message: minimumString(1, "Name") })
      .max(100, { message: maximumString(100, "Name") }),
    stock: z.number().nonnegative({ message: nonnegative("Stock") }),
    price: z.number().nonnegative({ message: nonnegative("Price") }),
    category_id: z.number(),
  });
}