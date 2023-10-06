import { useState } from "react";
import { Rating } from "@/components/rating/Rating"
import { Thanks } from "@/components/thanks/Thanks"

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    setIsSubmitted(!isSubmitted);
  }

  return (
    isSubmitted ? <Thanks /> : <Rating handleSubmit={handleSubmit} />
  );
}
