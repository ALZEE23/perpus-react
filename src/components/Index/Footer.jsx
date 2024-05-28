import logo from "../../assets/Vector.svg"
import logo1 from "../../assets/Vector (1).svg"
import logo2 from "../../assets/Vector (2).svg"
import logo3 from "../../assets/Vector (3).svg"

export default function Footer(){
    return (
      <>
        <footer className="w-screen h-72 bg-[#9A5028] pt-20">
          <div className="flex h-24">
            <div className=" flex my-auto mx-auto space-x-8">
              <img src={logo} alt="" />
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>

            {/* <img src={} alt="" /> */}
          </div>
          <div className="flex">
            <div className="mx-auto">
              <h1 className="mx-auto text-white text-xl">
                Copyright © SiPerpus 2023 All rights reserved
              </h1>
            </div>
          </div>
        </footer>
      </>
    );
}