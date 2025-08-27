import Image from "next/image";

export const Footer = () => {
  return (
    <main className="bg-gray-800 text-gray-200 mt-4">
      <div className="flex flex-col gap-4 justify-center item-center pt-4 px-20">
          <div className="flex items-center w-10 h-10 bg-white rounded">
            <Image
              src="/assets/Vector.svg"
              alt="Company Logo"
              width={120}
              height={40}
              className="h-20 w-auto text-white"
            />
          </div>
          <div>
            <p className="leading-7 font-semibold tracking-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel ipsam voluptatum, expedita sequi perspiciatis laboriosam porro explicabo atque commodi sapiente, fugit asperiores, accusantium repellendus culpa itaque tempora iusto officiis maiores.
            Totam, necessitatibus. Ab, rem corrupti aliquid tenetur beatae corporis architecto quas, quo facilis animi dignissimos quis voluptas veniam doloremque totam expedita suscipit aliquam illo delectus in? Quidem voluptatum quas repellat?</p>
          </div>
      </div>

      <div>
        <div  className="flex gap-60 justify-center item-center py-6 ">
            <div>
                <h2 className="text-xl font-bold">Explore</h2>
                <ul>
                    <li><a href="">Apartments in Dubai</a></li>
                    <li><a href="">Hotels in New York</a></li>
                    <li><a href="">Villa in Spain</a></li>
                    <li><a href="">Mansion in Indonesia</a></li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold">Company</h2>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Customers</a></li>
                    <li><a href="">Brand</a></li>
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-bold">Help</h2>
                <ul>
                    <li><a href="">support</a></li>
                    <li><a href="">Cancel Booking</a></li>
                    <li><a href="">Refunds Process</a></li>
                </ul>
            </div>
        </div>
      </div>
    </main>
  );
};
