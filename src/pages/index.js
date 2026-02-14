import LiquidBackground from "@/componets/LiquidBackground";
import Header from "@/componets/Header/Header";
import React from "react";

export default function Home() {
  return (<div className="page">
    {/*<LiquidBackground/>*/}
    <img
      src="/images/noize.png"
      className="noise"
    />

    <main className="content">
      <Header/>
      <img
        className="background"
        src="/images/background.png"
        alt="background"
      />
      <div className={"title_container"}>
        <h1 className={"title"}>
          Motion — включай мир на полную
        </h1>
        <div className={"subtitle"}>
          Быстрые сервера в актуальных точках мира, стабильное подключение и бесплатный 7-ми дневный период по ссылке
        </div>
      </div>
    </main>
  </div>);
}
