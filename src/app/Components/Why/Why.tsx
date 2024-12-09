import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
const FeaturesSection = () => {
    return (
      <section className="w-full h-[355px] bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-8">What makes our brand different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon>
              <h3 className="text-base font-medium text-gray-800">Next day as standard</h3>
              <p className="mt-2 text-sm text-gray-600">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>
  
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
              <h3 className="text-base font-medium text-gray-800">Made by true artisans</h3>
              <p className="mt-2 text-sm text-gray-600">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
  
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
              <h3 className="text-base font-medium text-gray-800">Unbeatable prices</h3>
              <p className="mt-2 text-sm text-gray-600">
                For our materials and quality, you won’t find better prices anywhere.
              </p>
            </div>
  
            <div className=" flex flex-col items-center text-center">
            <FontAwesomeIcon icon={faSeedling}></FontAwesomeIcon>
              <h3 className="text-base font-medium text-gray-800">Recycled packaging</h3>
              <p className="mt-2 text-sm text-gray-600">
                We use 100% recycled packaging to ensure our footprint is manageable.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  