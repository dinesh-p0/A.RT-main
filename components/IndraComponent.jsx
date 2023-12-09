"use client";
import Image from "next/image";
import React, { useState } from "react";

const API_TOKEN = "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";

const ImageGenerationForm = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
      // tonyassi/text-to-image
      // stabilityai/stable-diffusion-2-1
      // https://api-inference.huggingface.co/models/runawayml/stable-diffusion-vi-5
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };
  const handleDownload = () => {
    if (!output) return;
    const a = document.createElement("a");
    a.href = output;
    a.download = "image.png";
    a.click();
  };

  return (
    <div className="mt-16 w-full max-w-[40em] pb-5">
      <form
        className="relative flex items-center justify-center "
        onSubmit={handleSubmit}
      >
        <Image
          src="/assets/link.svg"
          alt="link_icon"
          className="absolute left-0 my-2 ml-3 w-5"
          width={10}
          height={10}
        />
        <input
          type="text"
          name="input"
          placeholder="type your prompt here..."
          className="url_input peer"
        />
        <button
          className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          type="submit"
        >
          {" "}
          ↵{" "}
        </button>
      </form>
      <div>
        {loading && (
          <div className="bg-white p-3">
            <div className="flex animate-pulse space-x-4">
              <div className="bg-slate-300 sm:h-[200px]"></div>
            </div>
          </div>
        )}
        {!loading && output && (
          <div className="result-image">
            <img src={output} alt="art" />
          </div>
        )}
      </div>
      <button
        className="blue_gradient border p-2 text-2xl "
        onClick={handleDownload}
      >
        Download Image
      </button>
    </div>
  );
};

export default ImageGenerationForm;
