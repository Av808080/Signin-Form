import React from "react";

const Gallery = () => {
  return (
    <div>
      <nav className="mx-10 my-5">
        <ul className="flex justify-around">
          <li>
            <a
              href="#"
              className="hover:bg-indigo-500 hover:text-white rounded-xl p-2 transition duration-200"
            >
              Vector
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-indigo-500 hover:text-white rounded-xl p-2 transition duration-200"
            >
              Illustration
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-indigo-500 hover:text-white rounded-xl p-2 transition duration-200"
            >
              Images
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-indigo-500 hover:text-white rounded-xl p-2 transition duration-200"
            >
              Icons
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex my-10 justify-around">
        <input
          className="relative border rounded-lg border-slate-400 px-2 py-1"
          type="search"
          placeholder="Search"
        />
        <button className="rounded-lg bg-black text-white p-2 px-8">
          Upload
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 mx-5 max-w-screen-2xl my-10 2xl:mx-auto md:grid-cols-2 xl:grid-cols-3">
        <img
          className="rounded-lg hover:saturate-150 transition duration-150 h-96 min-w-full"
          src="https://thefulltimewhistle.co/wp-content/uploads/2022/12/1200x675_cmsv2_da9a54fb-1926-5b58-b151-4256609bbfb9-6647488.webp"
        />
        <img
          className="rounded-lg hover:saturate-150 transition duration-150 h-96 min-w-full"
          src="https://www.thenews.com.pk/assets/uploads/akhbar/2022-12-15/1020201_2512814_FRANCE_akhbar.jpg"
        />
        <img
          className="rounded-lg hover:saturate-150 transition duration-150 h-96 min-w-full"
          src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/KVR5YXPPORIOPATIZPDP4D7PJI.jpg"
        />
        <img
          className="rounded-lg hover:saturate-150 transition duration-150 h-96 min-w-full"
          src="https://www.deccanherald.com/sites/dh/files/articleimages/2022/12/11/morocco-1170605-1670731507.jpg"
        />
        <img
          className="rounded-lg hover:saturate-150 transition duration-150 h-96 min-w-full"
          src="https://gumlet.assettype.com/pratidintime%2F2022-12%2Fd947ac38-49ca-4c65-b99e-823359a949a7%2Fdownload.jpg?auto=format%2Ccompress&fit=max&w=1200"
        />

        <img
          className="rounded-lg hover:saturate-150 transition duration-150 h-96 min-w-full"
          src="https://images.indianexpress.com/2022/12/POR-5.jpg"
        />

        <img
          className="rounded-lg hover:saturate-150 transition duration-150 h-96 min-w-full"
          src="https://images.hindustantimes.com/img/2022/11/28/1600x900/FBL-WC-2022-MATCH28-ESP-GER-570_1669601194628_1669601194628_1669601215333_1669601215333.jpg"
        />
        <img
          className="rounded-lg hover:saturate-150 transition duration-150 h-96 min-w-full"
          src="https://thefulltimewhistle.co/wp-content/uploads/2022/11/Screenshot-2022-11-26-at-12.50.28-AM.png"
        />
        <img
          src="https://cijm.org.gr/wp-content/uploads/2022/12/croatia.jpg"
          className="rounded-lg hover:saturate-150 transition duration-150 h-96 min-w-full"
        />
      </div>
    </div>
  );
};

export default Gallery;
