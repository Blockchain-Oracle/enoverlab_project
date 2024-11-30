import { Input } from "@/components/ui/input";
import { type ComponentPropsWithoutRef } from "react";

type SerchProps = ComponentPropsWithoutRef<typeof Input>;
export default function Search(searchParameter: SerchProps) {
  return <Input {...searchParameter} />;
}
