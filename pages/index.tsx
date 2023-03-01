import SeoTags from "@/components/SeoTags"
import { GiIncomingRocket } from "react-icons/gi"
// @see http://react-icons.github.io/react-icons/search?q=rock

export default function Home() {
  return (
    <>
      <SeoTags />
      <main className="p-4">
        <GiIncomingRocket className="text-[calc(5rem+5vw)] text-some-color" />
        <span className="font-semibold text-3xl lg:text-5xl block pt-4">
          NextJS 13
        </span>
      </main>
    </>
  )
}
