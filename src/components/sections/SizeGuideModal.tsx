import React, { useState } from 'react';

const SizeGuideModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Trigger Button */}
    
      <button onClick={toggleModal} className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
            View Size Guide
          </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Modal Content */}
          <div className="bg-white w-11/12 max-w-lg p-6 rounded-2xl shadow-lg overflow-auto max-h-[90vh]">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Size Guide
            </h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border-b">Size</th>
                  <th className="p-2 border-b">Chest (inches)</th>
                  <th className="p-2 border-b">Waist (inches)</th>
                  <th className="p-2 border-b">Hip (inches)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border-b">S</td>
                  <td className="p-2 border-b">34-36</td>
                  <td className="p-2 border-b">28-30</td>
                  <td className="p-2 border-b">34-36</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">M</td>
                  <td className="p-2 border-b">38-40</td>
                  <td className="p-2 border-b">32-34</td>
                  <td className="p-2 border-b">38-40</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">L</td>
                  <td className="p-2 border-b">42-44</td>
                  <td className="p-2 border-b">36-38</td>
                  <td className="p-2 border-b">42-44</td>
                </tr>
                <tr>
                  <td className="p-2 border-b">XL</td>
                  <td className="p-2 border-b">46-48</td>
                  <td className="p-2 border-b">40-42</td>
                  <td className="p-2 border-b">46-48</td>
                </tr>
              </tbody>
            </table>

            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeGuideModal;
