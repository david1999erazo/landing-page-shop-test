// src/pages/LandingPage.js
import React from "react";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import CardTopNews from "../components/cards/CardTopNews";
import CardSecondNews from "../components/cards/CardSecondNews";

const newsData = [
  {
    image:
      "https://www.infocampo.com.ar/wp-content/uploads/2022/02/Novillos-plan-ganar.jpg",
    title: "U.S. Cattle Inventory Reaches Lowest Level Since 1951",
    description:
      "In January 2024, a USDA report revealed that the U.S. cattle inventory dropped to 87.2 million head, the lowest level in 73 years.",
    date: "January 1, 2024",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/ganado-holstein-pasta-belleza-prado-rural-generado-ia_188544-10582.jpg", // Reemplaza con la URL de tu imagen
    title: "Cattle Inventory Down 2% in the U.S",
    description:
      "According to a biannual USDA report, the U.S. cattle inventory decreased by 2% compared to 2023, totaling 87.2 million head as of January 2024.",
    date: "January 31, 2024",
  },
];

const secondNewsData = [
  {
    image: "",
    title: "Will Cattle Prices Set New Records in 2024?",
    description:
      "The U.S. cattle market is expected to see record-breaking prices in 2024 due to tight cattle supplies and increased demand.",
    date: "October 17, 2024",
  },
  {
    image:
      "https://www.stgen.com/upload/articles/intro-list/WEB---Slick-Gene-0110.jpg",
    title: "Genetic Visions-ST™ Offers Exclusive Test for Slick Gene",
  },
  {
    image: "",
    title: "US Beef Production Outlook Mixed, Says USDA",
    description:
      "The USDA reports a mixed outlook for U.S. beef production for late 2023 and into 2024. While current forecasts show a slight decline in fourth-quarter production, expectations for 2024 are set higher, with increased fed cattle marketings and higher slaughter rates.",
    date: "January 31, 2024",
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 font-sans">
      <section id="home" className="h-screen flex items-center justify-center">
        <div className="text-center mt-10 sm:mt-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Welcome to Our Shop
          </h1>
          <p className="text-md text gray-300 mb-4">
            Here you can find the best products everything you need in one place
          </p>
          <div className="hidden sm:block">
            <ImageCarousel />
          </div>
          <div className="block sm:hidden flex flex-col items-center p-5">
            <img
              src="https://i.pinimg.com/736x/f8/99/28/f899286f3498fbab0bc4276c78b8ad97.jpg"
              alt="Mobile View"
              className="w-full rounded-lg max-w-xs max-h-96 max-auto"
            />
          </div>
          <button className="mt-5  backdrop-blur-md px-6 py-3 bg-sky-700 font-bold	 text-fuchsia-200	 rounded-full hover:bg-sky-900">
            Shop Now
          </button>
        </div>
      </section>

      <section id="news" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            Latest News
          </h2>
          <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsData.map((news, index) => (
              <CardTopNews
                key={index}
                image={news.image}
                title={news.title}
                description={news.description}
                date={news.date}
              />
            ))}
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondNewsData.map((secondNews, index) => (
              <CardSecondNews
                key={index}
                image={secondNews.image}
                title={secondNews.title}
                description={secondNews.description}
                date={secondNews.date}
              ></CardSecondNews>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
