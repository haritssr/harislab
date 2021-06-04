import Image from "next/image";
import MathTab from "../components/MathTab";
import {Matriks } from "../lib/FlashCardMath"
export default function flashCardMath() {
  
  return (
    <main className="max-w-4xl mx-auto ">
      <div className="px-5 lg:px-0">
        <MathTab in="Card" to="flashCardPhy" />
      </div>

      <div className="px-5 mb-5 text-2xl font-semibold sm:px-0">Matriks</div>
      <div className="flex p-5 space-x-5 overflow-x-auto bg-gray-100 shadow-inner sm:p-5 ">
        {Matriks.map((Matrik) => (
          <div
            key={Matrik.id}
            className="flex-shrink-0 w-4/5 overflow-hidden rounded-lg shadow-2xl sm:w-1/4"
          >
            <div>
              <Image src={Matrik.pic} width="2000px" height="2000px" priority />
            </div>
            <div className="p-3 ">
              <div className="font-bold font-mw text-[#1c1c1e]">
                {Matrik.title}
              </div>
              <div className="font-semibold text-[#8e8e93] mt-1 mb-4">
                {Matrik.subTitle}
              </div>
              <div className="text-gray-600 leading">{Matrik.description}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}