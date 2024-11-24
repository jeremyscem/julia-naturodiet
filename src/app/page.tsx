import HomePage from "@/components/HomePage";
import { colors } from "theme/colors";

export default async function Home() {
  return (
    <main style={{ backgroundColor: colors.neutral, overflow: "hidden" }}>
      <HomePage />
    </main>
  );
}
