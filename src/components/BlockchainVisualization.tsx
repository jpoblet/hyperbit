import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Block {
  id: number;
  hash: string;
  prevHash: string;
  data: string;
  nonce: number;
}

const BlockchainVisualization = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate a simple hash based on input
  const generateHash = (
    data: string,
    prevHash: string,
    nonce: number,
  ): string => {
    return btoa(`${data}${prevHash}${nonce}`).substring(0, 8);
  };

  // Initialize blockchain with genesis block and add more blocks
  useEffect(() => {
    const genesisBlock: Block = {
      id: 0,
      hash: generateHash("Genesis Block", "0", 0),
      prevHash: "0",
      data: "Genesis Block",
      nonce: 0,
    };

    const blockData = [
      "Transaction: Alice sends 5 BTC to Bob",
      "Transaction: Charlie sends 2.5 BTC to Dave",
      "Transaction: Eve sends 1 BTC to Frank",
      "Transaction: Grace sends 3 BTC to Heidi",
    ];

    const newBlocks = [genesisBlock];

    // Create chain of blocks
    blockData.forEach((data, index) => {
      const prevBlock = newBlocks[index];
      const nonce = Math.floor(Math.random() * 10000);
      const newBlock: Block = {
        id: index + 1,
        prevHash: prevBlock.hash,
        data: data,
        nonce: nonce,
        hash: generateHash(data, prevBlock.hash, nonce),
      };
      newBlocks.push(newBlock);
    });

    setBlocks(newBlocks);
  }, []);

  return (
    <div
      className="w-full py-16 px-4 bg-slate-900 text-white"
      id="blockchain-visualization"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Blockchain Technology Visualization
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            See how blockchain works with this interactive visualization. Each
            block contains transaction data and is cryptographically linked to
            the previous block.
          </p>
        </div>

        <div ref={containerRef} className="relative overflow-x-auto py-8">
          <div className="flex items-center justify-start min-w-max px-4 space-x-6">
            {blocks.map((block, index) => (
              <div key={block.id} className="flex items-center">
                {/* Block visualization */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative w-64 h-64 p-4 rounded-lg shadow-lg ${hoveredBlock === block.id ? "bg-blue-700" : "bg-blue-900"}`}
                  onMouseEnter={() => setHoveredBlock(block.id)}
                  onMouseLeave={() => setHoveredBlock(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    Block #{block.id}
                  </div>
                  <div className="mt-4">
                    <div className="mb-2">
                      <span className="text-blue-300 text-xs">PREV HASH:</span>
                      <p className="font-mono text-sm truncate">
                        {block.prevHash}
                      </p>
                    </div>
                    <div className="mb-2">
                      <span className="text-blue-300 text-xs">DATA:</span>
                      <p className="font-mono text-sm break-words">
                        {block.data}
                      </p>
                    </div>
                    <div className="mb-2">
                      <span className="text-blue-300 text-xs">NONCE:</span>
                      <p className="font-mono text-sm">{block.nonce}</p>
                    </div>
                    <div>
                      <span className="text-blue-300 text-xs">HASH:</span>
                      <p className="font-mono text-sm truncate bg-blue-800 p-1 rounded">
                        {block.hash}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow connecting to next block */}
                {index < blocks.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.1 }}
                    className="flex-shrink-0 mx-2"
                  >
                    <svg
                      width="40"
                      height="24"
                      viewBox="0 0 40 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z"
                        fill="#60A5FA"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-300 max-w-2xl mx-auto">
            Each block contains transaction data and a unique hash. The hash is
            generated based on the block's data, the previous block's hash, and
            a nonce value. This creates an immutable chain where any change to a
            block would invalidate all subsequent blocks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockchainVisualization;
