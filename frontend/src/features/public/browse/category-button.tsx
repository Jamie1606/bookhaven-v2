import { Button } from "@/components/ui/button";

interface CategoryButtonProps {
  label: string;
  active: boolean;
}

export default function CategoryButton({ label, active }: CategoryButtonProps) {
  return <Button variant="outline">{label}</Button>;
}
