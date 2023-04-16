import { type ReactNode } from "react";
import Head from "next/head";
import DottedGridBackground from "../components/DottedGridBackground";
import clsx from "clsx";
import Script from "next/script";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const DefaultLayout = (props: LayoutProps) => {
  const description =
    "在浏览器中组装、配置和部署自主AI代理。";
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]">
      <Head>
        <title>多变 Auto-GPT</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content="多变 Auto-GPT: 浏览器中的自主人工智能 🤖"
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:url" content="https://auto.redtom.com/" />
        <meta
          property="og:image"
          content="https://tiwen.redtom.com/static/imgs/index/logo.png"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DottedGridBackground className={clsx("min-h-screen", props.className)}>
        {props.children}
      </DottedGridBackground>
    </div>
  );
};

export default DefaultLayout;
