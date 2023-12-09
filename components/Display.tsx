"use client";
import Image from "next/image";
import React, { useState } from "react";

const Display = () => {
  const [prompt, setPrompt] = useState("");

  const [loading, setLoading] = useState(0);

  const [summary, setSummary] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSummary("");
    setLoading(1);
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${prompt}&length=3`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "96fbb09815msh1d750b806789048p1adb3bjsn89eb6feda57a",
        "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setLoading(0);
      setSummary(result.summary);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="mt-16 w-full max-w-[40em]">
      <div className="flex w-full flex-col gap-2">
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
            type="url"
            placeholder="Enter a URL"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
            className="url_input peer"
          />
          <button
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
            type="submit"
          >
            ↵
          </button>
        </form>
        {summary && (
          <div className="link_card">
            <div className="copy_btn">
              <Image
                src="/assets/copy.svg"
                alt="copy_icon"
                className="h-[40%] w-[40%] object-contain"
                width={10}
                height={10}
              />
            </div>
            <p>{summary}</p>
          </div>
        )}

        {loading === 1 && (
          <div className="bg-white p-3">
            <div className="flex animate-pulse space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-slate-200"></div>
                <div className="h-2 rounded bg-slate-200"></div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                </div>

                <div className="h-2 rounded bg-slate-200"></div>

                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                    <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  </div>
                  <div className="h-2 rounded bg-slate-200"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <div className="flex max-h-60 flex-col gap-1 overflow-y-auto">
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setarticle(item)}
              className="link_card"
            >
              <div className="copy_btn">
                <Image
                  src="/assets/copy.svg"
                  alt="copy_icon"
                  className="h-[40%] w-[40%] object-contain"
                  width={10}
                  height={10}
                />
              </div>
              <p>{item.url}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Display;
