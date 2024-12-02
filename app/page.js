"use client"
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [url, setUrl] = useState("")
  const [shorturl, setShorturl] = useState("")
  const [generated, setGenerated] = useState("")

  // create a generate function
  const generate = ()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("")
        setShorturl("")
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        alert(result.message)
        console.log(result)
      
      })
      .catch((error) => {
        console.error(error)
      })
    
  }

  return (
    <>
      <main>
        <div className="section-1 flex flex-col items-center gap-6">
          <h1 className="my-6 font-extrabold text-5xl blue">Short URL</h1>
          <div className="box border-2 flex flex-col items-center px-14 py-10 gap-6 white ">
            <h2 className="text-3xl font-bold ">
              Paste the URL to be Shortened
            </h2>
            <input
              type="text"
              value={url}
              placeholder="enter your URL"
              className="border-2 px-4 py-2 text-center md:w-[80%] sm:[w-80%] w-[200px] "
              onChange={(e)=>{setUrl(e.target.value)}}
            />
            <input
              type="text"
              value={shorturl}
              placeholder="enter your short URL"
              onChange={(e)=>{setShorturl(e.target.value)}}
              className="border-2 px-4 py-2 text-center md:w-[80%] sm:[w-80%] w-[200px]"
            />
            <button onClick={generate} className="btn px-6 py-2 text-white md:w-[80%] sm:[w-80%] w-[200px]">Shorten URL</button>
            {generated && <> <span className="text-sm">Your URL is </span> <code className="text-sm"><Link target="_blank" href={generated} >{generated}</Link></code></>}
          </div>
          <div className="box border-2 flex flex-col items-center px-14 py-10 gap-6 white ">
            <h2 className="text-xl font-bold">
              Want More? Try Premium Features!
            </h2>
            <p className="text-center">
              Custom short links, powerful dashboard, detailed analytics, API,
              UTM builder, QR codes, browser extension, app integrations and
              support
            </p>
            <button className="btn px-6 py-2 text-white md:w-[80%] sm:[w-80%] w-[200px]">Create Account</button>
          </div>
          <div className="max-w-[758px] lg:w-[758px] md:w-[500px] sm:w-[350px] w-[250px] 2xl:w-[758px]">
            <h2 className="text-xl font-bold">
              Simple and fast URL shortener!
            </h2>
            <p>
              ShortURL allows to shorten long links from{" "}
              <span className="text-blue-700">
                Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp,
                TikTok{" "}
              </span>{" "}
              , blogs and sites. Just paste the long URL and click the Shorten
              URL button. On the next page, copy the shortened URL and share it
              on sites, chat and emails. After shortening the URL, check{" "}
              <span className="text-blue-700">
                {" "}
                how many clicks it received.{" "}
              </span>
            </p>
          </div>
          <div className="max-w-[758px] lg:w-[758px] md:w-[500px] sm:w-[350px] w-[250px] 2xl:w-[758px]">
            <h2 className="text-xl font-bold">Shorten, share and track</h2>
            <p>
              Your shortened URLs can be used in publications, documents,
              advertisements, blogs, forums, instant messages, and other
              locations. Track statistics for your business and projects by
              monitoring the number of hits from your URL with our click
              counter.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-2 sm:grid-cols-3 max-w-[758px] gap-16 text-center my-7 lg:w-[758px] md:w-[500px] sm:w-[350px] w-[250px] 2xl:w-[758px]">
            <div className="box flex1">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  color={"#000000"}
                  fill={"none"}
                >
                  <path
                    d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <p>Easy</p>
              <p>ShortURL is easy and fast, enter the long link to get your shortened link</p>
            </div>
            <div className="box flex1">
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M9.521 14.4356L14.434 9.52258" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12.569 15.1084C13.3087 16.2488 13.1113 17.4178 12.2568 18.2723L9.26158 21.2675C8.28318 22.2459 6.69687 22.2459 5.71847 21.2675L2.73234 18.2814C1.75393 17.303 1.75393 15.7167 2.73234 14.7383L5.72755 11.743C6.42949 11.0411 7.76361 10.6357 8.91007 11.4659M15.1088 12.5685C16.2492 13.3082 17.4182 13.1109 18.2727 12.2564L21.2679 9.26114C22.2463 8.28273 22.2463 6.69641 21.2679 5.718L18.2818 2.73185C17.3034 1.75344 15.7171 1.75344 14.7387 2.73185L11.7434 5.72709C11.0415 6.42903 10.6362 7.76315 11.4664 8.90962" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
              </span>
            
              <p>Shortened</p>
              <p>Use any link, no matter what size, ShortURL always shortens</p>
            </div>
            <div className="box flex1">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M14.2618 3.59937C13.1956 2.53312 12.6625 2 12 2C11.3375 2 10.8044 2.53312 9.73815 3.59937C9.09832 4.2392 8.46427 4.53626 7.55208 4.53626C6.7556 4.53626 5.62243 4.38178 5 5.00944C4.38249 5.63214 4.53628 6.76065 4.53628 7.55206C4.53628 8.46428 4.2392 9.09832 3.59935 9.73817C2.53312 10.8044 2.00001 11.3375 2 12C2.00002 12.6624 2.53314 13.1956 3.59938 14.2618C4.31616 14.9786 4.53628 15.4414 4.53628 16.4479C4.53628 17.2444 4.38181 18.3776 5.00949 19C5.63218 19.6175 6.76068 19.4637 7.55206 19.4637C8.52349 19.4637 8.99128 19.6537 9.68457 20.347C10.2749 20.9374 11.0663 22 12 22C12.9337 22 13.7251 20.9374 14.3154 20.347C15.0087 19.6537 15.4765 19.4637 16.4479 19.4637C17.2393 19.4637 18.3678 19.6175 18.9905 19M20.4006 9.73817C21.4669 10.8044 22 11.3375 22 12C22 12.6624 21.4669 13.1956 20.4006 14.2618C19.6838 14.9786 19.4637 15.4414 19.4637 16.4479C19.4637 17.2444 19.6182 18.3776 18.9905 19M18.9905 19H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 10.3077C8 10.3077 10.25 10 12 14C12 14 17.0588 4 22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
            </span>
              <p>Secure</p>
              <p>It is fast and secure, our service has HTTPS protocol and data encryption</p>
            </div>
            <div className="box flex1">
             <span>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
    <path d="M19.8988 19.9288L22 22M21.1083 17.0459C21.1083 19.2805 19.2932 21.0919 17.0541 21.0919C14.8151 21.0919 13 19.2805 13 17.0459C13 14.8114 14.8151 13 17.0541 13C19.2932 13 21.1083 14.8114 21.1083 17.0459Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
             </span>
              <p>Statistics</p>
              <p>Check the number of clicks that your shortened URL received</p>
            </div>
            <div className="box flex1">
             <span>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M7.89205 9.35707L5.4741 11.9595C5.15171 12.2914 4.57635 13.1576 4.50692 13.951C4.4339 14.7853 5.18562 15.9822 5.4741 16.4404C6.22604 17.6346 6.52881 18.2973 7.40846 19.4276C7.88617 20.0414 9.17658 21.2649 11.2772 21.4191C12.8453 21.5341 14.4062 21.5234 15.1459 21.4191C15.6538 21.3474 16.8868 21.1203 18.0474 19.9254C19.2081 18.7306 19.4982 16.7723 19.4982 15.9425V7.97657C19.4982 7.4787 19.2081 6.48296 18.0474 6.48296C16.8868 6.48296 16.5967 7.4787 16.5967 7.97657V11.4617M7.89205 13.951V5.98509C7.89205 5.48722 8.1822 4.49148 9.34282 4.49148C10.5034 4.49148 10.7936 5.48722 10.7936 5.98509M10.7936 5.98509V10.4659M10.7936 5.98509V3.99361C10.7936 3.49574 11.0837 2.5 12.2444 2.5C13.405 2.5 13.6951 3.49574 13.6951 3.99361V5.98509M13.6951 5.98509V10.4659M13.6951 5.98509C13.6951 5.48722 13.9853 4.49148 15.1459 4.49148C16.3065 4.49148 16.5967 5.48722 16.5967 5.98509V8.47444" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
             </span>
              <p>Reliable</p>
              <p>All links that try to disseminate spam, viruses and malware are deleted</p>
            </div>
            <div className="box flex1">
             <span>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M14 3H10C6.22876 3 4.34315 3 3.17157 4.17157C2 5.34315 2 7.22876 2 11C2 14.7712 2 16.6569 3.17157 17.8284C4.34315 19 6.22876 19 10 19H14C17.7712 19 19.6569 19 20.8284 17.8284C22 16.6569 22 14.7712 22 11C22 7.22876 22 5.34315 20.8284 4.17157C19.6569 3 17.7712 3 14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 19L19 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 19L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
             </span>
              <p>Devices</p>
              <p>Compatible with smartphones, tablets and desktop</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
